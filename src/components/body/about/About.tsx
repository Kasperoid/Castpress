import {Box, Stack, Typography} from "@mui/material";
import AboutCard from "./aboutCard/AboutCard";
import {useAppSelector} from "../../../redux/hooks/hooks";
import {FC} from "react";

const About:FC = () => {
    const team = useAppSelector(state => state.team.team);
    return (
        <Box mb={{xs: '40px', sm: '64px'}}>
            <Typography variant={'h1'}>About</Typography>
            <Stack spacing={'24px'} mt={'40px'} mb={'40px'}>
                <Typography variant={'h2'}>What, when and how?</Typography>
                <Typography variant={'h4'} color={'grey.dark'}>Duis rutrum dictum libero quis rutrum. Etiam sed neque
                    aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque.
                    Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
                    lacus, ac sodales lectus placerat quis. Curabitur ultricies ex ante, eu placerat ipsum hendrerit ut.
                    Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida
                    arcu.
                </Typography>
            </Stack>
            <Typography variant={'h2'}>Team members</Typography>
            <Stack spacing={{xs: '24px', sm: '40px'}} alignItems={'center'} mt={'24px'}>
                {team.map(item => (
                    <AboutCard img={item.img} position={item.position} desc={item.desc} name={item.name}/>
                ))}
            </Stack>
        </Box>
    )
}

export default About