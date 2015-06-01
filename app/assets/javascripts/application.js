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

// var Todo = Backbone.Model.extend({
//   urlRoot: '/todos',
//   defaults: {
//     title: "empty todo...",
//     done: false
//   },
//   validate: function( attributes ){
//     if( attributes.title != "my title" ){
//       console.log("error");
//       return "You can't be negative years old";
//     }
//   },
//   toggle: function() {
//     this.save({done: !this.get("done")});
//   }
// });

// var t = new Todo();

// var todoDetails = {
//   title: 'first todo...',
//   done: false
// };
// t.save(todoDetails, {
//   success: function (t) {
//     console.log(t.toJSON());
//   }
// });

$(document).ready(function() {
  var SearchView = Backbone.View.extend({
    initialize: function(){
      this.render();
    },
    render: function(){
      // Compile the template using underscore
      var template = _.template( $("#search_template").html(), {} );
      // Load the compiled HTML into the Backbone "el"
      this.$el.html( template );
    }
  });

  var search_view = new SearchView({ el: $("#search_container") });
})