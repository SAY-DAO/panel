import React from 'react';
import Box from '@material-ui/core/Box';

import ChildCard from './ChildCard';
import ChildPage from './ChildPage';
import AddCard from './AddCard';

const Child = () => {
  return (
    <>
      <Box mx={1} mb={2}>
        <ChildCard />
      </Box>
      <Box mx={1} mb={2}>
        <AddCard />
      </Box>
      {/* <ChildPage /> */}
    </>
  );
};

export default Child;
