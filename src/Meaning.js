import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  //console.log(props.meaning);
  //console.log(props.meaning.synonyms);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <Synonyms synonyms={props.meaning.synonyms} />
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              Definition: {definition.definition}
              <br />
              Example: <em>{definition.example}</em>
              <br />
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
