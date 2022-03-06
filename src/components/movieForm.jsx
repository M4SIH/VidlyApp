import React from "react";
import { useParams } from "react-router-dom";
const MovieForm = ({match}) => {
  const {id} = useParams();
  return (
    <div>
      <h1> The Movie is {id}</h1>
    </div>
  );
};

export default MovieForm;
