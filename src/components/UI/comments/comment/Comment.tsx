import {Avatar, Box, Button, Grid, Stack, Typography} from "@mui/material";
import {ReactComponent as ReplyArrow} from '../../../../img/replyIcon.svg';
import {CommentType} from "../../../../types";
import {FC} from "react";

interface ICommentProps {
    comment: CommentType;
    replyed?: boolean;
}

const Comment:FC<ICommentProps> = ({comment, replyed = false}) => {
    return (
        <Grid container columns={{xs: 16, sm: 18}} pb={replyed ? '0' :'40px'} sx={{borderBottom: replyed ? 'none' : '1px solid #EAEAEE'}}>
            <Grid item xs={4} sm={2}>
                <Avatar variant="rounded" src={comment.avatar} sx={{width: 50, height: 50}}/>
            </Grid>
            <Grid item xs={12} sm={16}>
                <Stack spacing={{xs: '24px', sm: '40px'}}>
                    <Stack spacing={'10px'}>
                        <Stack spacing={{xs: '5px', sm: '16px'}} direction={{xs: 'column', sm: 'row'}}>
                            <Typography variant={'h5'} color={'grey.dark'}>{comment.name}</Typography>
                            <Typography variant={'h5'} color={'grey.main'}>{comment.date}</Typography>
                        </Stack>
                        <Typography variant={'h4'} color={'grey.dark'}>{comment.message}</Typography>
                        <Box>
                            <Button startIcon={<ReplyArrow/>} sx={{
                                color: 'grey',
                                textTransform: 'none',
                                fontWeight: '400',
                                fontSize: '14px'
                            }}>Reply</Button>
                        </Box>
                    </Stack>
                    {
                        comment.reply.map(reply => (
                            <Comment comment={reply} replyed={true}/>
                        ))
                    }
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Comment