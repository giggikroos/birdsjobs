import axios from 'axios';
import { JobSearch } from '@/typings';

const handleJobSearch = async ({ searchTerm, country, city }: JobSearch) => {
  const options = {
    method: 'GET',
    url: 'https://job-search-api1.p.rapidapi.com/v1/job-description-search',
    params: {
      q: searchTerm,
      page: '1',
      country: country,
      city: city,
    },
    headers: {
      'X-RapidAPI-Key': '2c0b01b068mshb9b3bf1d0470c33p114937jsn82cbb0a59eb8',
      'X-RapidAPI-Host': 'job-search-api1.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);

    console.log(response.data);
    return response.data.jobs;
  } catch (error) {
    console.error(error);
  }
};
export default handleJobSearch;
