class Wiki {
    /** These are the parameters that can be used by the functions defined here
     * @param {Object} dv DataView object of Obisidian extension.
     */
    header(dv) {// inserted on to af all wiki pages
        if (dv.current().url){
            dv.span(`[🔗Visit Web](${dv.current().url})`)
        }
    }
  }