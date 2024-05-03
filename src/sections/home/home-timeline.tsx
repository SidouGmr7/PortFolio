import { m } from 'framer-motion'

import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import { varFade, MotionViewport } from 'src/components/animate'

import TimelineView from './components/timeline-view'

// ----------------------------------------------------------------------

export default function HomeTimeLine() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
        }}
      >
        <m.div variants={varFade().inDown}>
          <Typography variant="h2">My Experience</Typography>
        </m.div>
      </Stack>

      <TimelineView />
    </Container>
  )
}
