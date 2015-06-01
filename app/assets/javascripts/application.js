// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require_tree .
//= require_tree ../templates

var Todo = Backbone.Model.extend({
  urlRoot: '/todos',
  defaults: {
    title: "empty todo...",
    done: false
  },
  validate: function( attributes ){
    if( attributes.title != "my title" ){
      console.log("error");
      return "You can't be negative years old";
    }
  },
  toggle: function() {
    this.save({done: !this.get("done")});
  }
});


$(document).ready(function() {
   SearchView = Backbone.View.extend({
    initialize: function(){
      this.render();
    },
    template: JST['home/index'],
    render: function(){
      this.$el.html(this.template({search_label: "my search"}));
    },
    events: {
      "click input[type=button]": "doSearch"
    },
    doSearch: function( event ){
      // Button clicked, you can access the element that was clicked with event.currentTarget
      console.log( "Search for " + $("#search_input").val() );
    }
  });

  var search_view = new SearchView({ el: $("#search_container") });
})

var AppRouter = Backbone.Router.extend({
  routes: {
    "posts/:id": "getPost",
    "*actions": "defaultRoute" // Backbone will try to match the route above first
  }
});
// Instantiate the router
var app_router = new AppRouter;
app_router.on('route:getPost', function (id) {
  // Note the variable in the route definition being passed in here
  console.log( "Get post number " + id );
});
app_router.on('route:defaultRoute', function (actions) {
  console.log( actions );
});
// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();