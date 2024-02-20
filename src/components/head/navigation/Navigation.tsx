import {AppBar, Box, Grid, Link, Stack, SvgIcon, Toolbar} from "@mui/material";
import {BurgerMenu, ButtonNav, StackNav} from "../../../theme/customComponents";
import {changeMenuOpen} from "../../../redux/slices/navigationSlice";
import {Link as RouteLink} from 'react-router-dom';
import {ReactComponent as Menu} from '../../../img/Menu.svg';
import {ReactComponent as Close} from '../../../img/CloseIcon.svg';
import {ReactComponent as Favorite} from './../../../img/favoriteIcon.svg'
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/hooks";
import {FC} from "react";
import {IMenuLinks} from "../../../types";
import {changePlayPage} from "../../../redux/slices/playListSlice";
import {changePageSelected} from "../../../redux/slices/blogPostSlice";

const Navigation:FC = () => {

    const MENU_LINKS_ARRAY: IMenuLinks[] = [
        {
            title: 'Episodes',
            href: '/episodes',
        },
        {
            title: 'Blog',
            href: '/blogs',
        },
        {
            title: 'Contact',
            href: '/contact',
        },
        {
            title: 'Donate',
            href: '/donate',
            icon: true,
        },
    ]
    const menuOpen = useAppSelector(state => state.nav.menuOpen);
    const dispatch = useAppDispatch();

    const resetNumberPage = ():void => {
        dispatch(changePageSelected(1));
        dispatch(changePlayPage(1));
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor: 'transparent', boxShadow: 'none', borderBottom: '1px solid #EAEAEE', height: menuOpen ? '315px' : '77px', transition: 'height 1s'}}>
                <Toolbar sx={{padding: '0px 16px', minHeight: '76px'}}>
                    <Grid container alignItems={'center'} justifyContent={'center'}>
                        <Grid item xs={11}>
                            <RouteLink to={'/'} style={{textDecoration: 'none'}}>
                                <Link color={'primary.contrastText'} underline={'none'} variant='logo'
                                      sx={{flexGrow: 1}} onClick={() => resetNumberPage()}>
                                    Castpress.
                                </Link>
                            </RouteLink>
                        </Grid>
                        <Grid item xs={1}>
                            <BurgerMenu
                                size="large"
                                edge="end"
                                aria-label="menu"
                                onClick={() => dispatch(changeMenuOpen())}
                            >
                                <SvgIcon component={menuOpen ? Close : Menu} inheritViewBox/>
                            </BurgerMenu>
                        </Grid>
                        <Grid mt={'20px'} item sx={{transition: 'all 0.5s', opacity: menuOpen ? 1 : 0, position: menuOpen ? 'none' : 'absolute'}}>
                            <Stack spacing={'39px'}>
                                {
                                    MENU_LINKS_ARRAY.map((link, index) => (
                                        <RouteLink key={index} to={link.href} onClick={() => dispatch(changeMenuOpen())}>
                                            <ButtonNav startIcon={link.icon && <Favorite/>} sx={{fontSize: '14px'}} disableRipple>{link.title}</ButtonNav>
                                        </RouteLink>
                                    ))
                                }
                            </Stack>
                        </Grid>
                    </Grid>
                    <StackNav direction={'row'} spacing={'39px'}>
                        {MENU_LINKS_ARRAY.map((link, index) => (
                            <RouteLink key={index} to={link.href} onClick={() => resetNumberPage()}>
                                <ButtonNav startIcon={link.icon && <Favorite/>} disableRipple>{link.title}</ButtonNav>
                            </RouteLink>
                        ))}
                    </StackNav>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navigation