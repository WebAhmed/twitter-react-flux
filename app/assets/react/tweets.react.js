/** @jsx React.DOM */
//= require tweet.react
//= require collections/tweets
var Tweets = React.createClass({
  getInitialState: function() {
    return {
      recent: TwitterApp.tweetCollection.models
    }
  },
  componentDidMount: function() {

    TwitterApp.tweetCollection.on('all', function() {
      this.setState({
        recent: TwitterApp.tweetCollection.models
      })
    }.bind(this))
    TwitterApp.tweetCollection.fetch();
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
