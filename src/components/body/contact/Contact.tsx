import {Button, InputLabel, Stack, Typography} from "@mui/material";
import {ReplyInput} from "../../../theme/customComponents";
import {ReactComponent as ArrowSubmit} from './../../../img/whiteArrow.svg';
import {FC} from "react";

const Contact:FC = () => {
    return (
        <Stack alignItems={'flex-start'} mb={{xs: 6, sm: 8}} mt={{xs: 0, sm: 6}}>
            <Stack spacing={'13px'}>
                <Typography variant={'h1'}>Contact</Typography>
                <Typography variant={'h3'}>Love to hear your thoughts, fears & feelings...</Typography>
            </Stack>
            <form id={'contact'} style={{display: 'flex', flexDirection: 'column', rowGap: '28px', margin: '46px 0 39px 0', width: '100%'}}>
                <Stack spacing={'4px'}>
                    <InputLabel htmlFor={'name'}>Name*</InputLabel>
                    <ReplyInput placeholder={'Enter your name'} fullWidth multiline id={'name'} required/>
                </Stack>
                <Stack spacing={'4px'}>
                    <InputLabel htmlFor={'email'}>Email*</InputLabel>
                    <ReplyInput placeholder={'Enter your email'} fullWidth multiline id={'email'} required/>
                </Stack>
                <Stack spacing={'4px'}>
                    <InputLabel htmlFor={'comment'}>Message</InputLabel>
                    <ReplyInput placeholder={'Enter your message'} fullWidth multiline id={'comment'} sx={{height: '150px'}}/>
                </Stack>
            </form>
            <Button type={'submit'} form={'contact'} endIcon={<ArrowSubmit/>} sx={{textTransform: 'none'}} variant={'contained'} color={'third'}>Submit</Button>
        </Stack>
    )
}

export default Contact