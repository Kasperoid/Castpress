import {Box, Stack, Typography} from "@mui/material";
import Comment from "./comment/Comment";
import {CommentType} from "../../../types";
import {FC} from "react";

interface ICommentsProps {
    comments: CommentType[] | undefined
}

const Comments:FC<ICommentsProps> = ({comments}) => {
    return (
        <>
            {comments &&
                <Box mt={'48px'}>
                    <Typography mb={'19px'} variant={'h4'}>Comments</Typography>
                    <Stack spacing={'40px'}>
                        {
                            comments.map(comment => (
                                <Comment comment={comment}/>
                            ))
                        }
                    </Stack>
                </Box>
            }
        </>
    )
}

export default Comments