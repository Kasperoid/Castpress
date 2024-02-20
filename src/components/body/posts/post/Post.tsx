import {Box} from "@mui/material";
import HeadOnePage from "../../../UI/headOnePage/HeadOnePage";
import SocialsMedia from "../../../UI/socialsMedia/SocialsMedia";
import Posts from "./../Posts";
import ReplyForm from "../../../UI/replyForm/ReplyForm";
import Comments from "../../../UI/comments/Comments";
import BodyHeader from "../../header/BodyHeader";
import {FC} from "react";
import {useAppSelector} from "../../../../redux/hooks/hooks";

const Post:FC = () => {
    const post = useAppSelector(state => state.blog.selectedPost);

    return (
        <>
            <BodyHeader photo={post?.img} title={post?.name} date={post?.dateCreated} author={post?.author} listenOn={false}/>
            <Box mt={'64px'}>
                <HeadOnePage someInfo={post?.someInfo} themeTitle={post?.title} themeText={post?.mainText}/>
                <SocialsMedia tags={post?.tags}/>
            </Box>
            <Posts headerText={'Related Posts'} countCards={2} visibleButton={false}/>
            <ReplyForm/>
            <Comments comments={post?.comments}/>
        </>
    )
}

export default Post