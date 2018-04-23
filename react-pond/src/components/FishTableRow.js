// YOUR CODE HERE
class FishTableRow extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div>
        <b>{this.props.fish.name}</b>
        <p>{this.props.fish.description}</p>
        <img src={this.props.fish.image}/><br/>
        *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
      </div>
    );
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// FishTable.propTypes = {
//   fishes: React.PropTypes.array.isRequired
// };

//

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTableRow.propTypes = {
  fish: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTableRow = FishTableRow;
