import { useContext } from 'react';
import { Grid } from '@mui/material';
import { FilmCard } from './filmCard';
import { FilmListContext } from '../context/filmListContext';

function FilmsList() {
  const { currentPageFilmList } = useContext(FilmListContext);

  return (
    <Grid container component="ul" columns={{ md: 2 }} spacing={2}>
      {currentPageFilmList.map((filmDataItem) => (
        <Grid
          item
          component="li"
          key={filmDataItem.id}
          sx={{
            listStyleType: 'none',
          }}
          md={1}
        >
          <FilmCard
            posterPath={filmDataItem.poster_path}
            filmTitle={filmDataItem.title}
            voteAverage={filmDataItem.vote_average}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export { FilmsList };
