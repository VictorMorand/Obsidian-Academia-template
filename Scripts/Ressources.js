class Ressources {
  /** These are the parameters that can be used by the functions defined here
   * @param {Object} dv DataView object of Obisidian extension.
   */
  constructor() {
    this.litFolder = "LiteratureNotes";
    this.wikiFolder = "Wiki";
  }

  formatPaper(page){
    if (page.authors == null) page.authors = "";
    //Transform authors into list of clickable
    let authors = String(page.authors).split(", ").map(
      a => `[[${this.wikiFolder}/Authors/${a}|${a}]]`
      ).join(", ");
    // make title clickable
    page.title =  `[[${page.file.path}|${page.title}]]`,
    page.authors = authors
    return page
  }

  allPapers(dv, filter = null) { // Returns a list of all available papers and process them to easily create tables 
    const { obsidian, app } = self.customJS || {};
    if (obsidian == null || app == null) throw new Error("customJS is null.");
    // if filter is not null, filter the papers
    const query = `"${this.litFolder}"` + (filter ? filter : "")
    return dv.pages(query)
        .sort(p => p.statut, 'asc')
        .map(p => this.formatPaper(p))
        }

  allRessources(dv) { // Returns a list of all available papers and process them to easily create tables 
    const { obsidian, app } = self.customJS || {};
    if (obsidian == null || app == null) throw new Error("customJS is null.");
    // get all papers 
    return dv.pages(`"${this.litFolder}"`)
        .sort(p => p.statut, 'asc')
        .map(p => this.formatPaper(p))
  }

  // Display all contributions of a specific author in a table 
  authorPapers(dv) {
    let name = dv.current().file.name;
    let pages = this.allRessources(dv);

    function normalizeString(str) {
        return String(str || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
    let normalizedName = normalizeString(name);
    pages = pages.filter(p => {
      if (!p.authors) return false;
      return normalizeString(p.authors).includes(normalizedName);
    });
    dv.table( ["Status", "Title", "year", "authors"],
      pages.sort(p => p.year, 'desc')
      .map(p => [p.title, p.year, p.authors] )
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

}
