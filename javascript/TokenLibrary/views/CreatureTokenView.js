TL.CreatureTokenView = Backbone.View.extend({
	
	events: {
		"click .removeToken":"removeToken"
	},

	template: TL.templates.CreatureTokenView,

	initialize: function() {
		this.canvasWidth = 96*2+22;
		this.canvasHeight = 153+2;
		this.render()
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template,{
			canvasWidth:this.canvasWidth,canvasHeight:this.canvasHeight,name:this.attributes.name}
		));
		//create the image itself
		var ctx = this.$el.find('canvas')[0].getContext("2d");
		ctx.fillStyle = 'FFFFFF';
		ctx.fillRect(0,0,this.canvasWidth-1,this.canvasHeight-1);
		ctx.rect(0,0,this.canvasWidth-1,this.canvasHeight-1);
		ctx.stroke();

		var portraitImage = new Image();

		portraitImage.onload = function(){
			ctx.drawImage(portraitImage, 11,1)
			ctx.drawImage(portraitImage, 11+96,1)
		}
		portraitImage.src = this.attributes.portraitImageUrl;
	},

	removeToken: function() {
		this.remove();
	}

})