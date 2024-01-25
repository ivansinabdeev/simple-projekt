import axios from 'axios';

export const energyFlowApi = axios.create({
  baseURL: 'https://energyflow.b.goit.study/api',
});
