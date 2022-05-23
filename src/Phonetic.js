import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <ul>
        <li>
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faPlayCircle} size="lg" />
          </a>
        </li>
        <li>{props.phonetic.text}</li>
      </ul>
    </div>
  );
}
