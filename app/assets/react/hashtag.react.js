/** @jsx React.DOM */
//= require collections/tweet-search
var Hashtag = React.createClass({
  render: function() {
    return (
      <li>
        <a href={"#" + this.props.tag.get('name')} className="hashtag" onClick={this.handleClick}>{this.props.tag.get('name')}</a>
      </li>
    )
  },
  handleClick: function(e) {
    e.preventDefault();
    search = new TwitterApp.Collections.TweetSearch({query: e.target.hash.replace("#", "")});
    search.fetch({success: function(data) {
      TwitterApp.tweetCollection.reset(data.models);
    }});
  }
})
