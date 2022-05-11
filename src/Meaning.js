import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  //console.log(props.meaning);
  //console.log(props.meaning.synonyms);
  return (
    <div className="Meaning">
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3>{props.meaning.partOfSpeech}</h3>
          </Accordion.Header>
          <Accordion.Body>
            <Synonyms synonyms={props.meaning.synonyms} />
            {props.meaning.definitions.map(function (definition, index) {
              return (
                <div key={index}>
                  <div className="definition">{definition.definition}</div>
                  <div className="example">{definition.example}</div>
                  <hr />
                </div>
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
