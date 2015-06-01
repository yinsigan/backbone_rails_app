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
  urlRoot: '/todos',
  defaults: {
    title: "empty todo...",
    done: false
  },
  toggle: function() {
    this.save({done: !this.get("done")});
  }
});

var t = new Todo({id: 1});

t.fetch({
  url: "/todos/" + t.id,
  success: function (t) {
    console.log(t.toJSON());
  }
})