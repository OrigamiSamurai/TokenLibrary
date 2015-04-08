TL.TokenLibraryView = Backbone.View.extend({
	
	template: TL.templates.TokenLibraryView,

	initialize: function(options) {
		this.vent = options.vent;
		_.bindAll(this,"addToken");
		options.vent.bind("tokenAdded", this.addToken);
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template));
		var creatureCollectionView = new TL.CreatureCollectionView({collection:this.collection, vent:this.vent});
		this.$el.find('#existingCreatures').append(creatureCollectionView.el);
	},

	addToken: function(model) {
		var newCreatureTokenView = new TL.CreatureTokenView(model);
		$('#tokenImages').append(newCreatureTokenView.el);

		//$("<img />").attr("src", model.attributes.tokenImageUrl).appendTo($('#tokenImages'));
			//use create token image here HTML5 canvas
			//add canvas element
	}

	/*createTokenImage(
      $('#target').attr('src'),
      Math.floor(cropCoords.x),
      Math.floor(cropCoords.y),
      Math.floor(cropCoords.w),
      Math.floor(cropCoords.h),
      96,
      153
    )*/

	//2DO: build view for uploading
	//2DO: add upload functionality
	
})