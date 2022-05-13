import { environment } from 'src/environments/environment';
import { $authHost } from '../index';

export const addProperty = async (
  title: string,
  price: number,
  exactAddress: string,
  city: string,
  furnished: number,
  bedrooms: number,
  bathrooms: number,
  squareMeters: number,
  description: string,
  imageURL: FormData,
) => {
  const { data } = await $authHost.post('/property/addProperty', {
    title,
    price,
    exactAddress,
    city,
    furnished,
    bedrooms,
    bathrooms,
    squareMeters,
    description,
    imageURL,
  });
  return data;
};

export const getExactProperty = async (id: number) => {
  const { data } = await $authHost.get(`/property/property/${id}`);
  return data;
};
