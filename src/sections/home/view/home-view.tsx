import { useScroll } from 'framer-motion'

import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

import ScrollProgress from 'src/components/scroll-progress'

import HomeHero from '../home-hero'
import HomeAbout from '../home-about'
import HomePricing from '../home-pricing'
import HomeServices from '../home-services'
import HomeTimeLine from '../home-timeline'
import HomeDarkMode from '../home-dark-mode'
import HomeLookingFor from '../home-looking-for'
import HomeForDesigner from '../home-for-designer'
import HomeColorPresets from '../home-color-presets'
import HomeAdvertisement from '../home-advertisement'
import HomeCleanInterfaces from '../home-clean-interfaces'

// ----------------------------------------------------------------------

type StyledPolygonProps = {
  anchor?: 'top' | 'bottom'
}

const StyledPolygon = styled('div')<StyledPolygonProps>(({ anchor = 'top', theme }) => ({
  left: 0,
  zIndex: 9,
  height: 80,
  width: '100%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  backgroundColor: theme.palette.background.default,
  display: 'block',
  lineHeight: 0,
  ...(anchor === 'top' && {
    top: -1,
    transform: 'scale(-1, -1)',
  }),
  ...(anchor === 'bottom' && {
    bottom: -1,
    backgroundColor: theme.palette.grey[900],
  }),
}))

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <HomeAbout />

        <HomeServices />

        <HomeTimeLine />

        <Box sx={{ position: 'relative' }}>
          <StyledPolygon />
          <HomeForDesigner />
          <StyledPolygon anchor="bottom" />
        </Box>

        <HomeDarkMode />

        <HomeColorPresets />

        <HomeCleanInterfaces />

        <HomePricing />

        <HomeLookingFor />

        <HomeAdvertisement />
      </Box>
    </>
  )
}
