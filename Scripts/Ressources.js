class Ressources {
  /** These are the parameters that can be used by the functions defined here
   * @param {Object} dv DataView object of Obisidian extension.
  */
  
  allPapers(dv, filter = null) { // Returns a list of all available papers and process them to easily create tables 
    const { obsidian, app } = self.customJS || {};
    if (obsidian == null || app == null) throw new Error("customJS is null.");
    // if filter is not null, filter the papers
    const query = '"Notes/Ressources/LitteratureNotes"' + (filter ? filter : "")

    return dv.pages(query)
        .sort(p => p.statut, 'asc')
        .map(p => { 
          //TODO transform authors into list of clickable !
          if (p.authors == null) p.authors = "";
          let authors = this.formatAuthors(p.authors);

          // add link to the title
          p.title =  `[[${p.file.path}|${p.title}]]`,
          p.authors = authors
          return p
          })
  
        }

  allRessources(dv) { // Returns a list of all available papers and process them to easily create tables 
    const { obsidian, app } = self.customJS || {};
    if (obsidian == null || app == null) throw new Error("customJS is null.");
    
    // get all papers 
    return dv.pages('"Notes/Ressources" or #Book')
        .sort(p => p.statut, 'asc')
        .map(p => { 
          //TODO transform authors into list of clickable !
          if (p.authors == null) p.authors = "";
          let authors = String(p.authors);
          if (p.title == null) p.title = p.file.name;
          // add link to the title
          p.title =  `[[${p.file.path}|${p.title}]]`,
          p.authors = authors
          return p
          })
  }

  formatAuthors(authors){
    if (authors == null) return "";
    return String(authors).split(", ").map(
      a => `[[Connaissances/Personnes/Authors/${a}|${a}]]`
      ).join(", ");
  }

  // Display all contributions of a specific author in a table 
  authorPapersdv(dv){
    let name = dv.current().file.name // access current file name
    let pages = this.allRessources(dv)

    pages = pages.filter(p => p.authors.includes(name))
    dv.table( ["Status", "Title", "year", "authors"],
      pages.sort(p => p.year, 'desc')
      .map(p => [p.status, p.title, p.year, p.authors] )
      )
  }

  authorPapers(dv){
   // Add a CSS snippet to style related papers table
    const style = document.createElement('style');
    style.textContent = `
      .block-language-dataviewjs .bases-view { margin-top: 1em; }
      .block-language-dataviewjs .bases-header { display: none !important; }
      .block-language-dataviewjs .bases-thead { display: none !important; }
    `;

   const par = dv.paragraph("![[Ressources.base#authorPapers]]");
   par.appendChild(style);
  }

  relatedPapersDv(dv){
    const name = dv.current().file.name // access current file name
    let filter = ` AND [[${name}]]`
    let pages = this.allPapers(dv, filter)
    dv.table( ["Status", "Title", "year", "authors"],
      pages.sort(p => p.year, 'desc')
      .map(p => [p.status, p.title, p.year, p.authors] )
      )
  }

  relatedPapers(dv){
    // Add a CSS snippet to style related papers table
    const style = document.createElement('style');
    style.textContent = `
      .block-language-dataviewjs .bases-view { margin-top: 1em; }
      .block-language-dataviewjs .bases-header { display: none !important; }
      .block-language-dataviewjs .bases-thead { display: none !important; }
    `;

   const par = dv.paragraph("![[Ressources.base#Related]]");
   par.appendChild(style);
  }

  paperheader(dv) {
    const formattedAuthors = this.formatAuthors(dv.current().authors);
    dv.paragraph(
      `
  \`\`\`meta-bind-button
  label: 🔄 Update Note
  style: default
  id: "zotlit-update"
  hidden: true
  actions:
    - type: command
      command: zotlit:update-literature-note
  \`\`\`
  \`\`\`meta-bind-button
  label: ➡️ Open in Zotero
  style: default
  id: "zotero-open"
  hidden: true
  actions:
    - type: open
      link: zotero://select/library/items/${dv.current()['zotero-key']}
      newTab: false
  \`\`\`
  \`\`\`meta-bind-button
  label: 👀 View Highlights
  style: default
  id: zotlit-view-panel
  hidden: true
  actions:
    - type: command
      command: zotlit:zotero-annot-view
  \`\`\`
  \`VIEW[{status}]\`  - \`\`BUTTON[zotero-open]\`\` \`\`BUTTON[zotlit-update]\`\` \`\`BUTTON[zotlit-view-panel]\`\` 🔗\`VIEW[{url}][link]\`
  ---
  ${formattedAuthors}
    `,
    );
  }

  itemHeader(dv){ // inserted on to af all Raindrop pages
    // const mb = app.plugins.getPlugin('obsidian-meta-bind-plugin')?.api;
    // We create the button. This will return something that inherits from `Mountable` and can be mounted to the DOM.
    
    // cf https://www.moritzjung.dev/obsidian-meta-bind-plugin-docs/guides/api/ 
    // andapi doc: https://www.moritzjung.dev/obsidian-meta-bind-plugin-docs/api/classes/obsapi/
    // Create the input field declaration with the bind target and arguments
    // const btOpenClippingsCfg = {
    //   style: 'default',
    //   label: 'open Clippings',
    //   id: 'open-clippings',
    //   action: {
    //     type: 'open',
    //     link: '[[Clippings]]', // the file link ([[file]]) or URL (https://www.example.com) to open
    //     newTab: true, // whether to open the link in a new tab
    //   },
    // };
    
    // const openButton = mb.createButtonMountable( dv.current().file.path, 
    // { declaration: btOpenClippingsCfg,
    //   isPreview: true,
    //     } );

    // const input = mb.createInlineFieldFromString(`INPUT[inlineSelect(option(✅),option(⌛),option(❌)):status]`, dv.current().file.path);
    
    // Mount the button to the DOM and make sure it gets unmounted when the component is destroyed.
    // mb.wrapInMDRC(openButton, dv.container, dv.component);

    // mb.wrapInMDRC(input,  dv.container, dv.component);
    const formattedAuthors = this.formatAuthors(dv.current().authors);
    dv.paragraph(
      `\`INPUT[inlineSelect(option(✅),option(⌛),option(❌)):status]\` [🖥️Original](${dv.current().url}) | [🌍Clippings](obsidian://open?vault=Vault&file=Projets%2FObsidian%2FClippings)  _by ${formattedAuthors}_`
    )
    
    
    }

  bookHeader(dv){ // inserted on to af all Raindrop pages
    const formattedAuthors = this.formatAuthors(dv.current().authors);
    dv.paragraph(
      `\`INPUT[inlineSelect(option(✅),option(⌛),option(❌)):status]\` [[📖Bibliothèque]] by _${formattedAuthors}_`
    )
    
    
    }
  }