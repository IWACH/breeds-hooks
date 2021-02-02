import React, { useState, useEffect } from "react";
import { capitalize, map } from "lodash";
import { Link } from "react-router-dom";

const Words = () => {
  let [abc, setAbc] = useState([]);

  useEffect(() => {
    functionWords();
  }, []);

  const functionWords = () => {
    let abc = [];
    for (let i = 97; i <= 122; i++) {
      abc.push({ id: String.fromCodePoint(i) });
    }
    return setAbc(abc);
  };

  return (
    <div className="buttons words">
      {map(abc, (w, ix) => {
        return (
          <Link key={ix} to={`/breeds/${w.id}`}>
            <div  className="button word-button">
              {capitalize(w.id)}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Words;
