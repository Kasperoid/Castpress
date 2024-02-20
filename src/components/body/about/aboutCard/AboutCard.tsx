import {Grid, IconButton, Stack, Typography} from "@mui/material";
import {AboutCardBox} from "../../../../theme/customComponents";
import {ReactComponent as Linkedin} from './../../../../img/linkedin.svg';
import {ReactComponent as Git} from "./../../../../img/git.svg";
import {ReactComponent as Twitter} from "./../../../../img/twitter.svg";
import {FC} from "react";

interface IAboutCardProps {
    img: string;
    position: string;
    name: string;
    desc: string;
}

const AboutCard:FC<IAboutCardProps> = ({img, position, name, desc}) => {
    return (
        <AboutCardBox>
            <Grid container columns={18} columnSpacing={'40px'} rowSpacing={'16px'}>
                <Grid item xs={18} sm={8}>
                    <img alt={name} src={img} style={{display: 'block', maxWidth: '300px', width: '100%', borderRadius: '4px'}}/>
                </Grid>
                <Grid item xs={18} sm={10}>
                    <Typography color={'secondary.contrastText'} variant="h6" component="p"
                                sx={{textTransform: 'uppercase', fontWeight: 600}}>
                        {position}
                    </Typography>
                    <Typography variant="h3" mt={'8px'} mb={'16px'}>{name}</Typography>
                    <Typography variant="h4" color={'grey.dark'}>{desc}</Typography>
                    <Stack direction={'row'} spacing={'6px'} mt={'24px'}>
                        <IconButton size="small"><Linkedin/></IconButton>
                        <IconButton size="small"><Git/></IconButton>
                        <IconButton size="small"><Twitter/></IconButton>
                    </Stack>
                </Grid>
            </Grid>
        </AboutCardBox>
    )
}

export default AboutCard