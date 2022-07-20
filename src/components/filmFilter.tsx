import React from 'react';
import {
  Grid,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Pagination,
} from '@mui/material';
import FormFieldset from './formFieldset';

interface ICheckboxes {
  id: number;
  name: string;
}

const checkboxes: Array<ICheckboxes> = [
  {
    id: 28,
    name: 'боевик',
  },
  {
    id: 12,
    name: 'приключения',
  },
  {
    id: 16,
    name: 'мультфильм',
  },
  {
    id: 35,
    name: 'комедия',
  },
  {
    id: 80,
    name: 'криминал',
  },
  {
    id: 99,
    name: 'документальный',
  },
  {
    id: 18,
    name: 'драма',
  },
  {
    id: 10751,
    name: 'семейный',
  },
  {
    id: 14,
    name: 'фэнтези',
  },
  {
    id: 36,
    name: 'история',
  },
  {
    id: 27,
    name: 'ужасы',
  },
  {
    id: 10402,
    name: 'музыка',
  },
  {
    id: 9648,
    name: 'детектив',
  },
  {
    id: 10749,
    name: 'мелодрама',
  },
  {
    id: 878,
    name: 'фантастика',
  },
  {
    id: 10770,
    name: 'телевизионный фильм',
  },
  {
    id: 53,
    name: 'триллер',
  },
  {
    id: 10752,
    name: 'военный',
  },
  {
    id: 37,
    name: 'вестерн',
  },
];

const releaseYears: Array<number> = [2016, 2017, 2018, 2019, 2020];

function FilmFilter() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" rowSpacing={2}>
          <Grid item>
            <Button type="reset" variant="contained" color="info">
              Сбросить все фильтры
            </Button>
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <FormFieldset legend="Сортировать по:">
                <InputLabel disableAnimation>Сортировать по:</InputLabel>
                <Select fullWidth defaultValue={'Сортировать по возрастанию'}>
                  <MenuItem value="Сортировать по убыванию">Популярные по убыванию</MenuItem>
                  <MenuItem value="Сортировать по возрастанию">Популярные по возрастанию</MenuItem>
                </Select>
              </FormFieldset>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <FormFieldset legend="Сортировать по:">
                <InputLabel disableAnimation>Год релиза:</InputLabel>
                <Select fullWidth defaultValue={2020}>
                  {releaseYears.map((releaseYear) => (
                    <MenuItem value={releaseYear} key={releaseYear}>
                      {releaseYear}
                    </MenuItem>
                  ))}
                </Select>
              </FormFieldset>
            </FormControl>
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
        </Grid>
      </form>
    </>
  );
}

export default FilmFilter;
