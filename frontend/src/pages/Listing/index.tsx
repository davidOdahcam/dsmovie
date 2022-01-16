import { useState, useEffect } from 'react';
import axios from "axios";

// COMPONENTS
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

function Listing() {
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=0`).then(response => {
      const data = response.data as MoviePage;
      console.table(data)
      setPageNumber(data.number);
    });
  }, []);

  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row g-3">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
