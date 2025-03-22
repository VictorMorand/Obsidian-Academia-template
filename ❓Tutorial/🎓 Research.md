
```meta-bind-button
label: 🔎 Import or Open Litterature Note
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: "zotlit"
hidden: true
actions:
  - type: command
    command: zotlit:note-quick-switcher
```
<h1 style="text-align:center;">🎓Research</h1>

---
[[❓Tutorial|<<Back to Tutorial]] 

Now that [[ZotLit]] is setup...

### Importing Literature Note
Click on the button below to open/import a new Literature Note from your [[Zotero]] database.
``BUTTON[zotlit]``

## Papers
All the imported Zotero items will be displayed down here.
```dataviewjs
// get all papers with CustomJS Function 
const {Ressources} = await cJS()
const pages = Ressources.allPapers(dv);
// create a table from it
dv.table( [, "Title", "year", "authors"],
	 pages.sort(p => p.status, 'desc')
	 .map(p => [ p.title, p.year, p.authors] )
	 )
```

>[!faq] try to click on an Author

>[!faq]- Using Linux ?
> Zotero hyperlinks may not work, 

