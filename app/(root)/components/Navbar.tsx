'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from '@/public/sacco.png'
import { Menu, X, ChevronDown, Users, PiggyBank, CreditCard, BarChart3, Smartphone, MessageSquare } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsMegaMenuOpen(false)
  }

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen)
  }

  const features = [
    {
      icon: Users,
      title: "Member Management",
      description: "Complete member lifecycle management with digital KYC and profile tracking",
      href: "#"
    },
    {
      icon: PiggyBank,
      title: "Savings Management",
      description: "Multiple savings products with automated interest calculations and goals",
      href: "#"
    },
    {
      icon: CreditCard,
      title: "Loan Management",
      description: "End-to-end loan processing from application to repayment tracking",
      href: "#"
    },
    {
      icon: BarChart3,
      title: "Financial Reporting",
      description: "Comprehensive analytics and regulatory compliance reporting",
      href: "#"
    },
    {
      icon: Smartphone,
      title: "Payment Integration",
      description: "Mobile money, bank transfers, and automated payment processing",
      href: "#"
    },
    {
      icon: MessageSquare,
      title: "Communication Tools",
      description: "SMS notifications, email campaigns, and member messaging",
      href: "#"
    }
  ]

  return (
    <nav className="bg-white shadow fixed left-0 md:left-4 right-0 md:right-4 z-50 top-0 md:top-4 py-2 md:py-4 md:rounded-xl">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src={Logo} alt='logo' width={60} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Features Mega Menu */}
              <div className="relative">
                <button
                  onClick={toggleMegaMenu}
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  className="hover:text-secondary px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
                >
                  Features
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <Link
                href="/pricing"
                className="hover:text-secondary px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Pricing
              </Link>
              
              <Link
                href="/about"
                className="hover:text-secondary px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>
              
              <Link
                href="/contact"
                className="hover:text-secondary px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="hover:text-secondary px-4 py-2 text-sm font-medium transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-secondary px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200 "
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
          <Link
              href="/register"
              className="bg-secondary px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200 "
            >
              Get Started
            </Link>
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:ring-2 focus:ring-secondary p-2 rounded-md"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu - Desktop */}
      {isMegaMenuOpen && (
        <div 
          className="hidden md:block absolute left-0 w-full bg-white rounded-b-4xl shadow-md z-40"
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-12 gap-8">
              {/* Features Grid */}
              <div className="col-span-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Everything you need to manage your SACCO
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon
                    return (
                      <Link
                        key={index}
                        href={feature.href}
                        className="group flex items-start p-4 rounded-lg hover:bg-primary-foreground transition-colors duration-200"
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200">
                          <IconComponent className="h-5 w-5 text-gray-600" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-semibold">
                            {feature.title}
                          </h4>
                          <p className="mt-1 text-sm text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Dashboard Preview */}
              <div className="col-span-4">
                <div className="bg-primary-foreground rounded-xl p-6 h-full">
                  <h4 className="text font-semibold mb-4">
                    See SaccoConnect in Action
                  </h4>
                  
                  {/* Mock Dashboard Preview */}
                  <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="text-sm font-medium">Dashboard Overview</h5>
                      <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                    </div>
                    
                    {/* Mock stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-primary-foreground p-2 rounded">
                        <div className="text-xs">Total Members</div>
                        <div className="text-sm font-bold">2,847</div>
                      </div>
                      <div className="bg-primary-foreground p-2 rounded">
                        <div className="text-xs">Total Savings</div>
                        <div className="text-sm font-bold">$1.2M</div>
                      </div>
                    </div>
                    
                    {/* Mock chart */}
                    <div className="h-16 bg-primary-foreground rounded flex items-end justify-center">
                      <div className="text-xs">Analytics Chart</div>
                    </div>
                  </div>

                  <Link
                    href="/demo"
                    className="inline-flex items-center text-sm font-medium"
                    onClick={() => setIsMegaMenuOpen(false)}
                  >
                    View Full Demo
                    <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white max-h-[calc(100vh-5rem)] overflow-y-auto shadow-lg z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile Features */}
            <div className="space-y-1">
              <div className="px-3 py-2 text-sm font-medium border-b border-gray-100 mb-2">
                Features
              </div>
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Link
                    key={index}
                    href={feature.href}
                    className="flex items-start px-3 py-3 hover:bg-primary-foreground rounded-md transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      <IconComponent className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">{feature.title}</div>
                      <div className="text-xs text-gray-600 mt-1">{feature.description}</div>
                    </div>
                  </Link>
                )
              })}
            </div>

            <Link
              href="/pricing"
              className="hover:text-secondary block px-3 py-2 text-sm font-medium transition-colors duration-200"
              onClick={closeMenu}
            >
              Pricing
            </Link>
            
            <Link
              href="/about"
              className="hover:text-secondary block px-3 py-2 text-sm font-medium transition-colors duration-200"
              onClick={closeMenu}
            >
              About
            </Link>
            
            <Link
              href="/contact"
              className="hover:text-secondary block px-3 py-2 text-sm font-medium transition-colors duration-200"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile CTA Buttons */}
          <div className="px-2 pb-3 border-t border-gray-200 pt-3">
            <Link
              href="/login"
              className="text-gray-700 hover:text-secondary block px-3 py-2 text-sm font-medium transition-colors duration-200"
              onClick={closeMenu}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-secondary block px-3 py-2 mt-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all duration-200 text-center"
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}

      {/* Overlay */}
      {(isMenuOpen || isMegaMenuOpen) && (
        <div 
          className="fixed inset-0 z-30"
          onClick={closeMenu}
        />
      )}
    </nav>
  )
}

export default Navbar