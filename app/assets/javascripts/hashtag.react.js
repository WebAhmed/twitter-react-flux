/** @jsx React.DOM */
var Hashtag = React.createClass({displayName: 'Hashtag',
  render: function() {
    return (
      React.DOM.li(null, 
        React.DOM.a( {href:"#" + this.props.tag.get('name'), className:"hashtag", onClick:this.handleClick}, this.props.tag.get('name'))
      )
    )
  },
  handleClick: function(e) {
    e.preventDefault();
    //TODO: ask model to search.
  }
})
