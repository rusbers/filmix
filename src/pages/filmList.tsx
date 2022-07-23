import { useState } from 'react';
import { Grid } from '@mui/material';
import FilmFilter from '../components/filmFilter';
import { FilmsList } from '../components/filmList';
import { FilmListContext } from '../context';

function FilmList() {
  const [currentPageFilmList, setCurrentPageFilmList] = useState([]);

  const contextValue = {
    currentPageFilmList,
    setCurrentPageFilmList,
  };

  return (
    <FilmListContext.Provider value={contextValue}>
      <Grid container columnSpacing={2}>
        <Grid item md={3}>
          <FilmFilter />
        </Grid>
        <Grid item md={9}>
          <FilmsList />
        </Grid>
      </Grid>
    </FilmListContext.Provider>
  );
}

export default FilmList;
