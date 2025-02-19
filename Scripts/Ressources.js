class Ressources {
  /** These are the parameters that can be used by the functions defined here
   * @param {Object} dv DataView object of Obisidian extension.
   */
  allPapers(dv, filter = null) { // Returns a list of all available papers and process them to easily create tables 
    const { obsidian, app } = self.customJS || {};
    if (obsidian == null || app == null) throw new Error("customJS is null.");
    // if filter is not null, filter the papers
    const query = '"LiteratureNotes"' + (filter ? filter : "")

    return dv.pages(query)
        .sort(p => p.statut, 'asc')
        .map(p => { 
          //TODO transform authors into list of clickable !
          if (p.authors == null) p.authors = "";
          let authors = String(p.authors).split(", ").map(
            a => `[[Connaissances/Personnes/Authors/${a}|${a}]]`
            ).join(", ");

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
    return dv.pages('"LitteratureNotes""')
        .sort(p => p.statut, 'asc')
        .map(p => { 
          //TODO transform authors into list of clickable !
          if (p.authors == null) p.authors = "";
          let authors = String(p.authors);
          // add link to the title
          p.title =  `[[${p.file.path}|${p.title}]]`,
          p.authors = authors
          return p
          })
  }

  // Display all contributions of a specific author in a table 
  authorPapers(dv){
    let name = dv.current().file.name // access current file name
    let pages = this.allRessources(dv)
    pages = pages.filter(p => p.authors.includes(name))
    dv.table( ["Status", "Title", "year", "authors"],
      pages.sort(p => p.year, 'desc')
      .map(p => [p.status, p.title, p.year, p.authors] )
      )
  }

  relatedPapers(dv){
    const name = dv.current().file.name // access current file name
    let filter = ` AND [[${name}]]`
    let pages = this.allPapers(dv, filter)
    dv.table( ["Status", "Title", "year", "authors"],
      pages.sort(p => p.year, 'desc')
      .map(p => [p.status, p.title, p.year, p.authors] )
      )
  }

  itemHeader(dv){ // inserted on to af all Raindrop pages
    dv.paragraph(
      `\`button-SyncRaindrop\` | [➡️Read](${dv.current().raindropUrl.replace('/edit','/preview')}) | [🖥️Original](${dv.current().url})| [🌍All Saves](obsidian://open?vault=Vault&file=Projets%2FRaindrop%20Saves)`
      )
      
    let cover = dv.current().cover;
    if (dv.current().url.contains("youtube.com") ) {
      cover = dv.current().url;
    }
    if (cover != null) {
      dv.paragraph(`![|500](${cover})`)
        }
    }
}