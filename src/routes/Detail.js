import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import PropTypes from "prop-types";
import styles from "../components/Detail.module.css";

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
        <Loading />
      ) : (
        <div className={styles.bg}>
          <article className={styles.movieBox}>
            <section className={styles.movieBox__container}>
              <section className={styles.movieBox__container__img}>
                <img alt="movie_cover" src={`${movie.medium_cover_image}`} />
              </section>
              <section className={styles.movieBox__container__info}>
                <h1>{movie.title}</h1>
                <h3>year: {movie.year}</h3>
                <h3>genres</h3>
                <ul>
                  {movie.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                  ))}
                </ul>
                <h3>rating: {movie.rating}</h3>
                <h3>language: {movie.language}</h3>
              </section>
            </section>
            <section className={styles.movieBox__container}>
              <p>{movie.description_full}</p>
            </section>
          </article>
        </div>
      )}
    </div>
  );
}

//Movie 컴포넌트 PropTypes 설정
Detail.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Detail;
