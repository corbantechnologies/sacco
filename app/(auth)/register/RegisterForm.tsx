'use client'
import MultiStepForm from './MultiStepForm';
import Image from 'next/image';

export default function RegisterForm() {
  return (
    <div className="min-h-screen flex w-screen">
      {/* Image (hidden on mobile) */}
      <div className="hidden lg:flex md:w-1/2 relative">
        <div className="absolute inset-0 bg-primary/70"></div>
        <Image 
          src='/signup.jpg'
          alt="Professional financial planning team working together" 
          className="w-full h-full object-cover"
          width={50}
          height={50}
        />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl font-bold mb-6">
              Build Your Financial Future
            </h1>
            <p className="text-xl opacity-90 max-w-md">
              Join thousands of members who trust our SACCO for secure savings, 
              affordable loans, and financial growth opportunities.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm opacity-75">Active Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold">$50M+</div>
                <div className="text-sm opacity-75">Total Savings</div>
              </div>
              <div>
                <div className="text-2xl font-bold">5.2%</div>
                <div className="text-sm opacity-75">Annual Returns</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-md lg:max-w-auto">
          {/* Mobile header */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Join Our SACCO
            </h1>
            <p className="text-muted-foreground">
              Start your journey to financial freedom
            </p>
          </div>
          
          <MultiStepForm />
          
          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{' '}
              <a href="/login" className="text-primary hover:underline font-medium">
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}