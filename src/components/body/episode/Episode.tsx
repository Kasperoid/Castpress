import BodyHeader from "../header/BodyHeader";
import {Box} from "@mui/material";

import Posts from "../posts/Posts";
import HeadOnePage from "../../UI/headOnePage/HeadOnePage";
import TranscriptionEp from "./transctiptionEpisode/TranscriptionEp";
import SocialsMedia from "../../UI/socialsMedia/SocialsMedia";
import ReplyForm from "../../UI/replyForm/ReplyForm";
import Comments from "../../UI/comments/Comments";
import {FC} from "react";
import {useAppSelector} from "../../../redux/hooks/hooks";

const Episode:FC = () => {
    let episode = useAppSelector(state => state.playList.visibleEpisode);
    return (
        <>
            <BodyHeader photo={episode?.img} title={episode?.title} date={episode?.dateCreated} epNumber={episode?.epNumber} author={episode?.author}/>
            <Box mt={'64px'}>
                <HeadOnePage someInfo={episode?.someInfo} themeTitle={episode?.themeTitle} themeText={episode?.themeText}/>
                <TranscriptionEp podcastMinutes={episode?.podcastMinutes} podcastTranscr={episode?.podcastTranscr}/>
                <SocialsMedia tags={episode?.tags}/>
            </Box>
            <Posts headerText={'Related Posts'} countCards={2} visibleButton={false}/>
            <ReplyForm/>
            <Comments comments={episode?.comments}/>
        </>
    )
}

export default Episode