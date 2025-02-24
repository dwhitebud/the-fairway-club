import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'

const FAQ = () => {
  const faqs = [
    {
      question: "How does the booking system work?",
      answer: "Platinum Albatross members can book up to 30 days in advance and hold 5 sessions on the Tee sheet. Golden Eagle members can book up to 14 days in advance and hold 3 sessions. Silver Savings members can book up to 7 days in advance and hold 1 session at a time. All bookings can be made through our online booking portal."
    },
    {
      question: "What are the access hours?",
      answer: "Platinum Albatross and Golden Eagle members enjoy 24/7 club access. Silver Savings members have access during off-peak hours: Monday-Friday 12am-4pm & 9pm-12am, and Saturday/Sunday 12am-8am & 9pm-12am."
    },
    {
      question: "Can I bring guests?",
      answer: "Yes! Both Platinum Albatross and Golden Eagle members can bring up to 3 guest golfers per session, while Silver Savings members can bring 1 guest golfer. Guests must be accompanied by a member at all times."
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
      answer: "Platinum Albatross members receive all Golden Eagle benefits plus Primo Golf and PXG partnerships with exclusive discounts. They can also reserve the entire facility for 3 hours once per year. Golden Eagle members get custom merchandise gifts, member mixers, and a 2-hour facility reservation annually. Both tiers include unlimited golf sessions with 24/7 access."
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
            <p className="text-sm font-semibold leading-6 text-primary">
              Have more questions? We're here to help!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
