import { Pagination } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { filmsData } from '../components/filmsData';
import { FilmListContext } from '../context/filmListContext';

function FilmsPagination() {
  const { setCurrentPageFilmList } = useContext(FilmListContext);

  const filmsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const lastFilmIndex = currentPage * filmsPerPage;
  const firstFilmIndex = lastFilmIndex - filmsPerPage;

  useEffect(() => {
    const currentPageFilmList = filmsData.slice(firstFilmIndex, lastFilmIndex);
    setCurrentPageFilmList(currentPageFilmList);
    setLastPage(Math.ceil(filmsData.length / filmsPerPage));
  }, [filmsData, currentPage]);

  return (
    <Pagination
      count={lastPage}
      siblingCount={0}
      onChange={(_, pageNumber) => setCurrentPage(pageNumber)}
    />
  );
}

export { FilmsPagination };
