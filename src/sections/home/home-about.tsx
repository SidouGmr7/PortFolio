import { m } from 'framer-motion'

import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import { paths } from 'src/routes/paths'

import Iconify from 'src/components/iconify'
import { varFade, MotionViewport } from 'src/components/animate'

// ----------------------------------------------------------------------

export default function HomeAbout() {
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
          mb: { xs: 2, md: 5 },
        }}
      >
        <m.div variants={varFade().inUp}>
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            About
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2">Get to know me !</Typography>
        </m.div>
      </Stack>

      <Box
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        px={30}
      >
        <m.div variants={varFade().inUp}>
          <Box sx={{ display: 'grid', justifyItems: 'center' }}>
            <Typography py={4} variant="body1" textAlign="center">
              Im a FullStack MERN Web Developer building a Projects that leads to the success of the
              overall product. Check out some of my work in the Projects section.
              <br />
              <br />
              I also like sharing content related to the stuff that I have learned over the years in
              Web Development so it can help other people of the Dev Community.
              <br />
              <br />
              Im open to Job opportunities where I can contribute, learn and grow. If you have a
              good opportunity that matches my skills and experience then dont hesitate to contact
              me.
            </Typography>
            <Button
              color="inherit"
              size="large"
              variant="outlined"
              startIcon={<Iconify icon="eva:external-link-fill" width={24} />}
              target="_blank"
              rel="noopener"
              href={paths.figma}
              sx={{ borderColor: 'text.primary' }}
            >
              Contact Me
            </Button>
          </Box>
        </m.div>
      </Box>
    </Container>
  )
}
