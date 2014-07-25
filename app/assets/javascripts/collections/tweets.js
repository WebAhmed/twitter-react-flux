//= require models/tweet
TwitterApp.Collections.Tweets = Backbone.Collection.extend({
  url: '/tweets/recent',
  model: TwitterApp.Models.Tweet
})
