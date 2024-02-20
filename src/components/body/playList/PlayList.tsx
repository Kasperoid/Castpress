import {Box, Button, Card, CardActions, CardContent, Link, Pagination, Stack, Typography} from "@mui/material";
import {ReactComponent as Play} from './../../../img/playButton.svg';
import {changePlayPage, changeVisibleEpisode} from "../../../redux/slices/playListSlice";
import {Link as LinkRoute} from 'react-router-dom'
import {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/hooks";

interface IPlayLitsProps {
    selectedPage?: boolean;
}

const PlayList:FC<IPlayLitsProps> = ({selectedPage}) => {
    const playPage = useAppSelector(state => state.playList.playPage);
    const playLists = useAppSelector(state => state.playList.playLists);
    const dispatcher = useAppDispatch();
    const countCards = 3;
    const start = (playPage - 1) * countCards;
    const end = start + countCards;

    return (
        <Stack mt={selectedPage ? {xs: 0, sm: 6} : {xs: 8, sm: 12}} mb={selectedPage ? {xs: 6, sm: 8} : {xs: 8, sm: 8}} spacing={5}>
            {selectedPage && <Typography variant={'h1'} pl={'16px'}>Episodes</Typography>}
            <Stack spacing={4}>
                {playLists.length > 0 && playLists.slice(start, end).map(item => (
                    <Card sx={{minWidth: '288px'}} key={item.id}>
                        <CardContent>
                            <Stack spacing={'10px'}>
                                <Stack direction={'row'} spacing={1}>
                                    {item.new &&
                                        <Typography variant={'caption'} component={'span'}
                                                    sx={{
                                                        padding: '6px 8px',
                                                        backgroundColor: '#F5F5F7',
                                                        borderRadius: '3px'
                                                    }}
                                        >New
                                        </Typography>}
                                    <Typography variant="h5" component="div" sx={{color: '#979797'}}>
                                        {`${item.category} | ${item.dateCreated}`}
                                    </Typography>
                                </Stack>
                                <Box>
                                    <LinkRoute style={{textDecoration: 'none'}} to={`/episodes/episode/${item.id}`}
                                               onClick={() => dispatcher(changeVisibleEpisode(item.id))}>
                                        <Link underline={'none'} color={'primary.contrastText'}
                                              variant='h2'>{`${item.epNumber} - ${item.title}`}</Link>
                                    </LinkRoute>
                                </Box>
                                <Typography variant='h4' component={'p'}
                                            sx={{color: '#555555'}}>{item.someInfo.slice(0, 150)}...</Typography></Stack>
                        </CardContent>
                        <CardActions sx={{padding: '0px 8px'}}>
                            <LinkRoute style={{textDecoration: 'none'}} to={'/episode'} onClick={() => dispatcher(changeVisibleEpisode(item.id))}>
                                <Button startIcon={<Play/>}>listen now</Button>
                            </LinkRoute>
                        </CardActions>
                    </Card>
                ))}
                {playLists.length > 3 &&
                    <Stack spacing={2}>
                        <Pagination page={playPage} onChange={(_, value) => dispatcher(changePlayPage(value))}
                                    count={Math.ceil(playLists.length / countCards)} shape="rounded"/>
                    </Stack>}
            </Stack>
        </Stack>
    )
}

export default PlayList