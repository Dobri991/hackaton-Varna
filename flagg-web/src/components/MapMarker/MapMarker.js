import React from 'react';
import { Room } from '@material-ui/icons';

// some mojo stuff going on here

const getColor = (flag) => {
  switch (flag.toUpperCase()) {
    case 'RED':
      return '#FF0000';
    case 'BLACK':
      return '#000000';
    case 'YELLOW':
      return '#FFDF29';
    case 'GREEN':
      return '#1DB954';
    default:
      return '#000000';
  }
};

const MyMarker = ({ flag }) => (
  <Room
    style={{
      height: '7vh',
      width: '50px',
      color: getColor(flag),
      flex: 1,
      justifyItems: 'center',
      marginTop: '-7vh',
      marginLeft: '-25px',
      bottom: '0px'
    }}
  />
);

export default MyMarker;
