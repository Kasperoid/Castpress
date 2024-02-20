import {Box, Button, IconButton, Stack, Typography} from "@mui/material";
import {ReactComponent as Start} from './../../../img/iconStart.svg';
import {ReactComponent as Apple} from './../../../img/apple.svg';
import {ReactComponent as Cloud} from './../../../img/cloud.svg';
import {ReactComponent as Spotify} from "./../../../img/spotify.svg";
import {Link as RouteLink} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {changeVisibleEpisode} from "../../../redux/slices/playListSlice";
import {FC} from "react";

interface IBodyHeaderProps {
    photo?: string;
    title?: string;
    date?: string;
    epNumber?: string;
    author?: string;
    id?: number;
    listenOn?: boolean;
}
const BodyHeader:FC<IBodyHeaderProps> = ({photo, title, date, epNumber, author, id, listenOn = true}) => {
    const dispatcher = useDispatch()
    return (
        <Stack alignItems={'center'} spacing={date ? '16px' : '39px'}>
            <Box><img alt={'photoMain'} src={photo} style={{borderRadius: '5px'}}/></Box>
            <Stack alignItems={'center'} spacing={'16px'}>
                <Typography variant={'h1'} align={'center'}>{title}</Typography>
                {
                    date ?
                        <Typography variant={'h5'}
                                    color={'grey.main'}>{epNumber && `Episode ${epNumber} | `} {`${date} | By ${author}`}</Typography>
                        :
                        <>
                            {id &&
                                <RouteLink to={`/episodes/episode/${id}`} onClick={() => dispatcher(changeVisibleEpisode(id))}>
                                    <Button startIcon={<Start/>} sx={{textTransform: 'none', fontSize: '12px'}}
                                            variant={'contained'}
                                            color={'secondary'}>Episode Page</Button>
                                </RouteLink>
                            }
                        </>
                }
            </Stack>
            {listenOn &&
                <Stack alignItems="center" spacing="12px">
                    <Typography variant={'h6'} component={'p'} sx={{textTransform: 'uppercase', fontWeight: 600}}>Listen
                        on</Typography>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={'14px'}>
                        <IconButton>
                            <Spotify/>
                        </IconButton>
                        <IconButton>
                            <Cloud/>
                        </IconButton>
                        <IconButton>
                            <Apple/>
                        </IconButton>
                    </Stack>
                </Stack>
            }
        </Stack>
    )
}

export default BodyHeader