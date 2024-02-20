import {Box, IconButton, Typography} from "@mui/material";
import {changeTransctiptOpen} from "../../../../redux/slices/playListSlice";
import {ButtonTextEpisode, TextEpisodeBox} from "../../../../theme/customComponents";
import {ReactComponent as Arrow} from './../../../../img/arrowLeftPurp.svg';
import {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks/hooks";

interface ITransctiptionEpProps {
    podcastMinutes: string | undefined;
    podcastTranscr: string | undefined;
}
const TranscriptionEp:FC<ITransctiptionEpProps> = ({podcastMinutes, podcastTranscr}) => {
    const textOpen = useAppSelector(state => state.playList.transciptOpen);
    const dispatcher = useAppDispatch();
    return (
        <Box mt={'48px'} mb={'48px'}>
            <ButtonTextEpisode onClick={() => dispatcher(changeTransctiptOpen())}>
                <Typography variant={'h2'} component={'div'}>
                    Listening time: {podcastMinutes} minutes  |  View transcript
                    <IconButton sx={{padding: 0, marginLeft: '10px'}} disableRipple>
                        <Arrow/>
                    </IconButton>
                </Typography>
            </ButtonTextEpisode>
            <TextEpisodeBox sx={{opacity: textOpen ? '1' : '0', position: textOpen ? 'none' : 'absolute'}}>
                <Typography variant={'h4'} color={'grey.dark'}>{podcastTranscr}</Typography>
            </TextEpisodeBox>
        </Box>
    )
}

export default TranscriptionEp