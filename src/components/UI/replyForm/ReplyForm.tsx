import {Box, Button, Checkbox, FormControlLabel, InputLabel, Stack, Typography} from "@mui/material";
import {ReactComponent as ArrowSubmit} from '../../../img/whiteArrow.svg';
import {ReplyInput} from "../../../theme/customComponents";
import {FC} from "react";
const ReplyForm:FC = () => {
    return (
        <Box pb={'48px'} pt={'48px'} sx={{borderBottom: '1px solid #EAEAEE', borderTop: '1px solid #EAEAEE'}}>
            <Box>
                <Typography variant={'h4'}>Leave a Reply</Typography>
                <Typography variant={'h5'} color={'grey.main'}>Required fields are marked *</Typography>
            </Box>
            <form id={'reply'} style={{display: 'flex', flexDirection: 'column', rowGap: '28px', margin: '35px 0 39px 0'}}>
                <Stack spacing={'4px'}>
                    <InputLabel htmlFor={'comment'}>Comment</InputLabel>
                    <ReplyInput fullWidth multiline id={'comment'} sx={{height: '150px'}}/>
                </Stack>
                <Stack spacing={'4px'}>
                    <InputLabel htmlFor={'name'}>Name*</InputLabel>
                    <ReplyInput fullWidth multiline id={'name'} required/>
                </Stack>
                <Stack spacing={'4px'}>
                    <InputLabel htmlFor={'email'}>Email*</InputLabel>
                    <ReplyInput fullWidth multiline id={'email'} required/>
                </Stack>
                <Stack spacing={'4px'}>
                    <InputLabel htmlFor={'website'}>Website*</InputLabel>
                    <ReplyInput fullWidth multiline id={'website'} required/>
                </Stack>
                <FormControlLabel control={<Checkbox defaultChecked sx={{
                    color: '#222222',
                    '&.Mui-checked': {
                        color: '#7247CA',
                    },
                }}/>} label="Save my name, email, and website in this browser for the next time I comment" sx={{color: 'grey.dark'}}/>
            </form>
            <Button type={'submit'} form={'reply'} endIcon={<ArrowSubmit/>} sx={{textTransform: 'none'}} variant={'contained'} color={'third'}>Submit</Button>
        </Box>
    )
}

export default ReplyForm