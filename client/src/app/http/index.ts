import { environment } from 'src/environments/environment';
import axios from 'axios';

const $host = axios.create({
  baseURL: environment.baseURL + '/' + environment.apiURL,
});

const $authHost = axios.create({
  baseURL: environment.baseURL + environment.apiURL,
});

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $authHost, $host };
