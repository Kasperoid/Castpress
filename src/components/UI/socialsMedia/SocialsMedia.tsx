import {IconButton, Stack, Typography} from "@mui/material";
import {ReactComponent as Facebook} from '../../../img/facebook.svg';
import {ReactComponent as Git} from "../../../img/gitFooter.svg";
import {ReactComponent as Twitter} from '../../../img/twitterFooter.svg';
import {FC} from "react";

interface ISocialsMedia {
    tags: string[] | undefined;
}
const SocialsMedia:FC<ISocialsMedia> = ({tags}) => {
    return (
        <>
            {tags &&
                <Stack spacing={'40px'}>
                    <Stack direction={'row'} spacing={'24px'} pb={'24px'}
                           sx={{borderBottom: '1px solid #EAEAEE'}}>
                        {tags.map(tag => (
                            <Typography variant={'h4'} color={'grey.dark'}>{tag}</Typography>
                        ))}
                    </Stack>
                    <Stack spacing={'16px'} direction={'row'} alignItems={'center'} pb={'40px'}
                           sx={{borderBottom: '1px solid #EAEAEE'}}>
                        <Typography variant={'h4'}>Share:</Typography>
                        <Stack spacing={'8px'} direction={'row'} alignItems={'center'}>
                            <IconButton><Facebook/></IconButton>
                            <IconButton><Git/></IconButton>
                            <IconButton><Twitter/></IconButton>
                        </Stack>
                    </Stack>
                </Stack>
            }
        </>
    )
}

export default SocialsMedia