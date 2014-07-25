//= require models/hashtag
TwitterApp.Collections.Hashtags = Backbone.Collection.extend({
  url: '/hashtags/popular',
  model: TwitterApp.Models.Hashtag,
  parse : function(response){
    return response.map(function(name){return {name: name}});
   }
})
