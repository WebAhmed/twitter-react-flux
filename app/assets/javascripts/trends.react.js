/** @jsx React.DOM */
//= require hashtag.react
//= require collections/hashtags
var Trends = React.createClass({displayName: 'Trends',

  getInitialState: function() {
    return {
      hashtags: TwitterApp.hashtagCollection.models
    }
  },
  componentDidMount: function() {
    TwitterApp.hashtagCollection.on('sync', function() {
      this.setState({
        hashtags: TwitterApp.hashtagCollection.models
      })
    }.bind(this))
    TwitterApp.hashtagCollection.fetch();
  },

  render: function() {
    var trends = [];
    this.state.hashtags.forEach(function(tag, i) {
      trends.push(Hashtag( {key:i, tag:tag} ))
    })
    return (
      React.DOM.section( {id:"trends-container"}, 
        React.DOM.h3(null, "Trends"),
        React.DOM.a( {href:"#all", onClick:this.allTweets}, "All"),
        React.DOM.ul(null, 
          trends
        )
      )
    )
  },

  allTweets: function(e) {
    e.preventDefault();
    TweetStore.recent();
  }
})
