import React, { useState, useEffect } from "react";
import Axios from "axios";
import { map } from "lodash";
import { Link } from "react-router-dom";

const SubBreeds = (props) => {
  let [subBreeds, setSubBreeds] = useState([]);

  useEffect(() => {
    let breed = props.match.params.breed;
    Axios.get(`https://dog.ceo/api/breed/${breed}/list`).then((response) => {
      const subBreeds = Object.values(response.data.message);
      setSubBreeds(subBreeds);
      console.log(response);
    });
  }, [props.match.params.breed]);

  let { id, breed } = props.match.params;
  return (
    <div className="container buttons breeds">
      {map(subBreeds, (subBreed, ix) => {
        return (
          <Link key={ix} to={`/breeds/${id}/${breed}/${subBreed}`}>
            <div className="button is-rounded is-danger is-outlined button-breeds">
              {subBreed}
            </div>
            <div></div>
          </Link>
        );
      })}
    </div>
  );
};

export default SubBreeds;
