import React from "react";
import { useParams, Link } from "react-router-dom";

import useFetch from "./useFetch";


const SingleMovie = () => {
  const { id } = useParams();
  
  const {isLoading,error,data:movie}=useFetch(`&i=${id}`)

  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          Back to movies
        </Link>
      </div>
    );
  }

  const {Poster:image,Title,Plot,Year} = movie;

  return (
    <section className="single-movie">
      <img src={image} alt={Title} />
      <div className="single-movie-info">
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>{Year}</h4>
        <Link to="/" className="btn">
          Back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
