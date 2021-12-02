import {create} from 'apisauce';
import cache from '../utility/cache';

const fakeApi = create({
    baseURL: 'https://6171698bc20f3a001705fcb1.mockapi.io/api/',
});

const get = fakeApi.get;
fakeApi.get = async(url, params, axiosConfig) => {
    // Before
    const response = await get(url, params, axiosConfig);
    // After
    if(response.ok) {
        cache.store(url, response.data);
        return response;
    }

    const data = await cache.get(url);
    return data ? {ok: true, data} : response;
}

export default fakeApi;