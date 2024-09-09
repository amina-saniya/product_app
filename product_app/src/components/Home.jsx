import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    
    var [user,setUser] = useState([])
    useEffect(() => {
      axios.get("https://fakestoreapi.com/products")
     .then((response) => {
        console.log(Response.data)
        setUser(response.data)
     })
    },[])

  return (

    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Product name</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Category</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {user.map((val) => {
                    return(
                        <TableRow>
                            <TableCell>{val.title}</TableCell>
                            <TableCell><img src={val.image} alt={val.title} width="50"/></TableCell>
                            <TableCell>{val.price}</TableCell>
                            <TableCell>{val.category}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home
