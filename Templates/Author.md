---
tags:
  - author
URL:
---
# <% tp.file.title %>
- 
<% await tp.file.move('LiteratureNotes/Authors/'+ tp.file.title ) %>
## Authored
```dataviewjs
const {Ressources} = await cJS()
Ressources.authorPapers(dv)
```