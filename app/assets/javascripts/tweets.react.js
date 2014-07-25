/** @jsx React.DOM */
//= require tweet.react
//= require collections/tweets
var Tweets = React.createClass({displayName: 'Tweets',
  collection: new TwitterApp.Collections.Tweets,

  getInitialState: function() {
    return {
      recent: this.collection.models
    }
  },
  componentDidMount: function() {
    this.collection.on('sync', function() {
      this.setState({
        recent: this.collection.models
      })
    }.bind(this))
    this.collection.fetch();
  },
  render: function() {
    var tweets = [];
    this.state.recent.forEach(function(tweet, i){
      tweets.push(Tweet( {key:i, tweet:tweet}))
    })
    return (
      React.DOM.section( {id:"tweets-container"},
        React.DOM.h3(null, "Tweets"),
        React.DOM.ul(null,
          tweets
        )
      )
    )
  }
})
