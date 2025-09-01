import CustomButton from '@/components/custom/CustomButton'
import { Users, PiggyBank, BarChart3, Smartphone } from 'lucide-react'
import Link from 'next/link'

const Features = () => {
    const features = [
        {
          icon: Users,
          title: "Member Management",
          description: "Register members digitally, manage KYC documents, track member contributions, and maintain comprehensive member profiles with full audit trails.",
          href: "#"
        },
        {
          icon: PiggyBank,
          title: "Savings Management",
          description: "Support multiple savings products, automate interest calculations, set savings goals, and provide members with real-time balance updates.",
          href: "#"
        },
        {
          icon: BarChart3,
          title: "Financial Reporting",
          description: "Generate balance sheets, P&L statements, regulatory reports, and custom analytics. Make data-driven decisions with real-time insights.",
          href: "#"
        },
        {
          icon: Smartphone,
          title: "Payment Integration",
          description: "Integrate with mobile money (M-Pesa, Airtel Money), bank transfers, and cash deposits. Automatic payment notifications and reconciliation.",
          href: "#"
        },
      ]
  return (
    <div className="bg-white px-4 py-16 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
            <p className="text-primary font-bold">KEY FEATURES</p>
            <h3 className="text-primary text-4xl font-bold my-2">Our Primary <br /> Features</h3>
            <p className="text-primary mb-8">We provide a robust suite of features that makes management easier and ensures your SACCO thrives.</p>
            <CustomButton title='Get started' href='#' />
        </div>
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 md:mt-0">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon
                    return (
                      <Link
                        key={index}
                        href={feature.href}
                        className="group p-5 rounded-xl bg-primary-foreground transition-colors duration-200"
                      >
                        <div className="bg-secondary size-14 mb-5 rounded-full grid place-content-center">
                          <IconComponent className="size-8 text-primary" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-primary text-xl font-bold">
                            {feature.title}
                          </h4>
                          <p className="mt-1 text-primary">
                            {feature.description}
                          </p>
                        </div>
                      </Link>
                    )
                  })}
        </div>
    </div>
  )
}

export default Features