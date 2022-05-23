import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  //console.log(props);
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 className="header-definition">{props.results.word} </h2>
          <p className="quick-definition">
            {props.results.meanings[0].definitions[0].definition.toLowerCase()}
          </p>
          <div className="row">
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <div key={index} className="col">
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            })}
          </div>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
