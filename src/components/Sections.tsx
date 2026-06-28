import { Download, Mail, ChevronRight, MapPin, Linkedin, ExternalLink, Github, GraduationCap, Award, Users } from "lucide-react";
import { portfolioData } from "../data";
import { FadeIn, StaggerCard, staggerContainer, staggerItem } from "./Animations";
import { MagneticButton, TiltCard, CountUp, TechTicker } from "./InteractiveUI";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-24 relative overflow-hidden page-container">
      <div className="max-w-5xl w-full mx-auto relative z-10">
        <FadeIn delay={0.1}>
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 text-tech-mono text-[#2563EB] dark:text-[#D4FF00] bg-white/50 dark:bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] dark:bg-[#D4FF00] animate-pulse" />
              {portfolioData.personal.title}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 text-tech-mono text-[#2563EB] dark:text-[#D4FF00] bg-white/50 dark:bg-white/5 backdrop-blur-md">
              <Users size={14} />
              {portfolioData.personal.roleSummary}
            </span>
          </div>
        </FadeIn>

        <div className="mb-8">
          <FadeIn delay={0.2}>
            <h1 className="text-display-huge text-[#0F172A] dark:text-[#F5F5F7] leading-tight font-extrabold tracking-tight">
              {portfolioData.personal.name.split(' ')[1]}
            </h1>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="text-xl md:text-2xl font-semibold text-[#2563EB] dark:text-[#D4FF00] tracking-wide mt-2">
              {portfolioData.personal.coreStack}
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <FadeIn delay={0.3}>
              <p className="text-body-lead text-[#475569] dark:text-[#86868B] max-w-2xl font-light mb-8 leading-relaxed">
                {portfolioData.personal.tagline}
              </p>
            </FadeIn>
          </div>

          <div className="md:col-span-4 md:text-right flex justify-start md:justify-end gap-4">
            <FadeIn delay={0.4}>
              <div className="flex gap-4">
                <MagneticButton href="#contact" className="px-8 py-4 bg-[#0F172A] dark:bg-white text-white dark:text-[#080809] font-bold rounded-full transition-transform hover:scale-105 active:scale-95 text-center min-w-[150px]">
                  Contact Me
                </MagneticButton>
                <MagneticButton href="#experience" className="px-8 py-4 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 border border-black/20 dark:border-white/10 text-[#0F172A] dark:text-[#F5F5F7] font-bold rounded-full transition-transform hover:scale-105 active:scale-95 text-center min-w-[150px]">
                  View Experience
                </MagneticButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Tech Ticker background in hero */}
      <div className="absolute bottom-6 w-full opacity-40 dark:opacity-20 pointer-events-none left-0">
        <TechTicker tools={["ASP.NET Core", "Angular", "PostgreSQL", "Docker", "OpenAI API", "C#", "TypeScript", "N-Tier Architecture"]} />
      </div>
    </section>
  );
}

export function About() {
  const stats = [
    { label: "Years Experience", value: portfolioData.personal.yearsExperience },
    { label: "Enterprise Products", value: portfolioData.personal.projectsCompleted },
  ];

  return (
    <section id="about" className="py-32 relative page-container section-spacer">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-16 border-b border-black/10 dark:border-white/5 pb-6">
            <h2 className="text-section-title text-[#0F172A] dark:text-[#F5F5F7] uppercase">About Me</h2>
            <span className="text-tech-mono text-[#86868B] uppercase">Overview & Metrics</span>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <FadeIn delay={0.1}>
              <p className="text-body-lead text-[#475569] dark:text-[#86868B] mb-8 font-light leading-relaxed">
                {portfolioData.personal.summary}
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-6 w-full">
            {stats.map((stat, idx) => (
              <TiltCard key={idx}>
                <div className="p-8 bg-black/5 dark:bg-[#121214] border border-black/10 dark:border-white/5 rounded-3xl text-center shadow-sm flex flex-col justify-center items-center h-40">
                  <div className="text-4xl font-extrabold text-[#2563EB] dark:text-[#D4FF00] mb-2">
                    <CountUp to={stat.value} />
                  </div>
                  <div className="text-xs uppercase tracking-widest font-semibold text-[#475569] dark:text-[#86868B]">
                    {stat.label}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-32 relative page-container section-spacer">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-16 border-b border-black/10 dark:border-white/5 pb-6">
            <h2 className="text-section-title text-[#0F172A] dark:text-[#F5F5F7] uppercase">Skills & Expertise</h2>
            <span className="text-tech-mono text-[#86868B] uppercase">Core Toolkit</span>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.skills.map((skillGroup, idx) => (
            <TiltCard key={idx}>
              <div className="bg-black/5 dark:bg-[#121214] p-8 rounded-3xl border border-black/10 dark:border-white/5 h-full transition-all duration-300 hover:border-black/30 dark:hover:border-white/10">
                <h3 className="text-tech-mono text-sm uppercase tracking-widest text-[#2563EB] dark:text-[#D4FF00] mb-6 font-bold pb-3 border-b border-black/10 dark:border-white/5">
                  {skillGroup.category}
                </h3>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {skillGroup.tools.map((tool, i) => (
                    <motion.li
                      key={i}
                      variants={staggerItem}
                      className="flex items-center text-[#475569] dark:text-[#86868B] text-sm font-light group/item hover:text-black dark:hover:text-[#F5F5F7] transition-colors cursor-default"
                    >
                      <ChevronRight size={14} className="text-black/30 dark:text-[#86868B]/50 mr-2 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                      {tool}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-32 relative page-container section-spacer">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-16 border-b border-black/10 dark:border-white/5 pb-6">
            <h2 className="text-section-title text-[#0F172A] dark:text-[#F5F5F7] uppercase">Professional Experience</h2>
            <span className="text-tech-mono text-[#86868B] uppercase">Office Projects</span>
          </div>
        </FadeIn>

        <div className="space-y-16">
          {portfolioData.corporateProjects.map((corp, idx) => (
            <div key={idx} className="border border-black/10 dark:border-white/5 bg-black/5 dark:bg-[#121214] p-10 rounded-3xl">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6 pb-6 border-b border-black/10 dark:border-white/5">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#0F172A] dark:text-[#F5F5F7] uppercase">
                    {corp.position}
                  </h3>
                  <h4 className="text-lg text-[#2563EB] dark:text-[#D4FF00] font-medium tracking-wide">
                    {corp.company}
                  </h4>
                </div>
                <span className="text-tech-mono text-xs px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-[#475569] dark:text-[#86868B] bg-white/50 dark:bg-[#080809]/50 whitespace-nowrap self-start">
                  {corp.duration}
                </span>
              </div>

              <p className="text-sm text-[#475569] dark:text-[#86868B] mb-8 font-light italic">
                {corp.description}
              </p>

              <div className="space-y-8">
                {corp.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="pl-4 border-l border-[#2563EB]/30 dark:border-[#D4FF00]/30 space-y-3">
                    <h5 className="font-bold text-lg text-[#0F172A] dark:text-[#F5F5F7] uppercase">
                      {proj.name}
                    </h5>
                    <p className="text-sm text-[#475569] dark:text-[#86868B] font-light max-w-3xl leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
                      <span className="text-[#2563EB] dark:text-[#D4FF00]">
                        Impact: <strong className="font-extrabold text-[#0F172A] dark:text-white">{proj.impact}</strong>
                      </span>
                      <span className="text-[#86868B]/60">|</span>
                      <span className="text-[#475569] dark:text-[#86868B]">
                        Stack: {proj.technologies.join(", ")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-32 relative page-container section-spacer">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-16 border-b border-black/10 dark:border-white/5 pb-6">
            <h2 className="text-section-title text-[#0F172A] dark:text-[#F5F5F7] uppercase">Freelance Projects</h2>
            <span className="text-tech-mono text-[#86868B] uppercase">Typography Only</span>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10">
          {portfolioData.freelanceProjects.map((project, idx) => (
            <div key={idx} className="border border-black/10 dark:border-white/5 bg-black/5 dark:bg-[#121214] p-10 rounded-3xl flex flex-col justify-between hover:border-black/30 dark:hover:border-white/10 transition-colors">
              <div>
                <span className="text-tech-mono text-xs uppercase tracking-widest text-[#2563EB] dark:text-[#D4FF00] mb-4 block">
                  {project.technologies.join(" / ")}
                </span>
                <h3 className="text-2xl font-extrabold text-[#0F172A] dark:text-[#F5F5F7] uppercase mb-4">
                  {project.name}
                </h3>
                <p className="text-[#475569] dark:text-[#86868B] font-light leading-relaxed mb-6 text-base">
                  {project.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#0F172A] dark:text-[#F5F5F7] opacity-60">Key Features:</h4>
                  {project.features.map((f, i) => (
                    <div key={i} className="flex items-center text-sm font-light text-[#475569] dark:text-[#86868B]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] dark:bg-[#D4FF00] mr-3" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-6 mt-8 pt-6 border-t border-black/10 dark:border-white/5">
                {project.githubLink !== '#' && (
                  <a href={project.githubLink} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F5F5F7] hover:text-[#2563EB] dark:hover:text-[#D4FF00] transition-colors">
                    <Github size={16} /> Repository
                  </a>
                )}
                {project.liveLink !== '#' && (
                  <a href={project.liveLink} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F5F5F7] hover:text-[#2563EB] dark:hover:text-[#D4FF00] transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="py-32 relative page-container section-spacer">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-16 border-b border-black/10 dark:border-white/5 pb-6">
            <h2 className="text-section-title text-[#0F172A] dark:text-[#F5F5F7] uppercase">Education</h2>
            <span className="text-tech-mono text-[#86868B] uppercase">Academic Bio</span>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {portfolioData.education.map((edu, i) => (
            <FadeIn key={i} delay={0.1}>
              <div className="border border-black/10 dark:border-white/5 bg-black/5 dark:bg-[#121214] p-10 rounded-3xl flex flex-col md:flex-row gap-6 items-start hover:border-black/20 dark:hover:border-white/10 transition-colors">
                <div className="p-4 bg-white dark:bg-[#080809] border border-black/10 dark:border-white/5 rounded-2xl text-[#2563EB] dark:text-[#D4FF00]">
                  <GraduationCap size={32} />
                </div>
                <div className="space-y-2 flex-1">
                  <span className="text-tech-mono text-xs px-3 py-1 rounded-full border border-black/10 dark:border-white/10 text-[#475569] dark:text-[#86868B] bg-white/50 dark:bg-[#080809]/50 float-right">
                    {edu.duration}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0F172A] dark:text-[#F5F5F7] uppercase">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg text-[#2563EB] dark:text-[#D4FF00] font-medium">
                    {edu.institution}
                  </h4>
                  <p className="text-sm font-bold text-[#0F172A] dark:text-white mt-4">
                    Grade achieved: {edu.grade}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="py-32 relative page-container section-spacer">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-16 border-b border-black/10 dark:border-white/5 pb-6 text-left">
            <h2 className="text-section-title text-[#0F172A] dark:text-[#F5F5F7] uppercase">Achievements</h2>
            <span className="text-tech-mono text-[#86868B] uppercase">Milestones</span>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
          {portfolioData.achievements.map((ach, i) => (
            <StaggerCard key={i} delay={i * 0.1} className="p-8 bg-black/5 dark:bg-[#121214] border border-black/10 dark:border-white/5 rounded-3xl hover:border-black/30 dark:hover:border-white/10 transition-colors flex gap-5 items-start">
              <div className="p-3 bg-white dark:bg-[#080809] border border-black/10 dark:border-white/5 rounded-xl text-[#2563EB] dark:text-[#D4FF00] shrink-0">
                <Award size={20} />
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-[#0F172A] dark:text-[#F5F5F7] mb-2 uppercase">
                  {ach.title}
                </h4>
                <p className="text-sm text-[#475569] dark:text-[#86868B] leading-relaxed font-light">
                  {ach.details}
                </p>
              </div>
            </StaggerCard>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <MagneticButton className="inline-flex items-center px-10 py-5 bg-[#0F172A] dark:bg-[#F5F5F7] text-white dark:text-[#080809] font-bold rounded-full transition-all hover:shadow-lg active:scale-95 border border-transparent" href="https://drive.google.com/file/d/16FthjEwpcI2neX8UfBK2cU96VvA6Pyzs/view">
            <Download size={22} className="mr-3 text-[#2563EB] dark:text-[#0F172A]" />
            Download Full Resume
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-black/5 dark:bg-[#121214] text-[#0F172A] dark:text-[#F5F5F7] page-container border-t border-black/10 dark:border-white/5">
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <FadeIn>
          <h2 className="text-section-title mb-6 text-center uppercase">Get In Touch</h2>
          <p className="text-[#475569] dark:text-[#86868B] mb-16 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Currently open to discussing full-stack roles, system migrations, database optimizations, and cloud deployment pipelines.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mb-2 mt-2 mx-auto">
          {[
            { icon: Mail, label: "Email Me", value: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
            { icon: MapPin, label: "Location", value: portfolioData.personal.location },
            { icon: Linkedin, label: "LinkedIn", value: "Connect", href: portfolioData.personal.linkedin, target: "_blank" }
          ].map((item, i) => (
            <FadeIn key={i} delay={0.1 + (i * 0.1)}>
              {item.href ? (
                <a href={item.href} target={item.target} rel={item.target ? "noreferrer" : ""} className="flex flex-col items-center p-8 bg-white dark:bg-[#080809] border border-black/10 dark:border-white/5 rounded-3xl transition-transform hover:-translate-y-1 hover:shadow-md h-full group">
                  <item.icon className="mb-4 text-[#2563EB] dark:text-[#D4FF00] transition-transform duration-300 group-hover:scale-105" size={28} />
                  <span className="font-bold text-base tracking-wide uppercase">{item.label}</span>
                  <span className="text-xs text-[#475569] dark:text-[#86868B] mt-2 font-light">{item.value}</span>
                </a>
              ) : (
                <div className="flex flex-col items-center p-8 bg-white dark:bg-[#080809] border border-black/10 dark:border-white/5 rounded-3xl h-full transition-transform hover:-translate-y-1 hover:shadow-md group">
                  <item.icon className="mb-4 text-[#2563EB] dark:text-[#D4FF00] transition-transform duration-300 group-hover:scale-105" size={28} />
                  <span className="font-bold text-base tracking-wide uppercase">{item.label}</span>
                  <span className="text-xs text-[#475569] dark:text-[#86868B] mt-2 font-light">{item.value}</span>
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
