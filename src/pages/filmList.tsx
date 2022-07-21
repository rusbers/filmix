import { Grid } from '@mui/material';
import FilmFilter from '../components/filmFilter';
import { FilmsList } from '../components/filmList';

function FilmList() {
  return (
    <>
      <Grid container columnSpacing={2}>
        <Grid item md={3}>
          <FilmFilter />
        </Grid>
        <Grid item md={9}>
          <FilmsList />
        </Grid>
      </Grid>
    </>
  );
}

export default FilmList;
