TL.CreateCreatureView = Backbone.View.extend({
	
	className: "panel panel-default",

	template: TL.templates.CreateCreatureView,

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template));
	}

})