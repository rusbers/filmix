import React from 'react';
import {
  Grid,
  Button,
  FormControl,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Pagination,
  Typography,
} from '@mui/material';
import FormFieldset from './formFieldset';
import { checkboxes, releaseYears } from './filterData';

function FilmFilter() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" rowSpacing={2} marginTop={0}>
          <Typography variant="h4" component="h2">
            Фильтры:
          </Typography>
          <Grid item>
            <Button type="reset" variant="contained" color="info" fullWidth>
              Сбросить все фильтры
            </Button>
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <FormFieldset legend="Сортировать по:">
                <Typography variant="h6" component="p">
                  Сортировать по:
                </Typography>
                <Select
                  fullWidth
                  defaultValue={'Сортировать по возрастанию'}
                  aria-label="Сортировать по:"
                >
                  <MenuItem value="Сортировать по убыванию">Популярные по убыванию</MenuItem>
                  <MenuItem value="Сортировать по возрастанию">Популярные по возрастанию</MenuItem>
                </Select>
              </FormFieldset>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <FormFieldset legend="Сортировать по:">
                <Typography variant="h6" component="p">
                  Год релиза:
                </Typography>
                <Select fullWidth defaultValue={2020} aria-label="Год релиза:">
                  {releaseYears.map((releaseYear) => (
                    <MenuItem value={releaseYear} key={releaseYear}>
                      {releaseYear}
                    </MenuItem>
                  ))}
                </Select>
              </FormFieldset>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <FormFieldset legend="Чекбокс">
                <FormGroup>
                  {checkboxes.map((checkboxData) => (
                    <FormControlLabel
                      control={<Checkbox />}
                      label={checkboxData.name}
                      key={checkboxData.id}
                    />
                  ))}
                </FormGroup>
              </FormFieldset>
            </FormControl>
          </Grid>
          <Grid item>
            <Pagination count={50} siblingCount={0}></Pagination>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default FilmFilter;
