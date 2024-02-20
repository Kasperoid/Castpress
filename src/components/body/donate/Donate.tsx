import {Button, Stack, Typography} from "@mui/material";
import {ReactComponent as ArrowSubmit} from '../../../img/whiteArrow.svg';
import {FC} from "react";

const Donate:FC = () => {
    return (
        <Stack spacing={'40px'} alignItems={'flex-start'} mb={{xs: '48px', sm: '64px'}}>
            <Typography variant={'h1'}>Support CastPress</Typography>
            <Typography variant={'h4'} color={'grey.dark'}>
                Help us continue to break down silos and spread knowledge through CastPress.
                By being funded, with your valuable donations, we can continue to bring you podcast content that is fresh, relevant and helps you grow.
            </Typography>
            <Button endIcon={<ArrowSubmit/>} variant={'contained'} color={'third'} sx={{textTransform: 'none'}}>Donate Now</Button>
        </Stack>
    )
}

export default Donate