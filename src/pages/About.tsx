import { motion } from "framer-motion";
import { Target, Eye, Heart, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/home/CTASection";
import aboutImage from "@/assets/about-image.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";

const values = [
  {
    icon: CheckCircle2,
    title: "Quality",
    description: "We maintain the highest standards of workmanship in every project.",
  },
  {
    icon: CheckCircle2,
    title: "Integrity",
    description: "Honest, transparent business practices with all our clients and partners.",
  },
  {
    icon: CheckCircle2,
    title: "Safety",
    description: "Comprehensive safety protocols ensuring zero-harm work environments.",
  },
  {
    icon: CheckCircle2,
    title: "Excellence",
    description: "Continuous improvement and commitment to exceeding expectations.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroConstruction}
            alt="About MS Gulf Horizons"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 overlay-dark" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-primary font-semibold mb-4">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-foreground mb-6">
              Building Excellence Since Day One
            </h1>
            <p className="text-xl text-muted-foreground">
              A leading construction and finishing works company in the Kingdom of Saudi Arabia,
              committed to delivering excellence in every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={aboutImage}
                  alt="MS Gulf Horizons team"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-primary font-semibold mb-4">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
                MS Gulf Horizons Contracting
              </h2>
              <div className="green-line mb-6" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                MS Gulf Horizons Contracting is a specialist finishing works contractor based in
                Jeddah, Saudi Arabia. We deliver high-quality interior contracting solutions
                including ceilings, drywall partitions, painting, tile installation, cement
                plastering, epoxy flooring, waterproofing, and complete finishing packages.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are a team of dedicated professionals committed to delivering excellence and
                innovation in every project we undertake. With years of experience serving the
                Saudi Arabian market, we have built a reputation for quality, reliability, and
                customer satisfaction.
              </p>
              <p className="text-foreground font-medium italic border-l-4 border-primary pl-4">
                "Thank you for choosing MS Gulf Horizons. We look forward to working with you
                and building a brighter future together."
                <span className="block text-primary mt-2">— Mohammad Saleem, CEO</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 section-darker">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-glow p-10"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To deliver high-quality, reliable, and on-time finishing contracting services
                with a commitment to craftsmanship and excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-glow p-10"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become one of the leading finishing contractors in Saudi Arabia known for
                precision, quality, and customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <div className="green-line mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-glow p-6 text-center"
              >
                <value.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
