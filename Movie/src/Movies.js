import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const {movies,isLoading} = useGlobalContext()

  if(isLoading)
  {
    return <div className="loading"></div>
  }
  return <section className='movies'>
    {movies.map((movie)=>{
      const {Poster:image,Title,Year,imdbID:id}=movie
return <Link to={`/movies/${id}`} key={id} className='movie'>
  <article>
    <img src={image === "N/A"?url:image} alt={Title} />
    <div className="movie-info">
      <h4 className="title">{Title}</h4>
      <p>{Year}</p>
    </div>
  </article>
</Link>
    })}
  </section>
}

export default Movies
