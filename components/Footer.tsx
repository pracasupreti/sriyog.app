import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-10">
        <div className="flex flex-wrap justify-between gap-y-8">
          {/* Column 1 */}
          <div className="w-1/2 md:w-1/3 lg:w-1/6 flex flex-col space-y-2">
            <Link href="/about">About Us</Link>
            <Link href="/how">How It Works</Link>
            <Link href="/team">Team</Link>
            <Link href="/press" rel="noopener noreferrer">Press</Link>
            <Link href="/career" className="inline-flex items-center">
              Career <span className="text-red-500 ml-1">We're Hiring</span>
            </Link>
          </div>

          {/* Column 2 */}
          <div className="w-1/2 md:w-1/3 lg:w-1/6 flex flex-col space-y-2">
            <Link href="/vmgo">Mission / Vision</Link>
            <Link href="/video">Video</Link>
            <Link href="/faq">FAQ/ KnowBase</Link>
            <Link href="/welcome">Welcome</Link>
            <Link href="/media">Media Coverage</Link>
          </div>

          {/* Column 3 */}
          <div className="w-1/2 md:w-1/3 lg:w-1/6 flex flex-col space-y-2">
            <Link href="/feedback">Feedback</Link>
            <Link href="/timeline">Timeline</Link>
            <Link href="/features">Feature</Link>
            <Link href="/services">Services</Link>
            <Link href="/city">Cities</Link>
          </div>

          {/* Column 4 */}
          <div className="w-1/2 md:w-1/3 lg:w-1/6 flex flex-col space-y-2">
            <Link href="https://sriyog.com/join" target="_blank" rel="noopener noreferrer">
              <Image src="/images/join-now.png" alt="Join Now" width={64} height={23} />
            </Link>
            <Link href="https://mail.yandex.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/mail.svg" alt="Access Email" width={45} height={24} />
            </Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/tos">Terms of Services</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-2/3 lg:w-1/4 bg-white shadow-md p-4">
            <div className="flex flex-col">
              <Image src="/images/logo.svg" alt="Footer Logo" width={250} height={150} className="mb-4" />

              <ul className="text-sm space-y-2">
                <li>
                  <i className="fas fa-map-marker-alt"></i> Rem.Work, Kamalpokhari, Kathmandu, Nepal
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i> +977-9852025735
                  <br />
                  <span className="text-red-600 text-xs">Calling Time : 10 AM to 5 PM NPT</span>
                </li>
                <li>
                  <Link href="mailto:info@sriyog.com">
                    <i className="fas fa-envelope-open"></i> info@sriyog.com
                  </Link>
                </li>
                <li className="flex space-x-2 items-center">
                  <Image src="/images/footer/telegram.svg" alt="Telegram" width={20} height={20} />
                  <Image src="/images/footer/viber.svg" alt="Viber" width={20} height={20} />
                  <Image src="/images/footer/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
                  <span>+977-9852024365</span>
                </li>
              </ul>

              <div className="flex items-center mt-4">
                <Image src="/images/footer/missed-call.svg" alt="Missed Call" width={25} height={25} />
                <Link href="tel:+9779852024365" className="ml-2 font-bold text-gray-800 text-lg">
                  +977-98520<span className="text-xl">24-365</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        
      </div>

    </footer>
  )
}

export default Footer
