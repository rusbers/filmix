import React from 'react';
import { IFilmsListContext } from './interfaces';

const init: IFilmsListContext = {
  currentPageFilmList: [],
  setCurrentPageFilmList: () => [],
};

export const FilmListContext = React.createContext(init);
