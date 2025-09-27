import { Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Shepherd K. Mhlanga</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional PSV/HGV Mechanic specialising in vehicle maintenance, electric vehicle technology, and
              data-driven fleet optimisation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+447721401590"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +44 7721 401590
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:ksmhlanga@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  ksmhlanga@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-primary" />
                <a
                  href="https://www.linkedin.com/in/ksmhlanga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Shepherd K. Mhlanga. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
