import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Instagram } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: "AI Chat Interface",
      description: "Modern chat application with AI integration",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: "Portfolio Generator",
      description: "Dynamic portfolio creation tool for developers",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl mb-6">John Doe</h1>
        <p className="text-2xl text-gray-400 mb-8">Full Stack Developer & Designer</p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {[
            { Icon: Github, link: "https://github.com/l0kireddy/" },
            { Icon: Linkedin, link: "https://linkedin.com/in/l0kireddy" },
            { Icon: Twitter, link: "https://twitter.com" },
            { Icon: Instagram, link: "https://instagram.com" },
            { Icon: Mail, link: "kannapareddyl@gmail.com" }
          ].map(({ Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-white hover:text-blue-400 p-2"
            >
              <Icon size={28} />
            </a>
          ))}
        </div>
      </header>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-gray-900 rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 text-center border-t border-gray-800">
        <p className="text-gray-400">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
