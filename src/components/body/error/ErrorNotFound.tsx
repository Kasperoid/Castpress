import {Button, Stack, Typography} from "@mui/material";
import {ReactComponent as ArrowSubmit} from '../../../img/whiteArrow.svg';
import {Link as RouteLink} from 'react-router-dom';
import {DescriptionError} from "../../../theme/customComponents";
import {FC} from "react";

const onClickHandler = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

const ErrorNotFound:FC = () => {
    return (
        <Stack alignItems={'center'} mb={{xs: '48px', sm: '64px'}}>
            <Typography variant={'errorTitle'}>404</Typography>
            <Stack mt={'21px'} mb={{xs: '27px', sm: '22px'}} alignItems={'center'} spacing={'19px'}>
                <Typography variant={'h1'}>Page not found!</Typography>
                <DescriptionError variant={'h4'} color={'grey.dark'} align={'center'}>This page not found (deleted or never exists).<br/>Try a phrase in search box or back to home and start again.</DescriptionError>
            </Stack>
            <RouteLink to={'/'} onClick={() => onClickHandler()}>
                <Button endIcon={<ArrowSubmit/>} variant={'contained'} color={'third'}>Homepage</Button>
            </RouteLink>
        </Stack>
    )
}

export default ErrorNotFound