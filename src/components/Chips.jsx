import React from 'react'
import { skillsIcons } from '../data/icons'
import { Chip, Stack, useMediaQuery } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const generateTheme = (color) => {
    return createTheme({
        palette: {
            primary: {
                main: color,
            },
        },
    })
}

export const Chips = ({ frameworks }) => {
    const icons = skillsIcons({ className: 'md:text-[1.4rem] text-[1rem]' })
    const isMobile = useMediaQuery('(max-width: 1200px)')

    return (
        <Stack direction='row' spacing={1}>
            {frameworks.map((fw) => {
                const theme = generateTheme(icons[fw]?.props?.color || '#6366f1')
                return icons[fw] ? (
                    <ThemeProvider key={fw} theme={theme}>
                        {isMobile ? (
                            icons[fw]
                        ) : (
                            <Chip icon={icons[fw]} label={fw} color='primary' variant='outlined' />
                        )}
                    </ThemeProvider>
                ) : (
                    !isMobile && <Chip label={fw} color='primary' variant='outlined' />
                )
            })}
        </Stack>
    )
}
