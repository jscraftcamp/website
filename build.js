#!/usr/bin/env node

import {copyFile, mkdir, readdir, readFile, stat, writeFile} from 'node:fs/promises';
import {join} from 'node:path';

const buildPage = async (componentsDir, templateFile, outputDir, outputFilename = 'index.html') => {
  await mkdir(outputDir, {recursive: true});
  try {
    let output = await readFile(templateFile, 'utf-8');
    const components = await readdir(componentsDir);
    for (const component of components) {
      const componentPath = join(componentsDir, component);
      if ((await stat(componentPath)).isDirectory()) {
        const componentName = component.split('-').pop();
        const content = await readFile(join(componentPath, 'index.html'), 'utf-8');
        output = output.replace(`{{ ${componentName} }}`, content);
      }
    }
    const outputFile = join(outputDir, outputFilename);
    const writingPromise = writeFile(outputFile, output);
    console.log(`Writing ${outputFile}`);
    return writingPromise;
  } catch (error) {
    console.error('Error:', error);
  }
};

const buildPages = async (componentsDir, srcDir, outputDir) => {
  const pages = await readdir(srcDir);
  const writingPromises = [];
  writingPromises.push(buildPage(componentsDir, join(srcDir, 'index.html'), outputDir));
  for (const page of pages) {
    const pagePath = join(srcDir, page);
    if ((await stat(pagePath)).isDirectory()) {
      const outputPageDir = join(outputDir, page);
      writingPromises.push(buildPage(componentsDir, join(pagePath, 'index.html'), outputPageDir));
    }
  }
  return Promise.all(writingPromises);
}

const buildCssFiles = async (componentsDir, outputDir) => {
  const components = await readdir(componentsDir);
  const allContent = [];
  for (const component of components) {
    const componentPath = join(componentsDir, component);
    allContent.push(await readFile(join(componentPath, 'style.css'), 'utf-8'));
  }
  const outputFile = join(outputDir, 'components.css');
  const writingPromise = writeFile(outputFile, allContent.join('\n'));
  console.log(`Writing ${outputFile}`);
  return writingPromise;
};

const PAGES_DIR = 'src/pages';
const SPONSOR_LOGOS_DIR = 'src/lib/sponsoring/sponsors-2025';
const COMPONENTS_DIR = 'src/components';
const DIST_DIR = '_dist';

const start = Date.now();
await mkdir(DIST_DIR, {recursive: true});
await mkdir(join(DIST_DIR, 'img/sponsors'), {recursive: true});
Promise.all([
  buildPages(COMPONENTS_DIR, PAGES_DIR, DIST_DIR),
  buildCssFiles(COMPONENTS_DIR, DIST_DIR),
  copyFile(join(PAGES_DIR, 'reset.css'), join(DIST_DIR, 'reset.css')),
  copyFile(join(PAGES_DIR, 'global.js'), join(DIST_DIR, 'global.js')),
  
  // the sponsors
  copyFile(join(SPONSOR_LOGOS_DIR, 'codecentric.webp'), join(DIST_DIR, 'img/sponsors/codecentric.webp')),
  copyFile(join(SPONSOR_LOGOS_DIR, 'deno-logo.svg'), join(DIST_DIR, 'img/sponsors/deno-logo.svg')),
  copyFile(join(SPONSOR_LOGOS_DIR, 'saab.svg'), join(DIST_DIR, 'img/sponsors/saab.svg')),
  
]).then(() => {
  const duration = Date.now() - start;
  console.log(`[${new Date().toISOString()}] Build completed. Took ${duration}ms`);
});
