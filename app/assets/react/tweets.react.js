/** @jsx React.DOM */
//= require tweet.react
//= require collections/tweets
var Tweets = React.createClass({
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
    // this.collection.fetch();
  },
  render: function() {
    var tweets = [];
    this.state.recent.forEach(function(tweet, i){
      tweets.push(<Tweet key={i} tweet={tweet}/>)
    })
    return (
      <section id="tweets-container">
        <h3>Tweets</h3>
        <ul>
          {tweets}
        </ul>
      </section>
    )
  }
})
