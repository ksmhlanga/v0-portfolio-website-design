import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">Shepherd K. Mhlanga</h1>
            <p className="text-xl lg:text-2xl text-primary font-medium">
              PSV/HGV Mechanic & Electric Vehicle Specialist
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              I maintain and repair commercial vehicle fleets with precision and expertise. Specialising in buses,
              trucks, ambulances, and emerging electric vehicle technology, I ensure optimal performance, safety, and
              reliability across diverse transportation systems.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-foreground">
              Currently, I'm a <span className="text-primary font-medium">Vehicle Mechanical Engineer</span> at{" "}
              <span className="text-primary font-medium">J&K Coaches Limited</span>, specialising in preventive
              maintenance and diagnostic excellence. I contribute to fleet operations ensuring vehicles meet PSV and MOT
              standards while mentoring the next generation of mechanics.
            </p>

            <p className="text-muted-foreground">
              In my career, I've improved fuel efficiency by up to 10%, reduced repeat faults by 15%, and enhanced
              diagnostic accuracy through computer-assisted testing. I combine hands-on technical expertise with growing
              skills in data analytics and electric vehicle technology.
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+447721401590" className="flex items-center gap-2">
                <Phone size={16} />
                Call Me
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/ksmhlanga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a href="mailto:ksmhlanga@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/profile.png"
                  alt="Shepherd K. Mhlanga - Professional PSV/HGV Mechanic"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
