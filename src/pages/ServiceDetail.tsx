import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/home/CTASection";

import serviceCeiling from "@/assets/service-ceiling.jpg";
import serviceDrywall from "@/assets/service-drywall.jpg";
import servicePainting from "@/assets/service-painting.jpg";
import serviceTile from "@/assets/service-tile.jpg";
import servicePlastering from "@/assets/service-plastering.jpg";
import serviceEpoxy from "@/assets/service-epoxy.jpg";
import serviceFinishing from "@/assets/service-finishing.jpg";

const servicesData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  benefits: string[];
  process: { step: string; description: string }[];
  metaTitle: string;
  metaDescription: string;
}> = {
  "ceiling-installation": {
    title: "Ceiling Installation",
    description: "Professional suspended and acoustic ceiling systems for commercial and residential projects.",
    longDescription: "Our ceiling installation services encompass a wide range of solutions including suspended ceilings, acoustic panels, metal grid systems, and custom decorative ceiling designs. We use premium materials and precise installation techniques to ensure durability, aesthetics, and optimal acoustic performance. Our experienced team handles projects of all sizes, from office spaces to large commercial complexes.",
    image: serviceCeiling,
    benefits: [
      "Enhanced acoustic performance and noise reduction",
      "Easy access to utilities above ceiling",
      "Energy-efficient thermal insulation",
      "Fire-resistant materials and construction",
      "Modern aesthetic appeal",
      "Concealed lighting integration",
    ],
    process: [
      { step: "Site Assessment", description: "Detailed evaluation of space, requirements, and existing infrastructure" },
      { step: "Design Planning", description: "Custom ceiling design and material selection" },
      { step: "Framework Installation", description: "Precision installation of support grid systems" },
      { step: "Panel Fitting", description: "Expert placement of ceiling panels and tiles" },
      { step: "Finishing Touches", description: "Integration of lighting and final quality inspection" },
    ],
    metaTitle: "Ceiling Installation Services in Saudi Arabia | MS Gulf Horizons",
    metaDescription: "Professional ceiling installation services including suspended ceilings, acoustic panels, and custom designs. Expert contractors in Jeddah, Saudi Arabia.",
  },
  "drywall-partition": {
    title: "Drywall Partition",
    description: "Expert gypsum board and metal stud partition wall construction for flexible spaces.",
    longDescription: "Our drywall partition services provide versatile and cost-effective solutions for creating functional spaces within buildings. We specialize in metal stud framing and gypsum board installation, offering superior sound insulation and fire resistance. Our partitions are ideal for offices, retail spaces, hospitals, and residential applications, providing flexibility and easy modification.",
    image: serviceDrywall,
    benefits: [
      "Quick and clean installation process",
      "Excellent sound insulation properties",
      "Fire-resistant construction options",
      "Smooth, paint-ready surfaces",
      "Easy modification and reconfiguration",
      "Cost-effective space division",
    ],
    process: [
      { step: "Layout Planning", description: "Precise marking and planning of partition locations" },
      { step: "Frame Installation", description: "Metal stud framing to specifications" },
      { step: "Insulation", description: "Installation of acoustic and thermal insulation" },
      { step: "Board Fixing", description: "Gypsum board installation and securing" },
      { step: "Finishing", description: "Jointing, taping, and surface preparation" },
    ],
    metaTitle: "Drywall Partition Contractor in Saudi Arabia | MS Gulf Horizons",
    metaDescription: "Expert drywall partition services with metal stud framing and gypsum board installation. Sound insulation and fire-rated walls in Jeddah, KSA.",
  },
  "painting-decoration": {
    title: "Painting & Decoration",
    description: "Premium interior and exterior painting with decorative finishes and coatings.",
    longDescription: "Our painting and decoration services transform spaces with premium finishes and protective coatings. We offer comprehensive interior and exterior painting solutions, decorative wall treatments, and specialty finishes. Our skilled painters use high-quality materials to deliver flawless results that enhance aesthetics while providing long-lasting protection.",
    image: servicePainting,
    benefits: [
      "Premium quality paint materials",
      "Expert color consultation",
      "Long-lasting protective finishes",
      "Decorative and textured options",
      "Clean and efficient application",
      "Warranty on workmanship",
    ],
    process: [
      { step: "Surface Preparation", description: "Cleaning, patching, and priming surfaces" },
      { step: "Color Selection", description: "Professional color consultation and matching" },
      { step: "Protection Setup", description: "Covering and masking of surrounding areas" },
      { step: "Paint Application", description: "Multiple coats applied with precision" },
      { step: "Final Inspection", description: "Quality check and touch-ups" },
    ],
    metaTitle: "Professional Painting Contractor in Saudi Arabia | MS Gulf Horizons",
    metaDescription: "Premium painting and decoration services for commercial and residential projects. Interior, exterior, and decorative finishes in Jeddah, Saudi Arabia.",
  },
  "tile-installation": {
    title: "Tile Installation",
    description: "Precision tile cutting and fixing for floors, walls, and decorative applications.",
    longDescription: "Our tile installation services cover all aspects of ceramic, porcelain, and natural stone tiling. We provide precision cutting, expert laying, and meticulous grouting to ensure stunning and durable results. From large-format floor tiles to intricate mosaic work, our skilled craftsmen deliver exceptional finishes for any application.",
    image: serviceTile,
    benefits: [
      "Precision cutting and fitting",
      "Expert pattern and layout design",
      "Various tile material expertise",
      "Waterproof installation methods",
      "Uniform grout lines",
      "Long-lasting durability",
    ],
    process: [
      { step: "Surface Preparation", description: "Leveling and priming substrate" },
      { step: "Layout Planning", description: "Pattern design and tile positioning" },
      { step: "Adhesive Application", description: "Proper adhesive spreading technique" },
      { step: "Tile Setting", description: "Precision placement with spacers" },
      { step: "Grouting & Sealing", description: "Professional grouting and sealing" },
    ],
    metaTitle: "Tile Installation Contractor in Saudi Arabia | MS Gulf Horizons",
    metaDescription: "Expert tile installation for floors and walls. Ceramic, porcelain, and natural stone tiling services in Jeddah, Saudi Arabia.",
  },
  "cement-plastering": {
    title: "Cement Plastering",
    description: "Smooth and durable cement plastering for interior and exterior surfaces.",
    longDescription: "Our cement plastering services provide the foundation for beautiful and durable wall finishes. We specialize in interior and exterior plastering, ensuring smooth, even surfaces ready for painting or other finishes. Our experienced plasterers use quality materials and proven techniques to deliver crack-free, long-lasting results.",
    image: servicePlastering,
    benefits: [
      "Smooth, even surface finish",
      "Crack-resistant application",
      "Suitable for all weather conditions",
      "Strong adhesion to substrates",
      "Paint-ready surfaces",
      "Durable long-term performance",
    ],
    process: [
      { step: "Surface Cleaning", description: "Removal of debris and loose material" },
      { step: "Base Coat", description: "Application of scratch coat" },
      { step: "Leveling", description: "Building up to required thickness" },
      { step: "Finishing Coat", description: "Final smooth plaster application" },
      { step: "Curing", description: "Proper curing for strength development" },
    ],
    metaTitle: "Cement Plastering Contractor in Saudi Arabia | MS Gulf Horizons",
    metaDescription: "Professional cement plastering services for interior and exterior surfaces. Smooth, durable wall finishes in Jeddah, Saudi Arabia.",
  },
  "epoxy-waterproofing": {
    title: "Epoxy & Waterproofing",
    description: "Industrial-grade epoxy flooring and comprehensive waterproofing solutions.",
    longDescription: "Our epoxy and waterproofing services protect structures from moisture damage while providing durable, attractive flooring solutions. We offer industrial-grade epoxy flooring for warehouses, factories, and commercial spaces, as well as comprehensive waterproofing for basements, roofs, and wet areas. Our systems ensure long-term protection and easy maintenance.",
    image: serviceEpoxy,
    benefits: [
      "Chemical and abrasion resistance",
      "Seamless, hygienic surfaces",
      "Moisture and water protection",
      "Easy cleaning and maintenance",
      "Anti-slip options available",
      "Long service life",
    ],
    process: [
      { step: "Surface Preparation", description: "Grinding and cleaning of substrate" },
      { step: "Primer Application", description: "Application of bonding primer" },
      { step: "Coating Application", description: "Multiple epoxy/waterproof layers" },
      { step: "Curing Time", description: "Allowing proper cure time" },
      { step: "Final Inspection", description: "Quality testing and verification" },
    ],
    metaTitle: "Epoxy Flooring & Waterproofing Contractor in Saudi Arabia | MS Gulf Horizons",
    metaDescription: "Industrial epoxy flooring and waterproofing solutions for commercial and industrial facilities in Jeddah, Saudi Arabia.",
  },
  "finishing-works": {
    title: "Complete Finishing Works",
    description: "Turnkey interior finishing packages from concept to completion.",
    longDescription: "Our complete finishing works service provides comprehensive turnkey solutions for interior fit-outs. We coordinate all finishing trades including ceilings, partitions, flooring, painting, and fixtures to deliver fully finished spaces. Our project management approach ensures seamless execution, quality control, and on-time delivery.",
    image: serviceFinishing,
    benefits: [
      "Single point of responsibility",
      "Coordinated multi-trade execution",
      "Consistent quality standards",
      "Efficient project timelines",
      "Cost-effective packaging",
      "Hassle-free project delivery",
    ],
    process: [
      { step: "Project Assessment", description: "Detailed scope and requirements review" },
      { step: "Planning & Design", description: "Comprehensive project planning" },
      { step: "Resource Mobilization", description: "Team and material coordination" },
      { step: "Execution", description: "Phased implementation of all works" },
      { step: "Handover", description: "Final inspection and project handover" },
    ],
    metaTitle: "Complete Interior Finishing Works in Saudi Arabia | MS Gulf Horizons",
    metaDescription: "Turnkey interior finishing solutions for commercial and residential projects. Full fit-out services in Jeddah, Saudi Arabia.",
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
            <Link to="/services" className="text-primary hover:underline">
              View All Services
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 overlay-dark" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-montserrat font-bold text-foreground mb-6">
                  About This Service
                </h2>
                <div className="green-line mb-6" />
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {service.longDescription}
                </p>

                {/* Benefits */}
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4">
                  Key Benefits
                </h3>
                <ul className="grid md:grid-cols-2 gap-3 mb-12">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Process */}
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-6">
                  Our Process
                </h3>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div
                      key={step.step}
                      className="flex gap-4 p-4 rounded-xl bg-charcoal-medium"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{step.step}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24"
              >
                {/* Contact Card */}
                <div className="card-glow p-8 mb-8">
                  <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4">
                    Get a Quote
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Contact us today for a free consultation and detailed quote for your project.
                  </p>
                  <Link to="/contact" className="btn-hero-primary w-full justify-center mb-4">
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="tel:+966550711473"
                    className="btn-hero-outline w-full justify-center"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>

                {/* Other Services */}
                <div className="card-glow p-8">
                  <h3 className="text-lg font-montserrat font-semibold text-foreground mb-4">
                    Other Services
                  </h3>
                  <ul className="space-y-3">
                    {Object.entries(servicesData)
                      .filter(([key]) => key !== slug)
                      .slice(0, 4)
                      .map(([key, s]) => (
                        <li key={key}>
                          <Link
                            to={`/services/${key}`}
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ArrowRight className="w-4 h-4" />
                            {s.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServiceDetail;
