/** @jsx React.DOM */
//= require hashtag.react
//= require collections/hashtags
var Trends = React.createClass({

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
      trends.push(<Hashtag key={i} tag={tag} />)
    })
    return (
      <section id="trends-container">
        <h3>Trends</h3>
        <a href="#all" onClick={this.allTweets}>All</a>
        <ul>
          {trends}
        </ul>
      </section>
    )
  },

  allTweets: function(e) {
    e.preventDefault();
    TwitterApp.tweetCollection.fetch();
  }
})
