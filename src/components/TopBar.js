import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const TopBar = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#F59E39' }}>
            <Grid container direction='row-reverse' alignItems='center'>
                <Toolbar>
                    <Typography variant="h6" className="logo">
                        SAY
                    </Typography>
                </Toolbar>
            </Grid>
        </AppBar>
    );
}

export default TopBar;