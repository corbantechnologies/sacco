import CustomButton from "@/components/custom/CustomButton"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Faq = () => {
  return (
    <div className="bg-white px-4 py-16 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-5">
         <div>
            <p className="text-primary font-bold">FAQ</p>
            <h3 className="text-primary text-4xl font-bold my-2">Frequently Asked <br /> Questions</h3>
            <p className="text-primary mb-8">Get answers to common questions about implementing our app in your SACCO. Still have questions? Contact our team for personalized support.</p>
            <CustomButton title='Contact Us' href='#' />
        </div>
        <div className="col-span-2 mt-8 md:mt-0">
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className="bg-primary-foreground px-4 rounded-xl mb-2">
        <AccordionTrigger className="font-semibold text-primary text-lg">How long does implementation take?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance text-base">
          <p>
          Most SACCOs are fully operational within 2-3 weeks. This includes data migration, staff training, and member onboarding.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="bg-primary-foreground px-4 rounded-xl mb-2">
        <AccordionTrigger className="font-semibold text-primary text-lg">Is my SACCO&apos;s data secure?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance text-base">
          <p>
          Yes, we use bank-level security with 256-bit encryption, regular backups, and comply with international data protection standards.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="bg-primary-foreground px-4 rounded-xl mb-2">
        <AccordionTrigger className="font-semibold text-primary text-lg">Can I import my existing member data?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance text-base">
          <p>
          Absolutely. We support data import from Excel, CSV, and most common SACCO management systems. Our team assists with the migration.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="bg-primary-foreground px-4 rounded-xl mb-2">
        <AccordionTrigger className="font-semibold text-primary text-lg">Do you support mobile money?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance text-base">
          <p>
          We integrate with major mobile money providers including M-Pesa, Airtel Money, and already making plans to integrate banks.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="bg-primary-foreground px-4 rounded-xl">
        <AccordionTrigger className="font-semibold text-primary text-lg">Can members use this on their phones?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance text-base">
          <p>
          Yes, our platform is fully mobile-responsive and soon we&apos;ll also offer native mobile apps for iOS and Android.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
        </div>
    </div>
  )
}

export default Faq