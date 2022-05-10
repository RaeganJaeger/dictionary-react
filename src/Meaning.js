import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  //console.log(props.meaning);
  //console.log(props.meaning.synonyms);
  return (
    <div className="Meaning">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3>{props.meaning.partOfSpeech}</h3>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <Synonyms synonyms={props.meaning.synonyms} />
              </li>
            </ul>
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
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
