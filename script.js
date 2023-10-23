//your JS code here. If required.
//your JS code here. If required.
// Wait for the DOM to be fully loaded before writing the string
document.addEventListener("DOMContentLoaded", function() {
  // Get the body element
  var body = document.querySelector("body");

  // Check if the body has any child nodes
  if (body.hasChildNodes()) {
    // If there are child nodes, remove them
    body.innerHTML = "";
  }

  // Create a new text node with the "DOM load success" string
  var textNode = document.createTextNode("DOM load success");

  // Append the text node to the body element
  body.appendChild(textNode);
});