import Image from 'next/image'
import Logo from '@/public/sacco.png'

const AccountVerification = () => {
  return (
    <div className='flex flex-col items-center h-screen text-primary px-8'>
        <div className="flex-shrink-0 pt-12">
            <Image src={Logo} alt='logo' width={60} className='animate-bounce' />
          </div>
          <h2 className='text-2xl md:text-3xl font-bold mt-6'>Thank you for registering!</h2>
          <p className='text-center md:text-lg mt-4 max-w-lg mx-auto'>We&apos;ve successfully received your registration. To ensure the security of your account and our community, we need to verify your details.</p>
          <p className='text-center md:text-lg mt-4 max-w-lg mx-auto'>
          We will send you an email notification as soon as your account has been approved and is ready to use. Make sure to check your inbox, and don&apos;t forget to check your spam or junk folder, just in case.
          </p>
    </div>
  )
}

export default AccountVerification