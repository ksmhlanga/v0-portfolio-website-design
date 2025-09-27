import { Card } from "@/components/ui/card"
import { Wrench, Zap, BarChart3, Shield, Users, Award } from "lucide-react"

const skills = [
  {
    icon: Wrench,
    title: "Vehicle Maintenance & Repair",
    description:
      "Extensive experience in routine servicing, maintaining, and repairing vehicles to meet strict safety and operational standards.",
  },
  {
    icon: Zap,
    title: "Electric Vehicle Technology",
    description:
      "Certified in Electric Vehicle Technology with expertise in heavy electric vehicle systems and emerging automotive technologies.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Skilled in Microsoft Excel and Power BI for data-driven decision making and performance optimization.",
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    description: "Strong understanding of health and safety requirements with experience in PSV and MOT preparation.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Proven ability to mentor apprentices and work collaboratively in cross-functional teams.",
  },
  {
    icon: Award,
    title: "Professional Certifications",
    description: "Multiple certifications including CPR/AED, First Aid, and Workplace Safety and Health.",
  },
]

const certifications = [
  "Certificate in Electric Vehicle Technology - Heavy Electric Vehicle Systems",
  "Diploma in Electric Vehicle Technology",
  "Diploma in Mechatronics",
  "Technicians for Africa Training - Caterpillar University",
  "National Certificate in Diesel Plant Fitting",
  "CPR, AED and First Aid Certified",
  "Diploma in Workplace Safety and Health",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl text-pretty">
              A skilled and highly motivated Mechanic with over 5 years of relevant workshop experience in the
              maintenance and repair of diverse fleets of commercial vehicles, including ambulances and heavy-duty
              vehicles. I am organised and methodical, with a professional approach and a team-focused attitude,
              prepared to contribute effectively to a forward-thinking organisation.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:bg-accent/50 transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Certifications & Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{cert}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-border text-center">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-primary">10%</p>
                  <p className="text-sm text-muted-foreground">
                    Improvement in fuel efficiency through scheduled maintenance
                  </p>
                </div>
              </Card>
              <Card className="p-6 bg-card border-border text-center">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-primary">15%</p>
                  <p className="text-sm text-muted-foreground">
                    Reduction in repeat issues through enhanced parts checking
                  </p>
                </div>
              </Card>
              <Card className="p-6 bg-card border-border text-center">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground">
                    Years of professional experience across multiple vehicle types
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
