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
	"<span class=\"creatureName\">{{name}}</span>",
	"<img src=\"{{portraitImageUrl}}\" class=\"creaturePortrait\" />",
	"<button class=\"addCreatureTokenButton\">Get Token Image</button>"
].join("");

TL.templates.CreateCreatureView = [
	"<div class=\"panel-heading\">",
		"<span class=\"panel-title\">Create a character:</span>",
	"</div>",
	"<div class=\"panel-body\">",
		"<div class=\"form-group\">",
			"<label for=\"newCreatureName\">New Creature Name:</label>",
			"<input type=\"text\" class=\"form-control\" id=\"newCreatureName\"></input>",
			"<label for=\"newCreaturePortraitUrl\">Base Image URL:</label>",
			"<input type=\"text\" class=\"form-control\" id=\"newCreaturePortraitUrl\"></input>",
			"<button type=\"button\" class=\"btn btn-1g btn-default\" id=\"setNewCreaturePortraitURLButton\">Use Image URL</button>",
			"or",
			"<form id=\"imageUploadForm\" enctype=\"multipart/form-data\" method=\"post\">",
				"<input type=\"file\" name=\"imageFile\" id=\"imageFile\">",
				"<button type=\"button\" class=\"btn btn-1g btn-default\" id=\"uploadNewTokenImageButton\">Upload a new image</button>",
			"</form>",
		"<div>",
			"<img id=\"baseImagePreview\"/>",
		"</div>",
		"<div>",
			"<button type=\"button\" class=\"btn btn-1g btn-default\" id=\"createCreatureButton\">Create!</button>",
		"</div>",
	"</div>"
].join("");

TL.templates.TokenLibraryView = [
	"<div>Library:</div>",
	"<div id=\"createCreature\"></div>",
	"<div id=\"existingCreatures\"></div>"
].join("");
