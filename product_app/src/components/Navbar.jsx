import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h6' component="div" align="left" sx={{flexGrow:1}}>PRODUCT MANAGEMENT APP</Typography>
                <Link to='/h'>
                <Button variant="contained" color="secondary">HOME</Button>
                </Link>&nbsp;
                <Link to='/a'>
                <Button variant="contained" color="secondary">ADD PRODUCT</Button>
                </Link>&nbsp;
            </Toolbar>
        </AppBar>
        <br /><br /><br /><br />
   
    </div>
  )
}

export default Navbar
