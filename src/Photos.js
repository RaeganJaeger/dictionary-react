import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Photos.css";

export default function Photos(props) {
  //console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos">
        <Accordion flush defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h3>images</h3>
            </Accordion.Header>
            <Accordion.Body>
              <div className="row">
                {props.photos.map(function (photo, index) {
                  return (
                    <div className="col-4" key={index}>
                      <a
                        href={photo.src.original}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={photo.src.medium}
                          alt={photo.alt}
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  );
                })}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  } else {
    return null;
  }
}
