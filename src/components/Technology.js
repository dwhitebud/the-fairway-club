import React from 'react'
import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

const Technology = () => {
  const features = [
    {
      title: "TrackMan Precision",
      description: "Experience the most accurate ball and club tracking technology in the industry, used by tour professionals worldwide."
    },
    {
      title: "Real-Time Analytics",
      description: "Get instant feedback on every shot with detailed metrics including ball speed, spin rate, launch angle, and more."
    },
    {
      title: "Virtual Courses",
      description: "Play on meticulously recreated versions of the world's most famous golf courses in stunning 4K resolution."
    },
    {
      title: "Practice Modes",
      description: "Choose from various practice modes including driving range, approach practice, and putting challenges."
    }
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:pr-8 lg:pt-4"
          >
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">Advanced Technology</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Professional-Grade Simulator
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our TrackMan simulator provides tour-level accuracy and analysis for every shot, helping you improve your game with precise feedback and realistic play.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-9"
                  >
                    <dt className="inline font-semibold text-gray-900">
                      <div className="absolute left-1 top-1 h-5 w-5 text-primary">
                        <span className="text-primary font-bold">{index + 1}.</span>
                      </div>
                      {feature.title}
                    </dt>
                    <dd className="inline ml-1">. {feature.description}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              <StaticImage
                src="../images/trackman-screen.jpg"
                alt="TrackMan golf simulator screen showing detailed shot analysis"
                className="w-full aspect-[3/4] rounded-xl shadow-xl ring-1 ring-gray-400/10"
                imgClassName="object-cover"
                placeholder="blurred"
                quality={100}
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Technology
