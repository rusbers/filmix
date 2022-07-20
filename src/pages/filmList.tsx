import { Grid } from '@mui/material';
import FilmFilter from '../components/filmFilter';

function FilmList() {
  return (
    <>
      <Grid container columnSpacing={2}>
        <Grid item md={3}>
          <FilmFilter />
        </Grid>
        <Grid item md={9}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus eveniet dolorum
          doloremque iusto provident dicta alias enim quam? Consequuntur aliquid quis libero
          obcaecati ut eius vel ea, dolorum similique! Fuga?
        </Grid>
      </Grid>
    </>
  );
}

export default FilmList;
