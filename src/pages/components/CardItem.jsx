import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material"
import { motion } from "framer-motion"

const CardItem = (props) => {
    const { title, icon, about, index } = props
    return (
        // <motion.div
        //     animate={{ x: 100, y: 0, opacity: 0 }}
        //     whileInView={{ x: 0, y: 0, opacity: 1 }}
        //     transition={{ duration: 0.5 + index / 20 }}
        //     className={`flex md:flex-col items-center p-7 m-8 shadow-2xl backdrop-blur-md rounded-[10%] sm:w-52 bg-slate-700 bg-opacity-10 ${about && 'flex-col border-l-4 border-[#68fff1]'}`}>
        //     {icon}
        //     <p
        //         className={`md:mt-6 ml-16 md:ml-0 text-center text-xl ${
        //             about ? "text-primary" : "text-gray-100"
        //         } font-semibold`}>
        //         {title}
        //     </p>
        //     <p className='mt-6 text-md text-gray-200 text-center'>{about}</p>
        // </motion.div>

        <Grid key={index} container lg={2} md={4} sm={6} xs={12} className='flex p-4'>
            <Card
                className={`items-center shadow-2xl backdrop-blur-md rounded-[10%] sm:w-52 bg-red-400 bg-opacity-10 ${
                    about && "border-l-4 border-[#68fff1]"
                }`}
                >
                <CardHeader
                    title={
                        <Typography color='primary' variant='h5' align='center'>
                            {icon}
                            <p
                                className={`md:mt-6 text-center text-xl ${
                                    about ? "text-primary" : "text-gray-100"
                                } font-semibold`}>
                                {title}
                            </p>
                        </Typography>
                    }
                />
                <CardContent>
                    <Typography variant='h5'>
                        <p className=' text-md text-gray-200 text-center'>{about}</p>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CardItem
