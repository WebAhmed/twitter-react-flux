/** @jsx React.DOM */
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
    //TODO: ask model to search.
  }
})
