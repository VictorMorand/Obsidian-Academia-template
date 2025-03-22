# <%= it.title %>
```meta-bind-button
label: 🔄 Update Note
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: "zotlit-update"
hidden: true
actions:
  - type: command
    command: zotlit:update-literature-note
```
```meta-bind-button
label: ➡️ Open in Zotero
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: "zotero-open"
hidden: true
actions:
  - type: open
    link: <%= it.backlink %>
    newTab: false
```
```meta-bind-button
label: 👀 View Highlights
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: zotlit-view-panel
hidden: true
actions:
  - type: command
    command: zotlit:zotero-annot-view
```
``BUTTON[zotero-open]`` ``BUTTON[zotlit-update]`` ``BUTTON[zotlit-view-panel]`` 

> [!abstract]- Abstract
><%= it.abstractNote %>


# Notes

# Reading Notes
<%~ include("annots", it.annotations) %>