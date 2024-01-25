import axios from 'axios';
import { energyFlowApi } from './api';

//
// фильтр за запросу
export const getFilterBySearch = () => {
  return energyFlowApi.get(
    '/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=pull&page=1&limit=10'
  );
};
// Инфо о упражнении по ID
export const getInfoExercisesById = id => {
  return energyFlowApi.get(`/exercises/${id}`);
};
// Добавление рейтинга упражнению по ID
export const addRateExercisesById = id => {
  return energyFlowApi.post(`/exercises/${id}/rating`);
};
// Цитата дня
export const getQuoteByDay = () => {
  return energyFlowApi.get('/quote');
};
// Подписка новых упражнений
export const addSubscription = () => {
  return energyFlowApi.post('/subscription');
};
