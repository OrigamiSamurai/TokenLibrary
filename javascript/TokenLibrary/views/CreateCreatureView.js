TL.CreateCreatureView = Backbone.View.extend({
	
	className: "panel panel-default",

	events: {
		"click #setNewCreaturePortraitURLButton":"setBaseImagePreviewSrcFromField",
		"click #uploadNewTokenImageButton":"uploadNewTokenImageButton",
		"click #createCreatureButton":"createCreaturePublish"
	},

	template: TL.templates.CreateCreatureView,

	initialize: function(options) {
		// bring in event framework
		this.vent = options.vent;
		// bind setBaseImagePreviewSrc to always use this view as context - for ajax callback
		_.bindAll(this, 'setBaseImagePreviewSrc', 'createCreaturePublish');
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template));
	},

	createCreaturePublish: function() {
		// publish event that a creature has been added with args
		this.vent.trigger(
			"createCreatureButtonClicked", //event name
			$('#newCreatureName').val(), // arg 1
			$('#baseImagePreview').attr("src"), // arg 2 - portrait URL
			$('#baseImagePreview').attr("src")  // arg 3
			)
	},

	setBaseImagePreviewSrc: function(src) {
		$('#baseImagePreview').attr("src",src);
	},

	setBaseImagePreviewSrcFromField: function() {
		this.setBaseImagePreviewSrc($('#newCreaturePortraitUrl').val());
	},

	uploadNewTokenImageButton: function() {
		//upload the file to the server
		var file = $("#imageFile").get(0).files[0];
    var form = document.querySelector('#imageUploadForm');
    var formdata = new FormData(form);
    formdata.append("imageFile", file);
    var ajax = new XMLHttpRequest();
    // use bind to ensure access to "this" context - to use setBaseImagePreviewSrc from the View
    ajax.onreadystatechange = _.bind(
    	function() {
	        if (ajax.readyState == 4 && ajax.status == 200)
	        {
	            
	            var responseData = JSON.parse(ajax.responseText);

	            $('#newCreaturePortraitUrl').val(responseData.ImageUrl);
	            if (responseData.Status == "Success")
	            {
	            	$('#uploadStatus').text('');
	            	this.setBaseImagePreviewSrc(responseData.ImageUrl);	
	            }
	            else
	            {
	            	$('#uploadStatus').text(responseData.Message);
	            }
	            
	        }
	    },
	    this
	    );
    ajax.open("POST", "ImageUpload.php");
    ajax.send(formdata);
	}

})