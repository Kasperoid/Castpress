import {Box, Typography} from "@mui/material";
import {FC} from "react";

interface IHeadOnePageProps {
    someInfo: string | undefined;
    themeTitle: string | undefined;
    themeText: string | undefined;
}
const HeadOnePage:FC<IHeadOnePageProps> = ({someInfo, themeTitle, themeText}) => {
    return (
        <>
            <Typography variant={'h4'} color={'grey.dark'}>
                {someInfo}
            </Typography>
            <Box mt={'39px'}>
                <Typography variant={'h2'} mb={'24px'}>{themeTitle}</Typography>
                <Typography variant={'h4'} color={'grey.dark'}>{themeText}</Typography>
            </Box>
        </>
    )
}

export default HeadOnePage