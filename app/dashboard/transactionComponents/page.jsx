import * as React from 'react';
import Box from '@mui/joy/Box';
import TransactionDashUi from '@/app/ui/dashboard/TransactionDahsUi/TransactionDashUi';

export default function TranscationUiComponent() {
    return (
    <Box sx={{ 
    ml: { sm: "110px", xs:"0" } , 
    p:{sm:3, xs:0},
    mt:"30px",
    width: { sm: `calc(100% )`}
    }}>
    <TransactionDashUi/>
    </Box>
    );
}



