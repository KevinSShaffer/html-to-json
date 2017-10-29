
document.addEventListener('DOMContentLoaded', () => {
	var script = "var css = '.ieHighlight:hover { background-color: red; }', " +
        "style = document.createElement('style'); " +
	"style.type = 'text/css'; " +
    "style.appendChild(document.createTextNode(css)); " +
    "document.head.appendChild(style); " +
    "document.body.addEventListener('mouseover', (event) => { " +
    	"if (event.target !== document.body) { " +
    		"event.target.classList.add('ieHighlight'); " +
        "} " +
    "}, false); " +
    "document.body.addEventListener('mouseout', (event) => { " +
    	"if (event.target !== document.body) { " +
    		"event.target.classList.remove('ieHighlight'); " +
        "} " +
    "}, false);";

	chrome.tabs.executeScript({
		code: script
	});
});