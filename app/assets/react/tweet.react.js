/** @jsx React.DOM */
var Tweet = React.createClass({
  render: function() {
    var tweet = this.props.tweet;
    return (
      <li className="tweet">
        <img className="avatar" src={tweet.get('avatar_url')} alt="" />
        <div className="tweet-content">
          <p>
            <span className="full-name">{tweet.get('username')}</span>
            <span className="username">{tweet.get('handle')}</span>
            <span className="timestamp">- {tweet.get('created_at')}</span>
          </p>
          <p>{tweet.content}</p>
        </div>
      </li>
    )
  }
})
