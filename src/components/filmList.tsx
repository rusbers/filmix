import { Grid } from '@mui/material';
import { filmsData } from './filmsData';
import { FilmCard } from './filmCard';

function FilmsList() {
  return (
    <Grid container component="ul" columns={{ md: 2 }} spacing={2}>
      {filmsData.map((filmDataItem) => (
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
