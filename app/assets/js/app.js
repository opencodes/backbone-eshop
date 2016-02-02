(function($) {
	var render = function(target, templateURL, object) {
	  $.get(templateURL, function(template) {
	    var rendered = Mustache.render(template, object);
	    $(target).html(rendered);
	  });
	};


	var MainView = Backbone.View.extend({
		// It's the first function called when this view is instantiated.
		initialize: function(){
			this.render();
		},
		render : function(argument) {
			render('#container', 'views/home.html',{})
		}
	});

	
	$(document).ready(function() {
		var appView = new MainView();
	})
})($);