import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map((synonym, i) => {
          return <li key={i}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
