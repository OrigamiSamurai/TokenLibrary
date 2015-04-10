TL.CreatureView = Backbone.View.extend({

	className: "creatureContainer",

	events: {
		"click .addToken":"addToken"
	},
	
	template: TL.templates.CreatureView,

	initialize: function(options) {
		this.vent = options.vent;
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template,this.model.attributes));
	},

	addToken: function() {
    this.vent.trigger("tokenAddRequest",this.model);
  }

})