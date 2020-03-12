---
to: src/components/<%= name %>/<%= name %>.js
---
import React from 'react';
import style from './<%= name %>.module.scss';

export default () => <div className={style.root}><%= h.changeCase.pascal(name) %></div>;