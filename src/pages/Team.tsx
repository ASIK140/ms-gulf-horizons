import { motion } from "framer-motion";
import { Users, HardHat, ClipboardCheck, ShieldCheck, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/home/CTASection";
import teamImage from "@/assets/team-image.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";

const teamCategories = [
  {
    icon: HardHat,
    title: "Skilled Workers",
    description: "Experienced craftsmen specialized in various finishing trades including plastering, tiling, painting, and more.",
    count: "50+",
  },
  {
    icon: ClipboardCheck,
    title: "Supervisors",
    description: "Dedicated site supervisors ensuring quality control and efficient project execution.",
    count: "10+",
  },
  {
    icon: Users,
    title: "Engineers / Foremen",
    description: "Professional engineers and foremen providing technical expertise and project management.",
    count: "5+",
  },
  {
    icon: ShieldCheck,
    title: "Safety Officers",
    description: "Trained safety professionals maintaining rigorous safety standards across all projects.",
    count: "2+",
  },
];

const strengths = [
  {
    icon: Award,
    title: "Experienced Workforce",
    description: "Our team brings years of experience in the Saudi Arabian construction industry.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Focused",
    description: "Comprehensive safety training and protocols for all team members.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Commitment",
    description: "Every team member is committed to delivering work that exceeds expectations.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless coordination between trades for efficient project delivery.",
  },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroConstruction}
            alt="Our Team"
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
            <span className="inline-block text-primary font-semibold mb-4">Our Team</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-foreground mb-6">
              Team Strength
            </h1>
            <p className="text-xl text-muted-foreground">
              Our success is built on the dedication and expertise of our skilled workforce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={teamImage}
                  alt="MS Gulf Horizons team at work"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
                Dedicated Professionals
              </h2>
              <div className="green-line mb-6" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At MS Gulf Horizons, our workforce is our greatest asset. We employ a diverse
                team of skilled workers, experienced supervisors, professional engineers, and
                dedicated safety officers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every team member undergoes rigorous training and is committed to upholding our
                standards of quality, safety, and professionalism on every project.
              </p>
            </motion.div>
          </div>

          {/* Team Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-glow p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="stat-number mb-2">{category.count}</p>
                <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Strengths */}
      <section className="py-24 section-darker">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
              Why Our Team Excels
            </h2>
            <div className="green-line mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              The qualities that set our workforce apart from the competition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <strength.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">
                  {strength.title}
                </h3>
                <p className="text-sm text-muted-foreground">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Team;
