import { Download, Mail, ChevronRight, MapPin, Phone, Github, Linkedin, ExternalLink } from "lucide-react";
import { portfolioData } from "../data";
import { FadeIn, StaggerCard } from "./Animations";

export function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center pt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeIn>
          <div className="mb-8 relative inline-block group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-800 overflow-hidden mx-auto shadow-xl transition-transform duration-500 group-hover:scale-105">
                <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50 dark:bg-gray-800">
                    <span className="text-5xl font-bold">{portfolioData.personal.name.charAt(0)}</span>
                </div>
            </div>
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-white dark:border-gray-900 rounded-full animate-pulse shadow-sm"></div>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
            {portfolioData.personal.name}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-6 tracking-wide">
            {portfolioData.personal.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-light">
            {portfolioData.personal.tagline}
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all active:scale-95 shadow-md hover:shadow-lg w-full sm:w-auto text-center border border-transparent">
              Contact Me
            </a>
            <a href="#projects" className="px-8 py-3 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white font-medium rounded-full transition-all active:scale-95 shadow-sm hover:shadow-md w-full sm:w-auto text-center">
              View Projects
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function About() {
  const stats = [
    { label: "Years Experience", value: portfolioData.personal.yearsExperience },
    { label: "Projects completed", value: portfolioData.personal.projectsCompleted },
    { label: "Certifications", value: portfolioData.personal.certificationsCount },
  ];

  return (
    <section id="about" className="py-24 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center justify-center mb-12">
             <div className="h-px bg-gray-200 dark:bg-gray-700 w-12 mr-4"></div>
             <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">About Me</h2>
             <div className="h-px bg-gray-200 dark:bg-gray-700 w-12 ml-4"></div>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.1}>
            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light">
              <p>{portfolioData.personal.summary}</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <StaggerCard key={idx} delay={0.2 + idx * 0.1} className={`p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl text-center shadow-sm group ${idx === 2 ? 'col-span-2 sm:col-span-1' : ''}`}>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-transform group-hover:scale-110 inline-block">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</div>
              </StaggerCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
            <div className="flex items-center justify-center mb-12">
               <div className="h-px bg-gray-200 dark:bg-gray-700 w-12 mr-4"></div>
               <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">Technical Skills</h2>
               <div className="h-px bg-gray-200 dark:bg-gray-700 w-12 ml-4"></div>
            </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.skills.map((skillGroup, idx) => (
            <StaggerCard key={idx} delay={idx * 0.1} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50 h-full group">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pb-3 border-b border-gray-200 dark:border-gray-700 group-hover:border-blue-200 dark:group-hover:border-blue-900 transition-colors">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.tools.map((tool, i) => (
                  <li key={i} className="flex items-center text-gray-600 dark:text-gray-300 font-medium group/item hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default">
                    <ChevronRight size={16} className="text-blue-500/50 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 mr-2 flex-shrink-0 transition-all group-hover/item:translate-x-1" />
                    {tool}
                  </li>
                ))}
              </ul>
            </StaggerCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
            <div className="flex items-center justify-center mb-12">
               <div className="h-px bg-gray-200 dark:bg-gray-700 w-12 mr-4"></div>
               <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">Professional Experience</h2>
               <div className="h-px bg-gray-200 dark:bg-gray-700 w-12 ml-4"></div>
            </div>
        </FadeIn>
        <div className="space-y-12">
          {portfolioData.experience.map((exp, idx) => (
            <FadeIn key={idx} delay={0.1}>
              <div className="relative pl-8 md:pl-0 group">
                <div className="hidden md:block absolute left-[20%] top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2 group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors"></div>
                <div className="md:grid md:grid-cols-5 gap-8 mb-4 items-start relative">
                  <div className="hidden md:block absolute left-[20%] top-2 w-3.5 h-3.5 rounded-full bg-blue-500 transform -translate-x-1/2 shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_#111827] group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="md:col-span-1 md:text-right pt-1.5 mb-2 md:mb-0">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">{exp.duration}</span>
                  </div>
                  <div className="md:col-span-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-100 dark:hover:border-blue-900/50">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{exp.position}</h3>
                    <h4 className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-6">{exp.company}</h4>
                    <ul className="space-y-3 mb-8">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex text-gray-600 dark:text-gray-300 font-light text-sm leading-relaxed">
                          <span className="mr-3 text-blue-500/80 mt-1 flex-shrink-0">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 text-xs font-semibold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800/80 rounded-full border border-gray-200 dark:border-gray-700/80 hover:border-blue-300 dark:hover:border-blue-700 transition-colors cursor-default">{tech}</span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
            <div className="flex items-center justify-center mb-12">
               <div className="h-px bg-gray-200 dark:bg-gray-700 w-12 mr-4"></div>
               <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">Featured Projects</h2>
               <div className="h-px bg-gray-200 dark:bg-gray-700 w-12 ml-4"></div>
            </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <StaggerCard key={idx} delay={idx * 0.1} className="flex flex-col bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl overflow-hidden h-full shadow-sm group">
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.name}</h3>
                  <div className="flex space-x-3">
                    {project.githubLink !== '#' && <a href={project.githubLink} className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110" aria-label="GitHub"><Github size={20} /></a>}
                    {project.liveLink !== '#' && <a href={project.liveLink} className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110" aria-label="Live Demo"><ExternalLink size={20} /></a>}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-3">Key Features:</h4>
                    <ul className="list-none text-sm text-gray-600 dark:text-gray-400 space-y-2">
                        {project.features.map((f,i) => (
                          <li key={i} className="flex items-center">
                            <ChevronRight size={14} className="text-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                            <span className="transition-transform group-hover:translate-x-1">{f}</span>
                          </li>
                        ))}
                    </ul>
                </div>
              </div>
              <div className="bg-gray-50/50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800 p-6 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50/80 dark:bg-blue-900/30 rounded-full border border-blue-200/50 dark:border-blue-800/50">{tech}</span>
                ))}
              </div>
            </StaggerCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contributions() {
  return (
    <section id="contributions" className="py-24 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
            <div className="flex items-center justify-center mb-12">
               <div className="h-px bg-gray-200 dark:bg-gray-700 w-12 mr-4"></div>
               <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">Programming Contributions</h2>
               <div className="h-px bg-gray-200 dark:bg-gray-700 w-12 ml-4"></div>
            </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8">
          <StaggerCard delay={0.1}>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-sm h-full hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors">
              <div className="flex items-center mb-8">
                <Github className="text-gray-700 dark:text-gray-300 mr-4" size={32} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">GitHub Statistics</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Total Repositories", value: portfolioData.contributions.github.repos },
                  { label: "Lifetime Contributions", value: portfolioData.contributions.github.contributions },
                  { label: "Primary Languages", value: portfolioData.contributions.github.languages }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800/50 last:border-0 group">
                      <span className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{stat.label}</span>
                      <span className="font-bold text-gray-900 dark:text-white text-sm md:text-base text-right max-w-[50%]">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </StaggerCard>
          <StaggerCard delay={0.2}>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-sm h-full hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors">
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">Open Source Activity</h3>
               <ul className="space-y-6">
                {portfolioData.contributions.openSource.map((item, i) => (
                    <li key={i} className="flex items-start group">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                        <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors leading-relaxed">{item}</span>
                    </li>
                ))}
               </ul>
            </div>
          </StaggerCard>
        </div>
      </div>
    </section>
  );
}

export function Resume() {
    return (
      <section id="resume" className="py-24 border-t border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
                <div className="flex items-center justify-center mb-6">
                   <div className="h-px bg-gray-200 dark:bg-gray-700 w-12 mr-4"></div>
                   <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">Resume & Achievements</h2>
                   <div className="h-px bg-gray-200 dark:bg-gray-700 w-12 ml-4"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-lg font-light">
                    Review my detailed work history or download my structured professional resume document.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
                   {portfolioData.achievements.map((ach, i) => (
                       <StaggerCard key={i} delay={i*0.1} className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl hover:border-blue-200 dark:hover:border-blue-900/50">
                           <h4 className="font-bold text-gray-900 dark:text-white mb-2">{ach.title}</h4>
                           <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{ach.details}</p>
                       </StaggerCard>
                   ))}
                </div>
                <a href="#" className="inline-flex items-center px-8 py-4 bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-medium rounded-full transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95 group border border-transparent">
                    <Download size={20} className="mr-3 group-hover:-translate-y-1 transition-transform" />
                    Download Full Resume
                </a>
            </FadeIn>
        </div>
      </section>
    );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-blue-600 dark:bg-blue-900 text-white border-y border-transparent">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-blue-100 mb-12 max-w-2xl mx-auto text-lg font-light">
            Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </FadeIn>
        
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Mail, label: "Email Me", value: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
            { icon: MapPin, label: "Location", value: portfolioData.personal.location },
            { icon: Linkedin, label: "LinkedIn", value: "Connect Professionally", href: portfolioData.personal.linkedin, target: "_blank" }
          ].map((item, i) => (
            <FadeIn key={i} delay={0.1 + (i * 0.1)}>
              {item.href ? (
                 <a href={item.href} target={item.target} rel={item.target ? "noreferrer" : ""} className="flex flex-col items-center p-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl transition-all group hover:-translate-y-2 hover:shadow-lg h-full">
                    <item.icon className="mb-4 text-blue-200 group-hover:text-white group-hover:scale-110 transition-all" size={32} />
                    <span className="font-medium text-sm tracking-wide">{item.label}</span>
                    <span className="text-xs text-blue-200 mt-2 opacity-80 group-hover:opacity-100 transition-opacity">{item.value}</span>
                 </a>
              ) : (
                 <div className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl h-full transition-transform hover:-translate-y-2 group cursor-default">
                    <item.icon className="mb-4 text-blue-200 group-hover:text-white group-hover:scale-110 transition-all" size={32} />
                    <span className="font-medium text-sm tracking-wide">{item.label}</span>
                    <span className="text-xs text-blue-200 mt-2 opacity-80">{item.value}</span>
                 </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
