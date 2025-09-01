import Link from 'next/link'
import Logo from '@/public/sacco.png'
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Heart } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-primary px-4 py-16 md:p-16 text-white">
      <div className="max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1">
            <div className='bg-white size-16 grid place-content-center rounded-xl'>
            <Image src={Logo} alt='logo' width={50} />            
            </div>
            <p className="my-6 leading-relaxed">
              Empowering savings and credit cooperatives with comprehensive digital solutions for member management, loan processing, and financial growth.
            </p>
            
            <div className="flex items-center space-x-2">
                <p>Follow us:</p>
              <Link href="#" className="size-9 rounded-full grid place-content-center bg-white text-primary">
                <Facebook className="size-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="size-9 rounded-full grid place-content-center bg-white text-primary">
                <Twitter className="size-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="size-9 rounded-full grid place-content-center bg-white text-primary">
                <Linkedin className="size-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="size-9 rounded-full grid place-content-center bg-white text-primary">
                <Instagram className="size-4" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white">
                  Features Overview
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white">
                  Member Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white">
                  Financial Reporting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white">
                  Payment Integration
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Us</h3>
            
            <div className="mb-4">
              <div className="flex items-start space-x-3 mb-2">
                <MapPin className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p>Nairobi, Kenya</p>
                  <p>P.O. Box 12345-00100</p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center space-x-3 mb-1">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <div>
                  <Link href="tel:+254700123456">
                    +254 740 964 423
                  </Link>
                </div>
              </div>
              <div className="ml-7">
                <Link href="tel:+254701987654">
                  +254 710 507 872
                </Link>
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <div className="flex items-center space-x-3 mb-1">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <div>
                  <Link href="mailto:corbantechnologies@gmail.com" className="hover:text-blue-400 transition-colors duration-200">
                    corbantechnologies@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-400 border-dashed mt-16">
        <div className="max-w-7xl mt-16">
          <div className="flex flex-col md:flex-row gap-5 justify-between">
            <div className='flex items-center gap-1'>
            <p>Proudly Owned By</p>
            <a href='https://www.corbantechnologies.org/' target="_blank" className='text-secondary'>Corban Technologies</a>
            </div>
            <div className='flex flex-col md:flex-row gap-5 md:gap-0 md:items-center'>
            <p>© 2025. All rights reserved.</p>
            <p className='flex items-center gap-1'>Made with <Heart fill='#9edd05' className='text-secondary size-5' /> for SACCOs in Africa</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer