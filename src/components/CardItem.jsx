import { Card, CardContent, CardHeader, Grid } from "@mui/material"
import { motion } from "framer-motion"

const CardItem = (props) => {
  const { title, icon, about, index } = props
  return (
    <Grid
      key={index}
      container
      lg={about ? 2 : 2.4}
      md={about ? 4 : 3}
      sm={about ? 6 : 4}
      xs={about ? 12 : 6}
      className='p-6'
    >
      <motion.Card
        animate={{ x: 100, y: 0, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5 + index / 20 }}
        className={`rounded-3xl bg-slate-700 bg-opacity-30 min-w-[100%] ${
          about && "border-l-4 border-[#68fff1]"
        }`}
      >
        {!!icon && <div className='mt-8'>{icon}</div>}
        <CardHeader
          title={title}
          className={`md:mt-6 ml-0 text-center text-xl ${
            about ? "text-primary" : "text-gray-100"
          } font-semibold`}
        />
        {!!about && (
          <CardContent className='text-md text-gray-200 text-center'>{about}</CardContent>
        )}
      </motion.Card>
    </Grid>
  )
}

export default CardItem
