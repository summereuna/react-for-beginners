import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, coverImg, title }) {
  return (
    <article className="movies__movie">
      <img src={coverImg} alt={title} title={title} />
      <h2 className="movies__movie__title">
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
    </article>
  );
}

//Movie 컴포넌트 PropTypes 설정
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movie;
