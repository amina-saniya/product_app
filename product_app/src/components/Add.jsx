import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
      <h1>PRODUCTS</h1>
      <TextField label="Product name" variant="outlined" sx={{width:"480px"}}></TextField><br/><br/>
      <TextField type="file" id="image" sx={{width:"480px"}}></TextField><br/><br/>
      <TextField label="Price" variant="outlined"sx={{width:"480px"}} ></TextField><br/><br/>
      <TextField label="Category" variant="outlined" sx={{width:"480px"}}></TextField><br/><br/>
      <Button variant="contained">ADD</Button>
    </div>
  )
}

export default Add
