import axios from 'axios';
import { markupExercisesCard } from './markupCards';

const BASE_URL = 'https://energyflow.b.goit.study/api';

// базовые значения для фильтра
let page = 1;
let totalPages = 0;
let currentFilter = 'Muscles';
const itemsOnPage = 12;

// обьект настроек для поиска
const searchParams = new URLSearchParams({
  filter: currentFilter,
  page: page,
  limit: itemsOnPage,
});

// фильтры упражнений
export async function getAllFilters() {
  return await axios.get(`${BASE_URL}/filters?${searchParams}`);
}

