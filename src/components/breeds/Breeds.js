import React from "react";
//import React, { useState, useEffect } from "react";
//import Axios from "axios";
import { filter, map, startsWith } from "lodash";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { Button } from "antd";
//import { DownloadOutlined } from "@ant-design/icons";

const Breeds = (props) => {
  const fetchBreeds = () =>
    fetch("https://dog.ceo/api/breeds/list/all").then(async (res) => {
      const breedsId = await res.json();
      const allBreeds = Object.keys(breedsId.message);
      const breedsFilterId = filter(allBreeds, (b) =>
        startsWith(b, props.match.params.id)
      );
      return breedsFilterId;
    });

  const { isLoading, error, data } = useQuery("breeds", fetchBreeds);

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error {JSON.stringify(error)}</div>;

  return (
    <div className="container buttons breeds">
      {map(data, (breed, ix) => {
        return (
          <Link key={ix} to={`/breeds/${props.match.params.id}/${breed}`}>
            <Button
              shape="round"
              className="button-breeds"
              //icon={<DownloadOutlined />}
              size={"large"}
            >
              {breed}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default Breeds;

// function Breeds(props) {
//   let [breeds, setBreeds] = useState([]);

//   useEffect(() => {
//     Axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
//       const allBreeds = Object.keys(response.data.message);
//       const breedsId = filter(allBreeds, (b) =>
//         startsWith(b, props.match.params.id)
//       );
//       setBreeds(breedsId);
//     });
//   }, [props.match.params.id]);

//   let id  = props.match.params.id;
//   return (
//     <div className="container buttons breeds">
//       {map(breeds, (breed, ix) => {
//         return (
//           <Link to={`/breeds/${id}/${breed}`}>
//             <div
//               key={ix}
//               className="button is-rounded is-danger is-outlined button-breeds"
//             >
//               {breed}
//             </div>
//           </Link>
//         );
//       })}
//     </div>
//   );
// }

// --------------------------------------
