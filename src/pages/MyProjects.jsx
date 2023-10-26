import ProjectCart from '../components/ProjectCart'
import myProjectsItem from '../data/myProjectsItem.json'
import myProjectsContribution from '../data/myProjectsContribution.json'
import { Grid, useMediaQuery } from '@mui/material'
import { SectionWrapper } from '../components/SectionWrapper'

const MyProjects = () => {
    const importAll = (r) => r.keys().map(r)
    const img = importAll(require.context('../images/logo', false, /\.(png|jpe?g|svg)$/))
    const isMobile = useMediaQuery('(max-width: 600px)')
    return (
        <>
            <SectionWrapper id='projectsc' title='Projects Contribution'>
                <Grid container>
                    {myProjectsContribution.map((itemData, index) => (
                        <ProjectCart {...itemData} key={index} />
                    ))}
                </Grid>
            </SectionWrapper>
            <SectionWrapper id='projects' title='My Projects'>
                <Grid container>
                    {myProjectsItem.map((itemData, index) => (
                        <ProjectCart {...itemData} key={index} />
                    ))}
                </Grid>
            </SectionWrapper>
            <SectionWrapper
                id='with'
                title="I'm proud to have collaborated with some awesome companies"
                pClassName='mb-10 md:text-2xl text-white text-center'
            >
                <Grid container className='lg:px-48'>
                    {img.map((title, index) => {
                        const width = isMobile
                            ? index < 3
                                ? '100%'
                                : ''
                            : index > 2
                            ? '80%'
                            : '60%'
                        return (
                            <Grid xs={4} className='md:p-20 p-10'>
                                <div className='flex justify-center items-center'>
                                    <img src={title} alt='images' style={{ width: width }} />
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            </SectionWrapper>
        </>
    )
}

export default MyProjects
