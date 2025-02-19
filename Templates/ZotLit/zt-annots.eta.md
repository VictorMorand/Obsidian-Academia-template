<% const byColor = Object.groupBy(it, (annot) => annot.colorName);
const label = {
  "yellow": "⭐ Highlights, Key Ideas",
  "orange": "⚙️Operation, details",
  "green": "📊 Main findings, Results, Conclusions",
  "red": "⚠️ Limitations, Disagree with author",
  "blue": "ℹ Background information, Prerequisites",
  "gray": "Comment",
  "cyan": "Task",
  "navy": "Definition",
  "purple": "Quote",
  "brown": "Source",
  "magenta": "To Do",
};
// Merge colors with customized label with unexpected colors, if any
// Keep the order of the colors from the original color-label map
const colorSet = new Set([...Object.keys(label), ...Object.keys(byColor)]);
for (const color of colorSet) { 
if (!(color in byColor)) continue -%>

### <%= label[color] ?? color %>
  <%_ for (const annot of byColor[color]) { %>

<%~ include("annotation", annot) %>
  <%_ } %>
<% } %>