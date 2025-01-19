import * as React from "react"
import Layout from "../components/Layout"
import Features from "../components/Features"
import Technology from "../components/Technology"
import Membership from "../components/Membership"
import FAQ from "../components/FAQ"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative">
          <StaticImage
            src="../images/hero-background.jpg"
            alt="Premium golf simulator bay at The Fairway Club"
            className="h-[90vh] w-full object-cover"
            placeholder="blurred"
            layout="fullWidth"
            quality={100}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl [text-shadow:_2px_2px_10px_rgb(0_0_0_/_90%)]"
              >
                A Better Way
                <br />
                To Practice
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-lg leading-8 text-white drop-shadow-lg [text-shadow:_1px_1px_8px_rgb(0_0_0_/_90%)]"
              >
                Premium indoor golf simulation in a state-of-the-art facility
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 flex items-center justify-center gap-x-6"
              >
                <a
                  href="https://www.yourgolfbooking.com/venues/the-fairway-club/booking"
                  className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-gray-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
                <Link
                  to="#membership"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  View Memberships <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Features />

      {/* Technology Section */}
      <Technology />

      {/* Membership Section */}
      <Membership />

      {/* FAQ Section */}
      <FAQ />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>The Fairway Club - Premium Golf Simulator Experience</title>
