TL.templates = [];

TL.templates.CreatureCollectionView = [
	"<div class=\"panel-heading\">",
		"<span class=\"panel-title\">Choose an existing Creature:</span>",
	"</div>",
	"<div class=\"panel-body\"></div>"
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
	"<div class=\"panel-heading\">",
		"<span class=\"panel-title\">Create a character:</span>",
	"</div>",
	"<div class=\"panel-body\">",
	"<input type=\"text\" id=\"newTokenName\"></input>",
	"IMAGE URL or FILE UPLOAD GOES HERE : ",
	"THIS IS WHERE THE IMAGE WILL SHOW",
	"</div>"
].join("");

TL.templates.TokenLibraryView = [
	"<div>Library:</div>",
	"<div id=\"createCreature\"></div>",
	"<div id=\"existingCreatures\"></div>"
].join("");
