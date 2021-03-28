import React from 'react';
import { Grid, Divider, Typography, Paper } from '@material-ui/core';
import { Room } from '@material-ui/icons';

export default function FlagInfo() {
  return (
    <Paper>
      <Grid container direction={'column'} justify={'center'} alignItems={'flex-start'}>
        <Grid item style={{ display: 'flex', alignItems: 'center', overflowWrap: 'break-word' }}>
          <Room style={{ height: '9vh', width: '65px', color: 'red' }} />
          <Typography align="center" style={{ flex: 1, wordWrap: 'break-word' }}>
            САМО АКО СИ МАЙКЪЛ ФЕЛПС САМО АКО СИ САМО АКО СИ МАЙКЪЛ ФЕЛПС САМО АКО СИ САМО АКО СИ
            МАЙКЪЛ ФЕЛПС САМО АКО СИ САМО АКО СИ МАЙКЪЛ ФЕЛПС САМО АКО СИ
          </Typography>
        </Grid>
        <Divider variant="middle" style={{ width: '100%' }} />

        <Grid item style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <Room style={{ height: '9vh', width: '65px', color: 'yellow' }} />
          <Typography align="center" style={{ flex: 1, wordWrap: 'break-word' }}>
            НЕ БИХ ВЛИЗАЛ АКО СИ МЕЖДУ БАБА И МАЙКЪЛ ФЕЛПС НЕ БИХ ВЛИЗАЛ АКО СИ МЕЖДУ БАБА И МАЙКЪЛ
            ФЕЛПС
          </Typography>
        </Grid>
        <Divider variant="middle" style={{ width: '100%' }} />

        <Grid item style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <Room style={{ height: '9vh', width: '65px', color: 'green' }} />
          <Typography align="center" style={{ flex: 1, wordWrap: 'break-word' }}>
            МОЖЕ, ЦОПВАЙ И БАБА МОЖЕ ДА ПЛУВА ТУКА МОЖЕ, ЦОПВАЙ И БАБА МОЖЕ ДА ПЛУВА ТУКА МОЖЕ,
            ЦОПВАЙ И БАБА МОЖЕ ДА ПЛУВА ТУКА
          </Typography>
        </Grid>
        <Divider variant="middle" style={{ width: '100%' }} />

        <Grid item style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <Room style={{ height: '9vh', width: '65px', color: 'black' }} />
          <Typography align="center" style={{ flex: 1, wordWrap: 'break-word' }}>
            ША МРЕШ ДАЖЕ ДА СИ МАЙКЪЛ ФЕЛПС ША МРЕШ ДАЖЕ ДА СИ МАЙКЪЛ ФЕЛПС ША МРЕШ ДАЖЕ ДА СИ
            МАЙКЪЛ ФЕЛПС
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
