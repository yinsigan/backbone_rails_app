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

var Todo = Backbone.Model.extend({
  // initialize: function(){
  //   this.on("change:title", function(model){
  //     var title = model.get("title"); // 'Stewie Griffin'
  //     console.log("Changed my title to " + title );
  //   });
  // },
  defaults: function() {
    return {
      title: "empty todo...",
      done: false
    };
  },
  toggle: function() {
    this.set('done', !this.done);
  }
});

// var t = new Todo();
// console.log(t.get('done'))
// t.toggle()
// console.log(t.get('done'))

var t = new Todo();
t.on("change:title", function(model) {
  var title = model.get("title");
  console.log("Changed my title from " + t.previous("title") + "to " + title);
});
t.set('title', 'first todo')