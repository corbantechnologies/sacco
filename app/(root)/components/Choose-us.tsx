import { ChartNoAxesCombined, ClockPlus, Shield, Smile, TrendingDown, TrendingUp } from "lucide-react"

const ChooseUs = () => {
    const benefits = [
        {
          icon: ClockPlus,
          title: "Save 10+ Hours Weekly",
          description: "Automate loan calculations, interest computations, and financial reporting. Focus on strategy instead of spreadsheets.",
          href: "#"
        },
        {
          icon: Smile,
          title: "Increased member satisfaction",
          description: "Members check balances, apply for loans, and track payments anytime. Fewer complaints, happier members.",
          href: "#"
        },
        {
          icon: TrendingDown,
          title: "Reduce operating costs",
          description: "Eliminate paper forms, reduce data entry errors, and streamline processes. Cut operational expenses significantly.",
          href: "#"
        },
        {
          icon: TrendingUp,
          title: "Improved Loan Recovery",
          description: "Automated SMS reminders, payment tracking, and defaulter management. Recover loans faster with less effort.",
          href: "#"
        },
        {
          icon: Shield,
          title: "Ensure Compliance",
          description: "Generate regulatory reports instantly with built-in audit trails. Stay compliant without the stress.",
          href: "#"
        },
        {
          icon: ChartNoAxesCombined,
          title: "Scale Confidently",
          description: "Handle 500+ members with the same staff. Grow your SACCO without operational headaches.",
          href: "#"
        },
      ]
  return (
    <div className="px-4 py-16 md:p-16 bg-primary-foreground">
        <p className="text-primary font-bold">WHY CHOOSE US</p>
        <div className="flex flex-col md:flex-row justify-between">
        <h3 className="flex-1 text-primary text-4xl font-bold my-2">Why SACCOs Choose Us</h3>
        <p className="flex-1 text-primary">Transform your SACCO operations and give your members the modern experience they deserve, while reducing your administrative workload and ensuring regulatory compliance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon
                    return (
                      <div key={index} className="bg-white flex flex-col md:flex-row md:items-center gap-5 rounded-xl p-6">
                      <div className="size-14 flex-shrink-0  bg-secondary rounded-full grid place-content-center">
                      <IconComponent className="size-8 text-primary" />
                      </div>
                      <div>
                          <p className="leading-none text-primary font-bold text-xl">
                          {benefit.title}
                          </p>
                          <p className="pt-2 text-primary">{benefit.description}</p>
                      </div>
                    </div>
                    )
                  })}
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 mt-16">
            <div className="flex items-center gap-2">
                <span className="text-primary text-4xl font-bold">10+</span>
                <span className="text-primary font-semibold">SACCOs <br className="hidden md:block" /> Trust Us</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-primary text-4xl font-bold">200+</span>
                <span className="text-primary font-semibold">Active <br className="hidden md:block" /> Members</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-primary text-4xl font-bold">100k+</span>
                <span className="text-primary font-semibold">Processed <br className="hidden md:block" /> Monthly</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-primary text-4xl font-bold">99.9%+</span>
                <span className="text-primary font-semibold">Uptime <br className="hidden md:block" /> Guarantee</span>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs