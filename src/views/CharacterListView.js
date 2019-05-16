import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { CharacterList } from "../components";
import {fetch} from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount(props) {
    // call our action
    this.props.fetch()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      // return <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
      return <h3>...Loading</h3>
    }
    return (
      <div className="CharactersList_wrapper">
      {this.props.error === '' ?
      <CharacterList characters={this.props.characters} />
      : <h3>{this.props.error}</h3> }
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error
});
export default connect(
  mapStateToProps,
  {
    fetch
  }
)(CharacterListView);
