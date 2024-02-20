import {Box, Grid, Typography} from "@mui/material";
import {Link as RouteLink} from 'react-router-dom';
import TeamCard from "./teamCard/TeamCard";
import {FC} from "react";
import {useAppSelector} from "../../../redux/hooks/hooks";

const Team:FC = () => {
    const onClickHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const team = useAppSelector(state => state.team.team);
    return (
        <Box>
            <Typography variant={'h1'} mb={'25px'}>Team</Typography>
            <Grid justifyContent="space-between" rowSpacing={'24px'} columnSpacing={'20px'} container>
                {team.map(item => (
                    <Grid xs={12} sm={6} item key={item.id}>
                        <RouteLink to={'/about'} style={{textDecoration: 'none'}} onClick={() => onClickHandler()}>
                            <TeamCard img={item.img} position={item.position} name={item.name}/>
                        </RouteLink>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
};

export default Team