import React from 'react'
import { motion } from 'framer-motion'
import { FiMonitor, FiMap, FiAward, FiClock } from 'react-icons/fi'

const Features = () => {
  const features = [
    {
      name: "TrackMan Technology",
      description: "Experience the most advanced golf simulator technology with TrackMan's precision ball tracking and analytics.",
      icon: FiMonitor,
    },
    {
      name: "Premium Course Selection",
      description: "Play on over 100 world-renowned golf courses, from Pebble Beach to St Andrews.",
      icon: FiMap,
    },
    {
      name: "Private Bay Experience",
      description: "Enjoy your practice or play session in a completely private, luxurious setting.",
      icon: FiAward,
    },
    {
      name: "24/7 Member Access",
      description: "Practice on your schedule with unlimited access for members.",
      icon: FiClock,
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Premium Golf Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            State-of-the-art technology meets luxury amenities
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Features
