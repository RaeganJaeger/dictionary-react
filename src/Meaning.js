import React from "react";

export default function Meaning(props) {
  //meaning.definitions[0].definition;
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
