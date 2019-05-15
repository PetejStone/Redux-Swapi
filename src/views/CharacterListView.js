import React from "react";
import { connect } from "react-redux";

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
      return <h3>...Loading</h3>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
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
