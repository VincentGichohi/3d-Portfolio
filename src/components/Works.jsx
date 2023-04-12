import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
      options={{
        max:45,
        scale:1,
        speed: 450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className='relative w-full h-[230px]'>

        </div>
      </Tilt>
    </motion.div>
  )
};
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work.</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Experienced software engineer with a passion for developing innovative
          programs that expedite the efficiency and effectiveness of
          organizational success. Well-versed in technology and writing code to
          create systems that are reliable and user-friendly. Skilled leader who
          has the proven ability to motivate, educate, and manage a team of
          professionals to build software programs and effectively track
          changes. Managing a team of professionals in managing data, ensuring
          that accurate and correct data is collected.
        </motion.p>
      </div>
      
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            {...project}
            index={index}
          />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Works, "");
