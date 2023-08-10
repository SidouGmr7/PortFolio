import ProjectCart from "../components/ProjectCart"
import myProjectsItem from "../data/myProjectsItem.json"
import myProjectsContribution from "../data/myProjectsContribution.json"
import { Grid, useMediaQuery } from "@mui/material"

const MyProjects = () => {
  const importAll = (r) => r.keys().map(r)
  const img = importAll(require.context("../images/logo", false, /\.(png|jpe?g|svg)$/))
  const isMobile = useMediaQuery("(max-width: 600px)")
  console.log("isMobile", isMobile)
  return (
    <>
      <div className='relative w-full md:pt-20 pt-12' id='projectsc'>
        <p className='headerTitle mb-10'>Projects Contribution</p>
        <Grid container>
          {myProjectsContribution.map((itemData, index) => (
            <ProjectCart {...itemData} key={index} />
          ))}
        </Grid>
      </div>
      <div className='relative w-full md:pt-20 pt-12' id='projects'>
        <p className='headerTitle mb-10'>My Projects</p>
        <Grid container>
          {myProjectsItem.map((itemData, index) => (
            <ProjectCart {...itemData} key={index} />
          ))}
        </Grid>
      </div>
      <div className='relative w-full lg:h-screen pt-40' id='with'>
        <p className='mb-10 text-3xl text-white text-center'>
          I'm proud to have collaborated with some awesome companies:
        </p>
        <Grid container mt={10}>
          {img.map((title) => (
            <Grid xs={4} sm={4} md={4} lg={4} className='gap-8 p-10'>
              <div className='flex justify-center items-center'>
                <img src={title} alt='images' style={{ width: isMobile ? "" : "30%" }} />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default MyProjects
