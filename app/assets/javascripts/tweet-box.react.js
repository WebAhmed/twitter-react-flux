/** @jsx React.DOM */
var TweetBox = React.createClass({displayName: 'TweetBox',
  render: function() {
    return (
      React.DOM.section( {id:"tweet-box"}, 
        React.DOM.p( {id:"tweet-box-title"}, "Compose New Tweet"),
        React.DOM.form( {id:"tweet-form", onSubmit:this.tweetThis}, 
          React.DOM.textarea( {ref:"content", id:"new-tweet", cols:"30", rows:"5", maxlength:"140", name:"tweet", placeholder:"Tweet Something"}),
          React.DOM.input( {ref:"hashtags", placeholder:"Hashtags (comma separated)"}),
          React.DOM.input( {ref:"handle", placeholder:"Your Twitter handle"}),
          React.DOM.input( {ref:"username", placeholder:"Your Twitter username"}),
          React.DOM.input( {ref:"avatar_url", placeholder:"Avatar URL"}),
          React.DOM.input( {type:"submit", value:"Tweet"} )
        )
      )
    )
  },

  tweetThis: function(e) {
    e.preventDefault();
    var data = {};
    Object.keys(this.refs).forEach(function(ref) {
      var value = this.refs[ref].getDOMNode().value;
      if(value) data[ref] = value;
    }.bind(this))
    //TODO: as the model to tweet.
  }
})
