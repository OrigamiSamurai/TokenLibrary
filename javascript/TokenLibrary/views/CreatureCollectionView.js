TL.CreatureCollectionView = Backbone.View.extend({
	
	className: "panel panel-default",

	template: TL.templates.CreatureCollectionView,

	initialize: function(options) {
		this.vent = options.vent;
		this.render();
		_.bindAll(this, 'createCreature');
		options.vent.bind("createCreatureButtonClicked", this.createCreature);
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template));
		this.collection.each(
			function(creature) {
				var creatureView = new TL.CreatureView({model:creature,vent:this.vent});
				creatureView.render();
				this.$el.find(".panel-body").append(creatureView.el);
			}
			,
			this
			)
	},

	createCreature: function(name,portraitImageUrl,tokenImageUrl) {
		var newCreature = new TL.Creature({name:name, portraitImageUrl:portraitImageUrl, tokenImageUrl:tokenImageUrl});
		this.collection.add(newCreature);
		var newCreatureView = new TL.CreatureView({model:newCreature,vent:this.vent});
		newCreatureView.render();
		this.$el.find(".panel-body").append(newCreatureView.el);
	}

})