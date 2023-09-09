import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map((photo, i) => {
            return (
              <div className="col-4" key={i}>
                <a href={photo.src.original} target="_blank">
                  <img src={photo.src.portrait} className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
