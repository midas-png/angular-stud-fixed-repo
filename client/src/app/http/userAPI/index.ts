import { $authHost } from '../index';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';

export const checkAuth = async () => {
  const { data } = await $authHost.get(
    environment.baseURL + environment.apiURL + '/user/auth',
  );
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};
