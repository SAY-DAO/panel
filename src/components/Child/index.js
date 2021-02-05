import React from 'react';
import Box from '@material-ui/core/Box';

import ChildCard from './ChildCard';

const Child = () => {
  return (
    <>
      <Box mx={2} mb={2}>
        <ChildCard />
      </Box>
    </>
  );
};

export default Child;
