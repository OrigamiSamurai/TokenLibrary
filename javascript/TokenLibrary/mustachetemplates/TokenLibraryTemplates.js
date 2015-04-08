TL.templates = [];

TL.templates.CreatureCollectionView = [
	""
].join("");

TL.templates.CreatureTokenView = [
	"{{name}}",
	"<canvas width=\"{{canvasWidth}}\" height=\"{{canvasHeight}}\" id=\"{{cid}}canvas\" />",
	"<button class=\"removeToken\">Remove</button>"
].join("");

TL.templates.CreatureView = [
	"{{name}}",
	"<img src=\"{{portraitImageUrl}}\" />",
	"<button class=\"addToken\">Get Token Image</button>"
].join("");

TL.templates.CreateCreatureView = [
	"Create a character:",
	"<input type=\"text\" id=\"newTokenName\"></input>",
	"IMAGE URL or FILE UPLOAD GOES HERE : ",
	"THIS IS WHERE THE IMAGE WILL SHOW"
].join("");

TL.templates.TokenLibraryView = [
	"<div>Library:</div>",
	"<div>control to create new goes here</div>",
	"<div id=\"existingCreatures\">control to select existing goes here</div>"
].join("");
