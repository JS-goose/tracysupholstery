const headerChange = document.getElementById("h2");
headerChange.onClick = enlargeFont();
function enlargeFont() {
    headerChange.className += " expand";
}