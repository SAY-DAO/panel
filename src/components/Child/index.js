import React from 'react';
import Box from '@material-ui/core/Box';

import ChildCard from './ChildCard';
import ChildPage from './ChildPage';

const Child = () => {
  return (
    <>
      <Box mx={1} mb={2}>
        <ChildCard />
      </Box>
      {/* <ChildPage /> */}
    </>
  );
};

export default Child;
