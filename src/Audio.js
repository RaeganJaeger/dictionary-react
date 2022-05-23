import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "./Audio.css";

export default function Audio(props) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();

  // get the audio element
  const audioElement = props.audioFile;

  // pass it into the audio context
  const track = audioContext.createMediaElementSource(audioElement);
  track.connect(audioContext.destination);

  return (
    <div className="Audio">
      <a href={props.audioFile} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faPlayCircle} size="lg" />
      </a>
      <audio src={props.audioFile}></audio>
      <button data-playing="false" role="switch" aria-checked="false">
        <span>Play/Pause</span>
      </button>
    </div>
  );
}
