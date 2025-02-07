import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'

const FAQ = () => {
  const faqs = [
    {
      question: "How does the booking system work?",
      answer: "Golden Eagle members can book up to 14 days in advance and hold 3 sessions on the Tee sheet at a time. Silver Savings members can book up to 7 days in advance and hold 1 session at a time. All bookings can be made through our online booking portal."
    },
    {
      question: "What are the access hours?",
      answer: "Golden Eagle members enjoy 24/7 club access. Silver Savings members have access during off-peak hours: Monday-Friday 12am-4pm & 9pm-12am, and Saturday/Sunday 12am-8am & 9pm-12am."
    },
    {
      question: "Can I bring guests?",
      answer: "Yes! Golden Eagle members can bring up to 3 guest golfers per session, while Silver Savings members can bring 1 guest golfer. Guests must be accompanied by a member at all times."
    },
    {
      question: "What technology do you use?",
      answer: "We use TrackMan 4 simulator technology, which provides the most accurate ball and club tracking in the industry. This includes detailed analytics for every shot and realistic course play."
    },
    {
      question: "What courses can I play?",
      answer: "Our simulator features over 100 world-famous courses, including Pebble Beach, St Andrews, Augusta National, and many more. New courses are added regularly."
    },
    {
      question: "What exclusive perks come with membership?",
      answer: "Golden Eagle members receive custom merchandise gifts, access to member mixers, and can reserve the entire Fairway Club (all bays) for a 2-hour private golf experience once per year. Both membership tiers include unlimited golf sessions during their respective access hours."
    }
  ]

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Have a different question? Contact us and we'll be happy to help.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-16 max-w-2xl divide-y divide-gray-900/10"
        >
          <dl className="space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                  {faq.question}
                </dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
          <div className="mt-10 pt-8 text-center">
            <Link
              to="/contact"
              className="text-sm font-semibold leading-6 text-primary hover:text-primary-dark"
            >
              Still have questions? Contact us <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
