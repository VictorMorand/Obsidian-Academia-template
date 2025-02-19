title: "<%= it.title %>"
alias: 
- "<%= it.title %>"
collections: [<%= [...new Set(it.collections.map(c => c.path[0]))] %>]
citekey: "<%= it.citekey %>"
year:<% if (it.date){%> <%= it.date %> <% } else if (it.year) { %> <%= it.year %> <% } else { %><% } %>
authors: <%= it.authors.join(", ") %>
keywords: <%= it.tags %>
status: <%= it.tags.filter(t => t.type === 0).join("") %>