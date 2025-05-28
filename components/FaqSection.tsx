'use client'
import { useState } from 'react'

const faqData = [
  {
    question: 'How much is the profile verification or membership fee?',
    answer:
      'To verify the profile, it costs Rs 1,999 including discount for one year at the rate of 200 per month.',
  },
  {
    question: 'What are the benefits of paying a membership fee?',
    answer:
      'By paying the membership fee, an email and your profile will be created on our app within the city you work in, and your profile will be posted on our Facebook page from time to time and you will become a member on our app.',
  },
  {
    question: 'Where is the office?',
    answer: 'Our office is in Kamalpokhari, Kathmandu, Nepal.',
  },
  {
    question: 'How to pay the membership fee?',
    answer:
      'Yearly membership fee is NPR 1,999. IME Pay is our Payment Partner. You need to pay from it. You have to search SRIYOG Membership and pay the amount for yourself or for others. Consumer ID is the person who needs membership.',
  },
  {
    question: 'How can I give some advice or suggestions for the SRIYOG app?',
    answer:
      'SRIYOG app can be reviewed from Google Play Store. You need to download the app first and express your views.',
  },
  {
    question: 'How to register details in SRIYOG?',
    answer: `One has to download the app from the mobile phone and register the details by spending SRIYOG on Google Play Store.

To do this on a computer or laptop, using Chrome, Firefox, Opera, Edge, Brave or any other web browser, go to www.sriyog.com website and click on the join button on the top right side or go to www.sriyog.com/join and fill in the details.`,
  },
  {
    question: 'How to get a membership in SRIYOG?',
    answer:
      'The system is very easy, professional can join from website as well as mobile app by submitting full name, phone, city, profession etc.',
  },
  {
    question: 'I already registered in SRIYOG but still not getting job, why?',
    answer:
      'Unverified professionals have lesser chances to get opportunity. Professionals need to get their profile verification to get listed in our platform.',
  },
  {
    question: 'How can I get a job through SRIYOG?',
    answer:
      'SRIYOG is gig economy based professional marketplace. We make digital profile of professionals based in their location and their professions to showcase their skills.',
  },
  {
    question: 'What to do with SRIYOG?',
    answer:
      'SRIYOG allows you to search for verified experts and services, connect directly with certified professionals, and create a digital profile that highlights your talents and experience. Collaborate with professionals and join us as members using IME Pay to have access to unique services.',
  },
]

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <section className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-10">
      <div className="border border-gray-200 rounded-md divide-y divide-gray-200 bg-white">
        {faqData.map((item, index) => (
          <div key={index}>
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-gray-800 hover:bg-gray-50 transition"
              onClick={() => toggleAccordion(index)}
            >
              <span className='cursor-pointer hover:text-[#8b1414]'>{item.question}</span>
              <span className="text-xl font-bold cursor-pointer">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-700 whitespace-pre-line">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
