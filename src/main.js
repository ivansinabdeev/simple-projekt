import { getAllFilters } from './js/filterRequests';

getAllFilters().then(({ data: { results } }) => {
  console.log(results);
});
