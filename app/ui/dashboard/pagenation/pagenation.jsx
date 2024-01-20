'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const List = styled('ul')({
  listStyle: 'none',
  padding: "20px",
  marginTop: "20px",
  display: 'flex',
  justifyContent:"space-around",
  alignItems:"center"
});

export default function UsePagination({count}) {
    const searchParams = useSearchParams()
    const {replace} = useRouter()
    const pathname = usePathname()
    const page = searchParams.get("page") || 1;
    const params = new URLSearchParams(searchParams)
    const PAGE_ITEM = 5
    
    const hasPrev = PAGE_ITEM * (parseInt(page)-1) > 0
    const hasNext = PAGE_ITEM * (parseInt(page-1)) + PAGE_ITEM < count

    const handlerPageBtn =(type)=>{
        type==="prev"? params.set("page", parseInt(page)-1) 
        :params.set("page", parseInt(page)+1)
        replace(`${pathname}?${params}`)
    }
    
        return (
        <nav>
        <List>
                <button
                style={{marginRight:"20px"}}
                disabled={!hasPrev}
                onClick={()=>handlerPageBtn("prev")}
                    
                >
                prev
                </button>
                <button 
                disabled={!hasNext} 
                onClick={()=>handlerPageBtn("next")}  >
                next
                </button>
        </List>
        </nav>
        );
}