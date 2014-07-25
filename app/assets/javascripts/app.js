/** @jsx React.DOM */
//= require twitter.react
TwitterApp.initialize = function() {
  this.tweetCollection = new TwitterApp.Collections.Tweets;
  this.hashtagCollection = new TwitterApp.Collections.Hashtags;
  React.renderComponent(Twitter(null ), document.body);
}

$(document).ready(function() {
  TwitterApp.initialize();
})
