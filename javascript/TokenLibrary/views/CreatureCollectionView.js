TL.CreatureCollectionView = Backbone.View.extend({
	
	template: TL.templates.CreatureCollectionView,

	initialize: function(options) {
		this.vent = options.vent;
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template));
		this.collection.each(
			function(creature) {
				var creatureView = new TL.CreatureView({model:creature,vent:this.vent});
				creatureView.render();
				this.$el.append(creatureView.el);
			}
			,
			this
			)
	}

})