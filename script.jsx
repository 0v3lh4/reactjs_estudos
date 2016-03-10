var Card = React.createClass({
  render: function() {
    return (
      <div>
        <img src="https://avatars.githubusercontent.com/u/6891916?v=3" alt="">
        <h3>Hendrik Araujo</h3>
        <hr/>
      </div>
    );
  }
});

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Card /> 
      </div>
    );
  }
});

React.render(<Main />, document.getElementById("root"));
