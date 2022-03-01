import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  //로딩 스테이트 없으니 api 덟 받았을 때 오류 떠서 안되겠음 ㅠ
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();

  //useParams()으로 id 가져오기
  const { id } = useParams();

  //param으로 movie API 페치
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    //console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  console.log(movie);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <img alt="movie_cover" src={`${movie.medium_cover_image}`} />
          <h3>year: {movie.year}</h3>
          <h3>genres</h3>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
          <h3>rating: {movie.rating}</h3>
          <h3>language: {movie.language}</h3>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
