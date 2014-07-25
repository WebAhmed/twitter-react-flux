/** @jsx React.DOM */
var TweetBox = React.createClass({
  render: function() {
    return (
      <section id="tweet-box">
        <p id="tweet-box-title">Compose New Tweet</p>
        <form id="tweet-form" onSubmit={this.tweetThis}>
          <textarea ref="content" id="new-tweet" cols="30" rows="5" maxlength="140" name="tweet" placeholder="Tweet Something"></textarea>
          <input ref="hashtags" placeholder="Hashtags (comma separated)"/>
          <input ref="handle" placeholder="Your Twitter handle"/>
          <input ref="username" placeholder="Your Twitter username"/>
          <input ref="avatar_url" placeholder="Avatar URL"/>
          <input type="submit" value="Tweet" />
        </form>
      </section>
    )
  },

  tweetThis: function(e) {
    e.preventDefault();
    var data = {};
    Object.keys(this.refs).forEach(function(ref) {
      var value = this.refs[ref].getDOMNode().value;
      if(value) data[ref] = value;
    }.bind(this))
    data.hashtags = data.hashtags.split(", ")
    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: {tweet: data}
    })
    .done(function(data) {
      TwitterApp.tweetCollection.unshift(data)
    })
  }
})
