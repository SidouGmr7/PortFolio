import * as React from 'react'
import { AppBar, Box, Toolbar, Typography, MenuItem, Container } from '@mui/material'
import ScrollIntoView from 'react-scroll-into-view'
import { useLocation, useNavigate } from 'react-router-dom'

export default function NavBar() {
    const p = (str) => <span className='text-primary font-bold'>{str}</span>

    return (
        <AppBar
            position='fixed'
            sx={{
                backdropFilter: 'blur(8px)',
                backgroundColor: 'transparent',
                display: 'flex',
            }}
        >
            <Container maxWidth='xl'>
                <Toolbar>
                    <Box
                        sx={{
                            flexGrow: { xs: 1, md: 0 },
                            display: { xs: 'flex' },
                            justifyContent: { xs: 'center' },
                        }}
                    >
                        <Typography variant='body'>
                            {p('GMR')} {p('P')}ORT{p('F')}OLIO
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { md: 'flex', xs: 'none' },
                            justifyContent: 'center',
                        }}
                    >
                        <NavbarItem Name='Home' Selector='#home' />
                        <NavbarItem Name='About' Selector='#profile' />
                        <NavbarItem Name='Service' Selector='#service' />
                        <NavbarItem Name='Skills' Selector='#tech' />
                        <NavbarItem Name='My Project' Selector='#projects' />
                        <NavbarItem Name='Project Contribution' Selector='#projectsc' />
                        <NavbarItem Name='Contact' Selector='#contact' />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

const NavbarItem = ({ Selector, Name }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const isActive = Selector.slice(1) === searchParams.get('section')

    return (
        <MenuItem className='text-lg hover:scale-110 transition cursor-pointer text-white'>
            <ScrollIntoView selector={Selector}>
                <Typography
                    className={`hover:text-primary ${isActive ? 'text-primary' : ''} `}
                    onClick={() => navigate(`?section=${Selector.slice(1)}`)}
                >
                    {Name}
                </Typography>
            </ScrollIntoView>
        </MenuItem>
    )
}
