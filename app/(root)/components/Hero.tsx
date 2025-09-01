import CustomButton from "@/components/custom/CustomButton"
import { Rocket, Settings } from "lucide-react"
import Image from "next/image"
import Person from "@/public/person.png"
import Logo from '@/public/sacco.png'
import Phone1 from '@/public/phone-1.png'
import Phone2 from '@/public/phone-2.png'
const Hero = () => {
  return (
    <div className="bg-primary min-h-[100vh] px-4 md:px-16 pt-30 md:pt-40">
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-between my-16">
            <div className="flex-1">
            <span className="text-secondary">The Modern Sacco</span>
            <h1 className="text-white text-4xl md:text-5xl font-bold">Modernize Your SACCO <br /> with Digital Excellence</h1>
            </div>
            <div className="space-y-5 flex-1">
                <p className="text-white text-lg">Empower your savings and credit cooperative with a comprehensive digital platform. Manage members, process loans, track savings, and grow your SACCO with confidence.</p>
                <CustomButton title='Get started' href='/register' />
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-16">
            <div className="bg-white rounded-xl p-5 pb-0">
                <div className="flex gap-3 items-center">
                    <div className="size-11 bg-secondary rounded-full grid place-content-center">
                    <Rocket className='size-6 text-primary' />
                    </div>
                    <p className="text-primary font-bold text-2xl">Easy Registration</p>
                </div>
                <p className="text-sm mt-2 mb-5">Quick 5-minute setup with your SACCO details and customize your digital workspace</p>
                <div className="relative">
                    <div className="absolute top-1/3 bg-secondary/60 backdrop-blur rounded-xl p-4">
                    <div className="flex gap-2 items-center">
                        <Image src={Logo} alt='logo' width={20} />
                    <p className="font-semibold">Congratulations 🎉</p>
                    </div>
                    <p className="text-sm">Your SACCO has been created!</p>
                    </div>
                <Image src={Person} width={220} alt="person" className="mx-auto" />
                </div>
            </div>
            <div className="rounded-xl bg-secondary p-5 pb-0">
                <div className="flex gap-3 items-center">
                    <div className="size-11 bg-primary rounded-full grid place-content-center">
                    <Rocket className='size-6 text-white' />
                    </div>
                    <p className="text-primary font-bold text-2xl">Invite or Add Members</p>
                </div>
                <p className="text-sm mt-2 mb-5">Import existing member data or invite members to join your digital SACCO platform</p>
                <div className="relative">
                    <div className="absolute top-1/3 bg-white/60 backdrop-blur rounded-xl p-4">
                    <div className="flex gap-2 items-center">
                        <Image src={Logo} alt='logo' width={20} />
                    <p className="font-semibold">Congratulations 🎉</p>
                    </div>
                    <p className="text-sm">Your members have been imported!</p>
                    </div>
                <Image src={Person} width={220} alt="person" className="mx-auto" />
                </div>
            </div>
            <div className="rounded-xl relative bg-white p-5 pb-0 h-[432px] md:h-auto">
                <div className="flex gap-3 items-center">
                    <div className="size-11 bg-secondary rounded-full grid place-content-center">
                    <Settings className='size-6 text-primary'/>
                    </div>
                    <p className="text-primary font-bold text-2xl">Begin Operations</p>
                </div>
                <p className="text-sm mt-2 mb-5">Process savings, manage loans, and track all SACCO activities in one powerful dashboard</p>
                <Image src={Phone1} width={100} alt="dashboard look" className="absolute bottom-1/5 left-1/5 z-30" />
                <Image src={Phone2} width={200} alt="dashboard look" className="absolute bottom-0 left-1/2 -translate-x-1/2" />
            </div>
        </div>
    </div>
  )
}

export default Hero