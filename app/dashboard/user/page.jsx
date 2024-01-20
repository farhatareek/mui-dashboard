import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Link from 'next/link';
import { fetchuserdata } from '@/app/lib/data';
import SearchAppBar from '@/app/ui/dashboard/searchbar/sdearchbar';
import UsePagination from '@/app/ui/dashboard/pagenation/pagenation';
import { deleteUsers } from '@/app/lib/actions';
import { TableContainer } from '@mui/material';
import Paper from '@mui/material/Paper';


 async function Users ({searchParams}){
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const {count ,users} = await fetchuserdata(q, page);
    return (
    <Box sx={{ 
      ml: { sm: "240px", xs:"0" } , 
      p:{sm:3, xs:0},
      mt:"90px",
    }}>
        
        <Sheet
        variant="outlined"
        sx={{
        borderRadius:"10px",
        border:'none',
        backgroundColor: '#182237',
        }}
        >
          <TableContainer component={Paper}>
            <SearchAppBar/>
        <Link href='/dashboard/user/add'>
        <Button sx={{margin:"20px"}}>Add user</Button>
        </Link>
        <Table
        borderAxis="bothBetween"
        stripe="odd"
        hoverRow
        sx={{
            '& tr > *:first-child': {
            position: 'sticky',
            left: 0,
            bgcolor: '#182237',
            color:'#fff',
            },
            '& tr > *:last-child': {
            position: 'sticky',
            color:'#fff',
            right: 0,
            bgcolor: '#182237',
            },
        }}
        >
            
        <thead style={{color:"#fff"}} >
            <tr >
            <th style={{ width: 150}}>Title</th>
              <th style={{ width: 200 }}>desc</th>
              <th style={{ width: 200 }}>price</th>
              <th style={{ width: 100 }}>color</th>
              <th style={{ width: 100 }}>stock</th>
              <th style={{ width: 100 }}>category</th>
              <th style={{ width: 100 }}>actions</th>
              <th
                aria-label="last"
                style={{ width: 'var(--Table-lastColumnWidth)' , color:"#fff"}}
              />
            </tr>
          </thead>
          <tbody style={{backgroundColor:"#182237", color:"#fff"}}>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.info}</td>
                <td>{user.phone}</td>
                <td>{user.role ? "admin" :"user"}</td>
                <td>{user.activity ? "active" :"not active"}</td>
                      <td>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Link href={`/dashboard/user/${user.id}`}>
                    <Button type='submit' size="sm" variant="plain" >
                      Edit
                    </Button>
                    </Link>
                    <form action={deleteUsers}>
                      <input type="hidden" name='id' defaultValue={user.id}/>
                    <Button size="sm" type='submit' variant="soft" color="danger">
                      Delete
                    </Button>
                    </form>
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    <UsePagination count={count}/>
    </TableContainer>
      </Sheet>
        </Box>
  );
}

export default Users
