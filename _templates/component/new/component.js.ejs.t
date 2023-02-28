---
to: src/components/<%= name %>/<%= name %>.js
---
import React from 'react';
import * as style from './<%= name %>.module.scss';

export const <%= h.changeCase.pascal(name) %> = () => <div className={style.root}><%= h.changeCase.pascal(name) %></div>;

export default <%= name %>