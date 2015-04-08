TL.CreateCreatureView = Backbone.View.extend({
	
	template: TL.templates.CreateCreatureView,

	render: function() {
		this.$el.html(Mustache.to_html(this.template));
	}

})