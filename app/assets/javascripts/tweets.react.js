/** @jsx React.DOM */
//= require tweet.react
//= require collections/tweets
var Tweets = React.createClass({displayName: 'Tweets',
  getInitialState: function() {
    return {
      recent: TwitterApp.tweetCollection.models
    }
  },
  componentDidMount: function() {

    TwitterApp.tweetCollection.on('sync', function() {
      this.setState({
        recent: TwitterApp.tweetCollection.models
      })
    }.bind(this))
    TwitterApp.tweetCollection.fetch();
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
