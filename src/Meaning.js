import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, i) => {
        return (
          <div key={i}>
            <strong>Definition: </strong>
            {definition.definition}
            <br />

            {/*add component so it only shows when there is info*/}
            <Examples examples={definition.example} />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
