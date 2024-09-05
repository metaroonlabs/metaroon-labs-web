import CareersHero from "@/components/careers/CareersHero"
import { Contact } from "@/sections/Contact"
import { Footer } from "@/sections/Footer"
import CareersBody from "@/components/careers/CareersBody.tsx";

function Careers() {
  return (
    <>
        <div>
            <CareersHero />
            <CareersBody />
            <Contact />
            <Footer />
        </div>
    </>

  )
}

export default Careers
