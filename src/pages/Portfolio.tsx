import { Code2, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Portfolio() {
  const caseStudyStyles = [
    {
      panel: 'bg-gradient-to-br from-mustard/20 to-mustard/5 border-2 border-mustard/30',
      text: 'text-mustard',
    },
    {
      panel: 'bg-gradient-to-br from-brown-primary/20 to-brown-primary/5 border-2 border-brown-primary/30',
      text: 'text-brown-primary',
    },
  ]
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-featured e-commerce solution with payment integration, inventory management, and analytics dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/wix-ecommerce-website-builder.jpg',
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure banking app with account management, instant transfers, bill payments, and biometric authentication.',
      technologies: ['React Native', 'Firebase', 'Redux', 'JWT'],
      image: 'https://d1tzxux72fvryy.cloudfront.net/Mfc7d6d48c9eb8f84af1f9711124094161726204655504/preview/Mfc7d6d48c9eb8f84af1f9711124094161726204655504.png',
    },
    {
      title: 'Educational Platform',
      category: 'Web Development',
      description: 'Interactive learning platform with course publishing, progress tracking, quizzes, and subscription billing.',
      technologies: ['Next.js', 'PostgreSQL', 'AWS', 'Stripe'],
      image: 'https://image.thum.io/get/width/1200/https://www.coursera.org/',
    },
    {
      title: 'Healthcare Management System',
      category: 'Web Development',
      description: 'HIPAA-compliant healthcare platform for patient records, appointments, and telemedicine consultations.',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS'],
      image: 'https://www.inkthemes.com/wp-content/uploads/2019/03/Hospital-automanger-thumb-image11.png',
    },
    {
      title: 'Real Estate Marketplace',
      category: 'Full Stack',
      description: 'Property listing platform with advanced search, virtual tours, and integrated mortgage calculator.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps'],
      image: 'https://cdn.dribbble.com/userupload/17350653/file/still-616cd8cc4291c881904f6ad07c903830.png?resize=400x0',
    },
    {
      title: 'Enterprise Analytics Dashboard',
      category: 'Web Development',
      description: 'Real-time data visualization and reporting dashboard for business intelligence and decision making.',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      image: 'https://www.slideegg.com/image/catalog/65191-business-analytics-dashboard.png',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brown-primary to-brown-dark text-cream py-16 md:py-24">
        <div className="section-container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-cream/90 max-w-2xl">
            Showcasing our recent projects and successful solutions delivered to clients worldwide.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-container mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-brown-primary/10"
            >
              {/* Project Image */}
              <div className="h-48 border-b border-brown-primary/10 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm bg-mustard/20 text-mustard px-3 py-1 rounded-full font-semibold">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-brown-primary mb-2">
                  {project.title}
                </h3>

                <p className="text-dark-gray/70 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-brown-primary/10 text-brown-primary px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-brown-primary/10">
                  <button className="flex-1 flex items-center justify-center gap-2 text-mustard font-semibold hover:text-brown-primary transition-colors">
                    <ExternalLink size={18} />
                    View Live
                  </button>
                  <button className="flex items-center justify-center gap-2 text-brown-primary hover:text-mustard transition-colors px-4">
                    <Code2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-container bg-cream py-16 mt-12 rounded-xl">
        <h2 className="section-title text-center">Case Studies</h2>

        <div className="space-y-12 mt-12">
          {[
            {
              title: 'Scaling to 1M+ Users',
              company: 'FinTech Startup',
              challenge: 'Needed a scalable platform to handle explosive growth',
              solution: 'Migrated to microservices architecture with AWS',
              results: '3x performance improvement, 99.99% uptime',
              color: 'mustard',
              image: 'case study 1.jpg',
            },
            {
              title: 'Digital Transformation',
              company: 'Traditional Retail Business',
              challenge: 'Needed to establish online presence quickly',
              solution: 'Built integrated e-commerce and inventory system',
              results: '40% increase in sales within 6 months',
              color: 'brown-primary',
              image: 'case study 2.jpg',
            },
          ].map((study, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="h-72 rounded-xl overflow-hidden">
                <img
                  src={new URL(`../assets/${study.image}`, import.meta.url).href}
                  alt={`${study.title} case study`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-brown-primary mb-2">
                  {study.title}
                </h3>
                <p className="text-mustard font-semibold mb-4">{study.company}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-brown-primary mb-1">Challenge</h4>
                    <p className="text-dark-gray/80">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-brown-primary mb-1">Our Solution</h4>
                    <p className="text-dark-gray/80">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-brown-primary mb-1">Results</h4>
                    <p className="text-dark-gray/80 font-semibold text-mustard">
                      {study.results}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '100+', label: 'Projects Delivered' },
            { number: '85+', label: 'Happy Clients' },
            { number: '15+', label: 'Years Experience' },
            { number: '50+', label: 'Team Members' },
          ].map((stat, idx) => (
            <div key={idx} className="p-6">
              <div className="text-5xl font-bold text-mustard mb-2">
                {stat.number}
              </div>
              <p className="text-dark-gray font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brown-primary text-cream py-16 mt-12">
        <div className="section-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life.
          </p>
          <Link to="/contact">
            <button className="btn-secondary">
              Start a Project
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
