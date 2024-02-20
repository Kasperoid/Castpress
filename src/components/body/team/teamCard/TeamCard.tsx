import {Box, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import {ReactComponent as Linkedin} from './../../../../img/linkedin.svg';
import {ReactComponent as Git} from "./../../../../img/git.svg";
import {ReactComponent as Twitter} from "./../../../../img/twitter.svg";
import {FC} from "react";

interface ITeamCardProps {
    img: string;
    position: string;
    name: string;
}
const TeamCard:FC<ITeamCardProps> = ({img, position, name}) => {
    return (
        <Card sx={{maxWidth: '300px', backgroundColor: '#F5F5F7'}}>
            <CardActionArea>
                <Box sx={{overflow: 'hidden'}}>
                    <CardMedia
                        sx={{height: 300}}
                        image={img}
                    />
                </Box>
                <CardContent sx={{padding: '16px 16px 40px 16px'}}>
                    <Typography color={'secondary.contrastText'} gutterBottom variant="h6" component="p"
                                sx={{textTransform: 'uppercase', fontWeight: 600}}>
                        {position}
                    </Typography>
                    <Typography variant="h3">
                        {name}
                    </Typography>
                </CardContent>
                <CardActions sx={{padding: '0 16px 16px 16px'}}>
                    <IconButton size="small"><Linkedin/></IconButton>
                    <IconButton size="small"><Git/></IconButton>
                    <IconButton size="small"><Twitter/></IconButton>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default TeamCard