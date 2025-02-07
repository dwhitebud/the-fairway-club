import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import { FiCheck } from 'react-icons/fi'

const Membership = () => {
  const tiers = [
    {
      name: 'Golden Eagle',
      id: 'golden-eagle',
      price: '249',
      description: 'Premium membership with unlimited golf and exclusive perks.',
      features: [
        'Single Membership-Unlimited Golf Sessions',
        '24/7 Club Access',
        'Priority Booking',
        'Can hold 3 sessions on the Tee sheet at a time',
        'Can book 14 days in advance',
        'May Bring 3 Guest Golfers',
        'Custom merch gifts and member mixers',
        'Reserve The Fairway Club (all bays) for 2 hour private golf experience (once per year)',
      ],
    },
    {
      name: 'Silver Savings',
      id: 'silver-savings',
      price: '179',
      description: 'Perfect for off-peak golfers seeking great value.',
      features: [
        'Single Membership-Unlimited Golf Sessions',
        'Off Peak Hours Club Access',
        'M-F, 12am-4pm & 9pm-12am',
        'Sat/Sun, 12am-8am & 9pm-12am',
        'Standard Booking',
        'Can hold 1 session on the Tee sheet at a time',
        'Can book 7 days in advance',
        'May Bring 1 Guest Golfer',
      ],
    },
  ]

  return (
    <section className="py-24 bg-white" id="membership">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Membership Plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Choose the perfect membership for your golf journey
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:mt-20 lg:max-w-4xl lg:grid-cols-2 lg:gap-x-8"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    ${tier.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <FiCheck
                        className="h-6 w-5 flex-none text-primary"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://www.yourgolfbooking.com/venues/the-fairway-club/booking"
                className="mt-8 block rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Membership
