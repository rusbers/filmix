import React from 'react';
import { IFilmsListContext } from '../types/interfaces';

const contextValues: IFilmsListContext = {
  currentPageFilmList: [],
  setCurrentPageFilmList: () => [],
};

export const FilmListContext = React.createContext(contextValues);
