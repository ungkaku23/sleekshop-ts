import axios from 'axios';
import SleekshopClient from './lib/sleekshopClient'

const API_URL = 'https://pokeapi.co/api/v2';

function getPokemonById(id: number): Promise<object> {
    return new Promise((resolve, reject) => {
        axios
            .get(`${API_URL}/pokemon/${id}`)
            .then((resp) => {
                resolve(resp.data);
            })
            .catch(reject);
    });
}

/**
 * Creates a new Sleekshop Client.
 */
const createClient = (
  sleekshopUrl: string,
  licenseUsername: string,
  licensePassword: string,
): any => {
  return new SleekshopClient(sleekshopUrl, licenseUsername, licensePassword)
}

export { createClient, getPokemonById };
