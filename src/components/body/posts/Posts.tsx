import {Box, Button, Grid, Link, Pagination, Stack, Typography} from "@mui/material";
import {Link as RouteLink} from 'react-router-dom';
import {ReactComponent as Arrow} from './../../../img/arrowIcon.svg';
import {changePageSelected, selectPost} from "../../../redux/slices/blogPostSlice";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/hooks";
import {FC} from "react";

const onClickHandler = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

interface IPostsProps {
    headerText?: string;
    countCards?: number;
    visibleButton?: boolean;
    selectedPage?: boolean;
}

const Posts:FC<IPostsProps> = ({selectedPage, headerText='Latest Posts', countCards = 3, visibleButton = true}) => {
    const posts = useAppSelector(state => state.blog.posts);
    const visiblePage = useAppSelector(state => state.blog.pageSelected);
    const dispatcher = useAppDispatch();
    const start = (visiblePage - 1) * countCards;
    const end = start + countCards;

    return (
        <Box mt={selectedPage ? {xs: 0, sm: 6} : {xs: 8, sm: 8}} mb={selectedPage ? {xs: 6, sm: 8} : "48px"} >
            <Typography mb={'25px'} variant={'h1'}>{headerText}</Typography>
            <Grid container rowSpacing={{xs: '40px', sm: '24px'}}>
                {posts !== undefined && posts.slice(start, end).map(item => (
                    <Grid item key={item.id}>
                        <Grid container rowSpacing={'16px'} columnSpacing={'40px'} justifyContent={'space-between'}>
                            <Grid xs={12} sm={4} item>
                                <img style={{borderRadius: '4px'}} src={item.img} alt="clock"/>
                            </Grid>
                            <Grid xs={10} sm={8} item>
                                <Stack sx={{maxWidth: '450px'}} spacing={{xs: '16px', sm: '40px'}}>
                                    <Stack spacing={'16px'}>
                                        <RouteLink style={{textDecoration: 'none'}} to={`/blogs/post/${item.id}`} onClick={() => dispatcher(selectPost(item.id))}>
                                            <Link href={'#'} underline={'none'} color={'primary.contrastText'}
                                                  variant={'h2'}>{item.name}</Link>
                                        </RouteLink>
                                        <Typography variant={'h5'} sx={{color: '#979797'}}>{item.dateCreated}</Typography>
                                    </Stack>
                                    <Box>
                                        <RouteLink style={{textDecoration: 'none'}} to={`/blogs/post/${item.id}`} onClick={() => dispatcher(selectPost(item.id))}>
                                            <Link href={'#'} underline={'hover'} variant={'h5'}
                                                  color={'secondary.contrastText'}
                                                  sx={{fontWeight: 600}}>Read More</Link>
                                        </RouteLink>
                                    </Box>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
                {!selectedPage ?
                    <Grid item sx={{display: visibleButton ? 'flex' : 'none'}}>
                        <RouteLink to={'/blogs'} onClick={() => onClickHandler()}>
                            <Button endIcon={<Arrow/>} sx={{textTransform: 'none'}} variant={'contained'}
                                    color={'secondary'}>View Blog</Button>
                        </RouteLink>
                    </Grid>
                    :
                    posts.length > 3 &&
                    <Stack spacing={2} mt={{xs: 5, sm: 8}}>
                        <Pagination page={visiblePage} count={Math.ceil(posts.length / countCards)} shape="rounded" onChange={(_, value) => dispatcher(changePageSelected(value))}/>
                    </Stack>
                }
            </Grid>
        </Box>
    )
}

export default Posts