import React from "react";
import {connect} from 'react-redux';
import Character from "./Character";

const CharacterList = props => {
  return (
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isLoading: state.charsReducer.isLoading,
  error: state.charsReducer.error
});

export default connect(
  mapStateToProps,
  {}
)(CharacterList);
