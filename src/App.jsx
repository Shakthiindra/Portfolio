import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  ArrowUp,
  Code,
  Palette,
  Smartphone,
  PhoneCallIcon,
  LocateIcon,
  MapIcon,
  MapPinIcon,
} from "lucide-react";
import { MailIcon } from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "skills", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "This Portfolio website showcases my skills and modern web technologies that i implemented. Good to go with my updated skills",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      tech: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      github: "#",
      live: "#",
    },
  ];

  const skills = [
    {
      name: "Frontend",
      icon: <Code className="w-8 h-8" />,
      items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      name: "Design",
      icon: <Palette className="w-8 h-8" />,
      items: [
        "UI/UX Design",
        "Figma",
        "Adobe XD",
        "Responsive Design",
        "Design Systems",
      ],
    },
    {
      name: "Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      items: [
        "React Native",
        "Flutter",
        "iOS",
        "Android",
        "Progressive Web Apps",
      ],
    },
  ];


const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f6c141d9-c5ad-4f07-b336-e6f19b0c8a8a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };



  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              <button onClick={() => scrollToSection("home")} className="cursor-pointer">Portfolio</button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "skills", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors hover:text-blue-400 ${
                      activeSection === item ? "text-blue-400" : "text-gray-300"
                    } cursor-pointer`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-2 space-y-2">
              {["home", "about", "projects", "skills", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 capitalize cursor-pointer"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="text-center z-10 px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-4xl font-bold">SI</span>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Shakthi
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Software Developer & passionate about creating beautiful, functional
            digital experiences
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Shakthiindra"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/shakthi-indra/"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 cursor-pointer"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate full-stack developer with experience in
                creating digital solutions that combine beautiful design with
                robust functionality. I specialize in React, Node.js, and modern
                web technologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through technical writing and mentoring.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Get In Touch
              </button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-all"
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                <div className="space-y-2">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-gray-400">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-15 px-4 bg-gray-800/50 flex flex-col justify-center gap-10">
        <div className="text-center ">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect with Me</h1>
        </div>
        <div className="flex gap-40 mt-5">
          <div className="flex flex-col gap-8 ml-15">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Let's talk</span>
            <p className="text-xl text-gray-300">
              I'm currently available to work on new Projects, so feel free to
              approach.
            </p>
            <div className="flex flex-col gap-10 mt-4">
              <div className="flex gap-5">
                <MailIcon />
                <p>sakthiindravarma@gmail.com</p>
              </div>
              <div className="flex gap-5">
                <PhoneCallIcon /> <p>+91 7989455076</p>
              </div>
              <div className="flex gap-5">
                <MapPinIcon />
                <p>India</p>
              </div>
            </div>
          </div>
          <form className="flex flex-col justify-center gap-4" onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" className="border rounded-sm w-80 p-2" />
            <label>Your Email</label>
            <input type="email" placeholder="Enter your email" name="email"  className="border p-2 rounded-sm"/>
            <label>Write your message here</label>
            <textarea name="message" rows="5" placeholder="Enter your message" className="border rounded-sm w-80 p-2"></textarea>
            <button type="submit" className="border p-2 rounded-sm bg-gradient-to-r from-purple-400 to-blue-500 cursor-pointer">Submit now</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-30 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Shakthi. Built with React & Tailwind CSS.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-all z-50 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Portfolio;
