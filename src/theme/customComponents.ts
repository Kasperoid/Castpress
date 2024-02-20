import {Box, Button, IconButton, Link, Stack, styled, TextField, Typography} from "@mui/material";

const ReplyInput = styled(TextField)(({ theme }) => ({
    backgroundColor: '#F5F5F7',
})) as typeof TextField
const BurgerMenu = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.only('xs')]: {
        display: 'block',
    },
    '&:hover': {
        filter: 'brightness(0) saturate(100%) invert(0%) sepia(100%) saturate(8%) hue-rotate(163deg) brightness(99%) contrast(101%)',
    },
})) as typeof IconButton
const StackNav = styled(Stack)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.only('xs')]: {
        display: 'none',
    },
})) as typeof Stack
const ButtonNav = styled(Button)(({ theme }) => ({
    padding: 0,
    letterSpacing: '0.16em',
    color: theme.palette.primary.contrastText,
    '&:hover': {
        backgroundColor: 'transparent',
    },
})) as typeof Button
const TextEpisodeBox = styled(Box)(({ theme }) => ({
    border: '1px solid #EAEAEE',
    borderTop: 'none',
    padding: '16px',
    overflow: 'auto',
    height: '352px',
    transition: 'all 0.5s ease-out',
    "&::-webkit-scrollbar-track": {
        borderRadius: '4px',
        background: '#EAEAEE',
        margin: '24px'
    },
    "&::-webkit-scrollbar": {
        width: '6px',
    },
    "&::-webkit-scrollbar-thumb": {
        borderRadius: '5px',
        background: '#979797',
    }
})) as typeof Box
const ButtonTextEpisode = styled(Box)(({ theme }) => ({
    border: '1px solid #EAEAEE',
    padding: '16px',
    '& svg': {
        transition: '0.3s ease-out'
    },
    '&:hover': {
        cursor: 'pointer'
    },
    '&:hover svg': {
        marginLeft: '20px',
    },
})) as typeof Box

const DescriptionError = styled(Typography)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up('sm')]: {
        display: 'block',
    },
})) as typeof Typography

const AboutCardBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.only('xs')]: {
        maxWidth: '270px'
    },
})) as typeof Box

const FooterLink = styled(Link)(({ theme }) => ({
    fontWeight: 600,
    '&:hover': {
        color: theme.palette.primary.contrastText,
    },
})) as typeof Link
const FooterIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: '#7247CA',
    padding: '18px',
    borderRadius: '4px',
    position: 'relative',
    '& svg': {
        position: 'absolute',
        right: '50%',
        transform: 'translateX(50%)',
        transition: 'right 0.3s ease-out',
    },
    '&:hover svg': {
        right: '8px',
        filter: 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(2%) hue-rotate(208deg) brightness(103%) contrast(101%)'
    }
})) as typeof IconButton

export {ReplyInput, BurgerMenu, StackNav, ButtonNav, TextEpisodeBox, ButtonTextEpisode, DescriptionError, AboutCardBox, FooterLink, FooterIconButton}