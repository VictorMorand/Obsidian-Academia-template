---
tags:
  - author
URL:
---
# <% tp.file.title %>
- 
<% await tp.file.move('Wiki/Authors/'+ tp.file.title ) %>
## Authored
```dataviewjs
const {Ressources} = await cJS()
Ressources.authorPapers(dv)
```