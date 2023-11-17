import options from './options';

export const fetchHomeData = async () => {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
