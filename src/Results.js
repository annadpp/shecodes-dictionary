import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map((phonetic, i) => {
          return (
            <div key={i}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.results.meanings.map((meaning, i) => {
          return (
            <div key={i}>
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
