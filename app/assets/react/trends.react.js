/** @jsx React.DOM */
//= require hashtag.react
//= require collections/hashtags
var Trends = React.createClass({
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
    TweetStore.recent();
  }
})
