import {Box, CircularProgress, Container, Stack, Typography} from "@mui/material";
import {Route, Routes} from "react-router-dom";

import Navigation from "./components/head/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Home from "./components/body/home/Home";
import Episode from "./components/body/episode/Episode";
import PlayList from "./components/body/playList/PlayList";
import Contact from "./components/body/contact/Contact";
import Posts from "./components/body/posts/Posts";
import Post from "./components/body/posts/post/Post";
import ErrorNotFound from "./components/body/error/ErrorNotFound";
import About from "./components/body/about/About";
import Donate from "./components/body/donate/Donate";
import {FC, useEffect} from "react";
import {playListFetch} from "./redux/slices/playListSlice";
import {teamSliceFetch} from "./redux/slices/teamSlice";
import {blogPostFetch} from './redux/slices/blogPostSlice';
import {useAppDispatch, useAppSelector} from "./redux/hooks/hooks";
import {Statuses} from "./types";

const App:FC = () => {
  const dispatcher = useAppDispatch();

  const blogStatus = useAppSelector(state => state.blog.postsStatus);
  const teamStatus = useAppSelector(state => state.team.teamStatus);
  const playListStatus = useAppSelector(state => state.playList.playListStatus);

  const playListError = useAppSelector(state => state.playList.playListError);
  const teamError = useAppSelector(state => state.team.teamError);
  const blogError = useAppSelector(state => state.blog.postsError);

  useEffect(() => {
    dispatcher(playListFetch());
    dispatcher(teamSliceFetch());
    dispatcher(blogPostFetch());
  }, [dispatcher]);
  return (
      <>
        {
          (blogStatus === Statuses.fulfilled && teamStatus === Statuses.fulfilled && playListStatus === Statuses.fulfilled) ?
              <>
                <Navigation/>
                <Container maxWidth={'lg'} sx={{marginTop: 6, marginBottom: 3}}>
                  <Stack alignItems={'center'}>
                    <Box sx={{maxWidth: '670px', width: '100%'}}>
                      <Routes>
                        <Route path={'*'} element={<ErrorNotFound/>}/>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/episodes/episode/:id'} element={<Episode/>}/>
                        <Route path={'/episodes'} element={<PlayList selectedPage={true}/>}/>
                        <Route path={'/contact'} element={<Contact/>}/>
                        <Route path={'/blogs'} element={<Posts selectedPage={true}/>}/>
                        <Route path={'/blogs/post/:id'} element={<Post/>}/>
                        <Route path={'/about'} element={<About/>}/>
                        <Route path={'/donate'} element={<Donate/>}/>
                      </Routes>
                      <Footer/>
                    </Box>
                  </Stack>
                </Container>
              </>
              :
              <Box sx={{width: '100%', height: '100%', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {(playListError || teamError || blogError)
                    ?
                    <Typography variant={'h1'}>На сервере возникла ошибка!</Typography>
                    :
                    <CircularProgress color={'third'}/>
                }
              </Box>
        }
      </>
  );
}

export default App;

