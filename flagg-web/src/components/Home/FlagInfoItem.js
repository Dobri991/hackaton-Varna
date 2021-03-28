import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Room } from '@material-ui/icons';

const FlagInfoItem = ({ flagColor, title, description }) => {
  return (
    <Grid item xs={12} style={{ paddingTop: 5, paddingBottom: 5 }}>
      <Grid container direction="row">
        <Grid item xs={3}>
          <Room style={{ height: '9vh', width: '65px', color: flagColor }} />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6" component="h2">
            <strong>{title}</strong>
          </Typography>
          <Typography variant="subtitle2">{description}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FlagInfoItem;
