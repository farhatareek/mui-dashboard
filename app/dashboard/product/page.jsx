import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Link from 'next/link';
import { fetchproductdata } from '@/app/lib/data';
import SearchAppBar from '@/app/ui/dashboard/searchbar/sdearchbar';
import UsePagination from '@/app/ui/dashboard/pagenation/pagenation';
import { deleteProducts } from '@/app/lib/actions';
import { TableContainer } from '@mui/material';
import Paper from '@mui/material/Paper';


 async function Products ({searchParams}){
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const {count ,products} = await fetchproductdata(q, page);
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
        bgcolor: '#182237',
        }}
        >
            <SearchAppBar/>
        <Link href='/dashboard/product/add'>
        <Button sx={{margin:"20px"}}>Add product</Button>
        </Link>
        <TableContainer component={Paper}>
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
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.desc}</td>
                <td>{product.price}</td>
                <td>{product.color}</td>
                <td>{product.stock}</td>
                <td>{product.category}</td>
                
                      <td>
                  <Box sx={{ display: 'flex', gap: 1 , bgcolor:"#182237"}}>
                    <Link href={`/dashboard/product/${product.id}`}>
                    <Button size="sm" variant="plain" >
                      Edit
                    </Button>
                    </Link>
                    <form action={deleteProducts}>
                      <input type="hidden" name='id' defaultValue={product.id}/>
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

export default Products
