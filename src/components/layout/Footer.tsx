import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  { name: "Ceiling Installation", path: "/services/ceiling-installation" },
  { name: "Drywall Partition", path: "/services/drywall-partition" },
  { name: "Painting & Decoration", path: "/services/painting-decoration" },
  { name: "Tile Installation", path: "/services/tile-installation" },
  { name: "Cement Plastering", path: "/services/cement-plastering" },
  { name: "Epoxy & Waterproofing", path: "/services/epoxy-waterproofing" },
  { name: "Finishing Works", path: "/services/finishing-works" },
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Projects", path: "/projects" },
  { name: "Equipment", path: "/equipment" },
  { name: "Our Team", path: "/team" },
  { name: "Contact Us", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-charcoal-deep border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-montserrat font-bold text-xl">
                  MS
                </span>
              </div>
              <div>
                <p className="font-montserrat font-bold text-lg text-foreground leading-tight">
                  MS Gulf Horizons
                </p>
                <p className="text-xs text-muted-foreground">Contracting</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              A specialist finishing works contractor based in Jeddah, Saudi Arabia.
              Delivering high-quality interior contracting solutions with commitment
              to excellence.
            </p>
            <p className="text-xs text-muted-foreground">
              C.R Number: 7052435596
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-semibold text-foreground mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-semibold text-foreground mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Jeddah, Saudi Arabia
                </span>
              </li>
              <li>
                <a
                  href="tel:+966550711473"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  +966 550711473
                </a>
              </li>
              <li>
                <a
                  href="tel:+966557467470"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  +966 557467470
                </a>
              </li>
              <li>
                <a
                  href="mailto:Info.msgulfhorizons@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  Info.msgulfhorizons@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MS Gulf Horizons Contracting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
