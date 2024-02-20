import BodyHeader from "../header/BodyHeader";
import PlayList from "../playList/PlayList";
import Team from "../team/Team";
import Posts from "../posts/Posts";
import {useAppSelector} from "../../../redux/hooks/hooks";
import {FC} from "react";

const Home:FC = () => {
    const mainHeader = useAppSelector(state => state.playList.playLists[0]);
    return (
        <>
            <BodyHeader photo={mainHeader?.img} title={mainHeader?.title} id={mainHeader?.id}/>
            <PlayList/>
            <Team/>
            <Posts/>
        </>
    )
}

export default Home