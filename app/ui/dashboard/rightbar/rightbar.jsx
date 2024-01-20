import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Toolbar } from '@mui/material';


export default function Rightbar() {
    return (
        <Box component={Container} sx={{
            width: { sm: `calc(80%)` },
            ml: { sm: `250px` },
            position:"fixed",
            display:{sm:`block`,  xs:`none`}
        }}>
    <Box sx={{ 
        color:"#fff",
        position:'relative',
        bgcolor:"#182237",
        bottom:"270px",
}}>
        <Card sx={{ maxWidth: 275 ,backgroundColor:"#182237",borderRadius:"10px",height:"fit-content",position:"absolute", right:"0", bottom:"0", }}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="#fff" gutterBottom>
        Word of the Day
        </Typography>
        <Typography color="#fff" variant="h5" component="div">
        be
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="#fff">
        adjective
        </Typography>
        <Typography color="#fff" variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
    <Card sx={{ maxWidth: 275 ,bgcolor:"#182237",color:"#fff",top:"0px",borderRadius:"10px",height:"fit-content",position:"absolute", right:"0",top:"20px", bottom:"0px"}}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="#fff" gutterBottom>
        Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
        be
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="#fff">
        adjective
        </Typography>
        <Typography  variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
    </Box>
    </Box>
    );
}