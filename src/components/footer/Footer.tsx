import {Box, Grid, IconButton, Input, Stack, Typography} from "@mui/material";
import {Link as RouteLink} from 'react-router-dom';
import {ReactComponent as Arrow} from './../../img/arrowLeft.svg'
import {ReactComponent as Git} from "./../../img/gitFooter.svg";
import {ReactComponent as Twitter} from "./../../img/twitterFooter.svg";
import {ReactComponent as Facebook} from "./../../img/facebook.svg";
import {IMenuLinks} from "../../types";
import {FooterIconButton, FooterLink} from "../../theme/customComponents";
import {FC} from "react";
import {changePageSelected} from "../../redux/slices/blogPostSlice";
import {changePlayPage} from "../../redux/slices/playListSlice";
import {useAppDispatch} from "../../redux/hooks/hooks";

const LIST_ARR: IMenuLinks[] = [
    {
        title: 'Episodes',
        href: '/episodes'
    },
    {
        title: 'Blog',
        href: '/blogs'
    },
    {
        title: 'Contact' ,
        href: '/contact'
    },
    {
        title: 'Donate',
        href: '/donate'
    },
];

const Footer:FC = () => {
    const dispatch = useAppDispatch();
    const clickLinkHandler = () => {
        dispatch(changePageSelected(1));
        dispatch(changePlayPage(1));
    }
    return (
        <Stack spacing={{xs: 3, sm: 10}} pt={{xs: 2, sm: 4}} sx={{borderTop: '1px solid #EAEAEE'}}>
            <Grid container rowSpacing={4}>
                <Grid item xs={12} sm={6}>
                    <Stack spacing={'9px'}>
                        {LIST_ARR.map(item => (
                            <Box key={Math.random()}>
                                <RouteLink to={item.href} style={{textDecoration: 'none'}} onClick={() => clickLinkHandler()}>
                                    <FooterLink underline={'none'} variant={'h5'} color={'grey'}>
                                        {item.title}
                                    </FooterLink>
                                </RouteLink>
                            </Box>
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack spacing={{xs: '16px', sm: '14px'}}>
                        <Stack spacing={{xs: '6px', sm: '8px'}}>
                            <Typography variant={'h6'} sx={{
                                fontSize: '16px',
                                fontWeight: 600,
                                textTransform: 'uppercase'
                            }}>Newsletter</Typography>
                            <Typography variant={'h6'} color={'grey.dark'} sx={{letterSpacing: 'normal'}}>Sign up now; get
                                closer to our action.</Typography>
                        </Stack>
                        <Stack direction={'row'} sx={{backgroundColor: '#F5F5F7', borderRadius: '4px'}}>
                            <Input placeholder="Email  adress..." fullWidth sx={{marginLeft: '14px'}}/>
                            <FooterIconButton disableRipple sx={{margin: '3px 3px 3px 0'}}>
                                <Arrow/>
                            </FooterIconButton>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <Stack spacing={3} alignItems={'center'}>
                <Typography variant={'h5'}>PodcastTheme by VitaThemes | Privacy policy </Typography>
                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                    <IconButton>
                        <Facebook />
                    </IconButton>
                    <IconButton>
                        <Git />
                    </IconButton>
                    <IconButton>
                        <Twitter />
                    </IconButton>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Footer