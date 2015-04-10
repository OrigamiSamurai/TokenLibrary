TL.CreateCreatureView = Backbone.View.extend({
	
	className: "panel panel-default",

	events: {
		"click #setNewTokenImageURLButton":"setBaseImagePreviewSrcFromField",
		"click #uploadNewTokenImageButton":"uploadNewTokenImageButton"
	},

	template: TL.templates.CreateCreatureView,

	initialize: function() {
		// bind setBaseImagePreviewSrc to always use this view as context - for ajax callback
		_.bindAll(this, 'setBaseImagePreviewSrc');
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template));
	},

	setBaseImagePreviewSrc: function(src) {
		$('#baseImagePreview').attr("src",src);
	},

	setBaseImagePreviewSrcFromField: function() {
		this.setBaseImagePreviewSrc($('#newTokenImageUrl').val());
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

	            $('#newTokenImageUrl').val(responseData.ImageUrl);
	            if (responseData.Status == "Success")
	            {
	            	this.setBaseImagePreviewSrc(responseData.ImageUrl);	
	            }
	            
	        }
	    },
	    this
	    );
    ajax.open("POST", "ImageUpload.php");
    ajax.send(formdata);
	}

})