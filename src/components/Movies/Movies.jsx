
import React from 'react';
import {Box, CircularProgress, useMediaQuery, Typography} from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/OMDB';
import MovieList from '../MovieList/MovieList';

const Movies = () => {

  const {data, error, isLoading} = useGetMoviesQuery();

  if(isLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  // if(!data.results.length) {
  //   return (
  //     <Box display="flex" alignItems="center" mt="20px">
  //       <Typography variant="h4">
  //         No movies found.
  //         <br />
  //         Please try again later.
  //       </Typography>
  //     </Box>
  //   );
  // }

  if (data && data.results && data.results.length === 0) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
         <Typography variant="h4">
           No movies found.
           <br />
           Please try again later.
         </Typography>
       </Box>
    )
  }
    

  if (error) return 'An error has occurred.';

  if (data && data.results) {
    return (
      <div>
        <MovieList movies={data.results}/>
      </div>
    )
  }

  return (
    <div>
      <MovieList movies={data}/>
    </div>
  )
}

export default Movies
