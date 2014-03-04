var CharacterView = Backbone.View.extend({
	
	template: templates.CharacterView,

	initialize: function(options) {
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template,this.model.attributes));
	}

})