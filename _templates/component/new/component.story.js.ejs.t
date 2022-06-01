---
to: src/components/<%= name %>/<%= name %>.story.js
---
import React from 'react';
import <%= h.changeCase.pascal(name) %> from './';

export default {
  title: '<%= componentKind %>/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>
};

export const base = () => <<%= h.changeCase.pascal(name) %> />;