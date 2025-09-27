import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Wrench, Zap, BarChart3, Shield, Users, Award } from "lucide-react"

const projects = [
  {
    title: "Fleet Efficiency Optimization",
    category: "Vehicle Maintenance",
    description:
      "Implemented comprehensive preventive maintenance program resulting in 10% fuel efficiency improvement across diverse commercial vehicle fleet.",
    image: "/commercial-vehicle-fleet-maintenance-workshop.jpg",
    technologies: ["Preventive Maintenance", "Diagnostic Tools", "Fleet Management", "Performance Analytics"],
    achievements: ["10% fuel efficiency improvement", "15% reduction in repeat issues", "Enhanced diagnostic accuracy"],
    icon: Wrench,
    status: "Completed",
  },
  {
    title: "Electric Vehicle Integration",
    category: "EV Technology",
    description:
      "Specialised training and certification in Electric Vehicle Technology, preparing for the future of commercial transportation.",
    image: "/electric-vehicle-charging-station-and-maintenance.jpg",
    technologies: ["Electric Vehicle Systems", "Battery Technology", "Charging Infrastructure", "Safety Protocols"],
    achievements: [
      "Heavy EV Systems Certification",
      "Future-ready skill development",
      "Sustainable transport expertise",
    ],
    icon: Zap,
    status: "Ongoing",
  },
  {
    title: "Data-Driven Maintenance Analytics",
    category: "Data Analytics",
    description:
      "Leveraging Microsoft Excel and Power BI to analyse maintenance patterns and optimise fleet performance through data insights.",
    image: "/data-analytics-dashboard-with-vehicle-maintenance-.jpg",
    technologies: ["Microsoft Excel", "Power BI", "Data Visualisation", "Performance Metrics"],
    achievements: ["Improved decision making", "Predictive maintenance insights", "Cost optimisation"],
    icon: BarChart3,
    status: "In Development",
  },
  {
    title: "Safety Compliance Program",
    category: "Safety & Training",
    description:
      "Developed and implemented comprehensive safety protocols ensuring PSV and MOT compliance across vehicle operations.",
    image: "/vehicle-safety-inspection-checklist-and-compliance.jpg",
    technologies: ["Safety Protocols", "Compliance Standards", "Training Programs", "Quality Assurance"],
    achievements: ["100% PSV compliance", "5% reduction in incidents", "Enhanced safety culture"],
    icon: Shield,
    status: "Completed",
  },
  {
    title: "Apprentice Mentorship Program",
    category: "Training & Development",
    description:
      "Mentoring and training the next generation of mechanics, sharing expertise in modern vehicle technology and best practices.",
    image: "/mechanic-training-apprentice-in-workshop-environme.jpg",
    technologies: ["Knowledge Transfer", "Hands-on Training", "Skill Development", "Professional Growth"],
    achievements: ["Successful apprentice development", "Knowledge sharing", "Team building"],
    icon: Users,
    status: "Ongoing",
  },
  {
    title: "Professional Certification Portfolio",
    category: "Continuous Learning",
    description:
      "Comprehensive collection of professional certifications demonstrating commitment to excellence and continuous improvement.",
    image: "/professional-certificates-and-training-credentials.jpg",
    technologies: ["Professional Development", "Industry Standards", "Certification Programs", "Skill Validation"],
    achievements: ["Multiple certifications", "Industry recognition", "Expertise validation"],
    icon: Award,
    status: "Ongoing",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Portfolio</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl text-pretty">
              A showcase of my professional projects, achievements, and ongoing initiatives in vehicle maintenance,
              electric vehicle technology, and data-driven fleet optimisation.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-card border-border hover:bg-accent/30 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <project.icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide">Technologies</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide">Key Results</p>
                    <ul className="space-y-1">
                      {project.achievements.slice(0, 2).map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-xs text-muted-foreground">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between pt-2">
                    <Badge
                      variant={
                        project.status === "Completed"
                          ? "default"
                          : project.status === "Ongoing"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      View Details
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-4 pt-8">
            <p className="text-muted-foreground">
              Interested in learning more about my work or discussing potential opportunities?
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
