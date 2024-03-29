import React from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'

interface lifestyleProps {}
const transition: { duration: number; ease: number[] } = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
}

const lifestyle: React.FC<lifestyleProps> = ({}) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [addClip, setAddClip] = React.useState<boolean>(false)

  React.useEffect(() => {
    import('locomotive-scroll').then(locomotiveModule => {
      const scroll = new locomotiveModule.default({
        el: scrollRef.current,
        smooth: true,
        inertia: 0.3,
        multiplier: 0.65,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      })

      console.log(scroll)
    })
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      setAddClip(true)
    }, 1000)
  }, [])

  return (
    <motion.div
      data-scroll-container
      ref={scrollRef}
      className='container'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}>
      <Head>
        <title>Ayo Akeredolu &mdash; lifestyles</title>
        <link rel='icon' href='/vercel.svg' />
      </Head>
      <header data-scroll-section className='gallery-header'>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.2, ...transition } }}
          className='brand-logo'>
          <h6>Akeredolu</h6>
        </motion.div>
        <div className='gallery-header__details'>
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 1, ...transition } }}
            className='gallery-header__text1'>
            Lifestyles
          </motion.h1>
          <div
            className={`gallery-header__image gallery-header__image--lifestyles ${
              addClip && 'project-clippy'
            }`}></div>
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 1, ...transition } }}
            className='gallery-header__text2'>
            Lifestyles
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 2, ...transition } }}
            className='gallery-header__info'>
            <p className='gallery-header__info--p'>2021</p>
            <p className='gallery-header__info--p'>personal</p>
          </motion.div>
        </div>
      </header>
      <section data-scroll-section className='section-showcase'>
        <div
          data-scroll
          data-scroll-speed='1'
          className='section-showcase__img section-showcase__img--lifestyles'>
          &nbsp;
        </div>
        <div
          data-scroll
          data-scroll-speed='-1'
          className='section-showcase__img section-showcase__img--lifestyles'>
          &nbsp;
        </div>
        <div
          data-scroll
          data-scroll-speed='1'
          data-scroll-direction='horizontal'
          className='section-showcase__img section-showcase__img--lifestyles'>
          &nbsp;
        </div>
        <div
          data-scroll
          data-scroll-speed='2'
          className='section-showcase__img section-showcase__img--lifestyles'>
          &nbsp;
        </div>
        <div
          data-scroll
          data-scroll-speed='1'
          data-scroll-direction='horizontal'
          className='section-showcase__img section-showcase__img--lifestyles'>
          &nbsp;
        </div>
      </section>
      <footer data-scroll-section className='footer'>
        <p className='footer__p'>
          Ayo Akeredolu - is an observer. His sensitivity and natural intuition make him the perfect
          man to direct and capture life’s real characters.
        </p>
        <a href='https://lamide.netlify.app/'>
          <strong>Sotunde</strong>
        </a>
      </footer>
    </motion.div>
  )
}

export default lifestyle
