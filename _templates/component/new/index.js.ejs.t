---
to: src/components/<%= name %>/index.js
---
import <%= h.changeCase.pascal(name) %> from './<%= name %>';
export default <%= h.changeCase.pascal(name) %>;
