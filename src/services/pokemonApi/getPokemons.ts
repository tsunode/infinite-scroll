import { api } from '.';
import type { IPokemonsResponse } from './types';

export async function getPokemons(
  page: number,
  limit = 100
): Promise<IPokemonsResponse> {
  const response = await api.get<IPokemonsResponse>('/pokemon', {
    params: {
      limit,
      offset: page * 100,
    },
  });

  return response.data;
}
