/** @jsx React.DOM */
//= require hashtag.react
//= require collections/hashtags
var Trends = React.createClass({displayName: 'Trends',
  collection: new TwitterApp.Collections.Hashtags,

  getInitialState: function() {
    return {
      hashtags: this.collection.models
    }
  },
  componentDidMount: function() {
    this.collection.on('sync', function() {
      this.setState({
        hashtags: this.collection.models
      })
    }.bind(this))
    this.collection.fetch();
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
