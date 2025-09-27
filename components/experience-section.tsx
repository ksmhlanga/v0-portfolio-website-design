import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"

const experiences = [
  {
    company: "J & K Coaches Limited",
    position: "Vehicle Mechanical Engineer (PSV Mechanic)",
    location: "Moneymore, Northern Ireland",
    period: "Oct 2024 – Present",
    current: true,
    description: "Participates in the daily maintenance and repair of a fleet of buses, ambulances and taxis.",
    achievements: [
      "Conducted scheduled maintenance services, resulting in a 5% improvement in fuel efficiency",
      "Diagnosed and repaired faults, achieving a 10% reduction in repeat issues",
      "Utilised computer-assisted testing to improve diagnostic accuracy by 5%",
      "Conduct thorough inspections ensuring vehicles are compliant with PSV and MOT test standards",
      "Providing mentorship and support to apprentices",
    ],
    technologies: [
      "Volvo",
      "Temsa HD",
      "Neoplan",
      "Mercedes Benz",
      "Scania",
      "Peugeot",
      "Renault",
      "Audi",
      "Volkswagen",
      "Skoda",
    ],
  },
  {
    company: "Walter Watson Limited",
    position: "HGV Mechanic",
    location: "Castlewellan, Northern Ireland",
    period: "Jul 2023 – Sept 2024",
    current: false,
    description: "Participated daily maintenance and repair of a fleet of trucks, trailers, and plant equipment.",
    achievements: [
      "Conducted routine maintenance services, resulting in a 5% improvement in fuel efficiency",
      "Diagnosed and repaired faults, achieving a 10% reduction in repeat issues",
      "Utilised computer-assisted testing to improve diagnostic accuracy by 5%",
      "Played a role in MOT/PSV preparation",
    ],
    technologies: ["Volvo FM12", "FH12", "DAF LF45", "Dennison", "Farlow", "Slemish", "Toyota", "Hyster", "CombiLift"],
  },
  {
    company: "CeeFast Logistics",
    position: "PSV/HGV Mechanic",
    location: "Harare, Zimbabwe",
    period: "Mar 2019 – Jun 2023",
    current: false,
    description: "Active in the daily maintenance and repair of a fleet of buses, trucks, and trailers.",
    achievements: [
      "Conducted scheduled maintenance services, resulting in a 10% improvement in fuel efficiency",
      "Diagnosed and repaired faults, achieving a 15% reduction in repeat issues",
      "Utilised computer-assisted testing to improve diagnostic accuracy by 10%",
      "Skillfully dismantled and removed engine assemblies, transmissions, steering mechanisms",
    ],
    technologies: [
      "DAF CF85",
      "CF95",
      "Volvo FM12",
      "FH12",
      "Scania P370",
      "P580",
      "Toyota D4D",
      "Nissan Patrol",
      "Ford Ranger",
    ],
  },
  {
    company: "Allied Forklifts",
    position: "Assistant Mechanic",
    location: "Harare, Zimbabwe",
    period: "Mar 2018 – Feb 2019",
    current: false,
    description:
      "Conducted routine, emergency, and preventive maintenance on forklifts, diesel and petrol cars, and trucks.",
    achievements: [
      "Interpreted manufacturers' technical manuals to ensure adherence to industry standards",
      "Performed safety inspections on forklifts, resulting in a 5% reduction in workplace incidents",
      "Maintained high standards of performance and safety across diverse vehicle types",
    ],
    technologies: ["Toyota", "Hyster", "DAF CF65", "CF85", "Nissan UD60", "UD70", "Ford", "Mazda", "Honda", "BMW"],
  },
  {
    company: "Super Technologies",
    position: "Information Technology Technical Support",
    location: "Harare, Zimbabwe",
    period: "Aug 2010 – Feb 2018",
    current: false,
    description: "Provided exceptional technical support by efficiently resolving IT issues for end-users.",
    achievements: [
      "Diagnosed and resolved technical issues with computer hardware and software",
      "Proactively maintained and upgraded IT infrastructure",
      "Installed and commissioned new IT equipment including workstations and servers",
      "Conducted on-site support visits to customer locations",
      "Utilised remote support tools for efficient troubleshooting",
    ],
    technologies: ["Windows", "Network Systems", "Hardware", "Software", "Remote Support Tools"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Work Experience</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl text-pretty">
              Over 5 years of progressive experience in vehicle maintenance and repair, with a proven track record of
              improving efficiency and reducing downtime across diverse fleet operations.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:bg-accent/30 transition-colors">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                        {exp.current && (
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground leading-relaxed">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                      Technologies & Equipment
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
