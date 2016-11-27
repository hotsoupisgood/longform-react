module.exports = React.createClass({
  render: function() {
    return (
        <li className="container-row">
            <h2>{this.props.children.toString()}</h2>
        </li>
    );
  }
});
