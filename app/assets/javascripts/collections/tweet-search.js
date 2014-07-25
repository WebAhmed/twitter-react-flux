//= require models/tweet
TwitterApp.Collections.TweetSearch = Backbone.Collection.extend({
  initialize: function(options) {
    this.query = options.query;
  },

  url: function() {
    return '/tweets/search/' + this.query;
  },
  model: TwitterApp.Models.Tweet
});
