import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real application, you would send this to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brown-primary to-brown-dark text-cream py-16 md:py-24">
        <div className="section-container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-cream/90 max-w-2xl">
            We'd love to hear from you. Let's discuss your project and explore how we can help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-container mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-mustard text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-mustard/10 rounded-full">
                <Phone className="text-mustard" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-brown-primary mb-3">Phone</h3>
            <div className="space-y-2">
              <p className="text-dark-gray/80 font-semibold">+2348135523948</p>
              <p className="text-dark-gray/80 font-semibold">+19032709809</p>
            </div>
            <p className="text-sm text-dark-gray/60 mt-4">Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-brown-primary text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-brown-primary/10 rounded-full">
                <Mail className="text-brown-primary" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-brown-primary mb-3">Email</h3>
            <p className="text-dark-gray/80 font-semibold break-all">hello@moobconsulting.com</p>
            <p className="text-sm text-dark-gray/60 mt-4">We typically respond within 24 hours</p>
          </div>

          {/* Location */}
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-mustard text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-mustard/10 rounded-full">
                <MapPin className="text-mustard" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-brown-primary mb-3">Office Location</h3>
            <p className="text-dark-gray/80 font-semibold">Theodak Plaza,</p>
            <p className="text-dark-gray/80 font-semibold">Central Business District,</p>
            <p className="text-dark-gray/80 font-semibold">Abuja, Nigeria</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-container bg-cream mt-12 mb-16 py-12 rounded-xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-brown-primary text-center mb-2">Send us a Message</h2>
          <p className="text-dark-gray/70 text-center mb-8">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>

          {submitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <p className="font-semibold">Thank you for your message!</p>
              <p>We'll be in touch soon. Check your email for confirmation.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md border border-brown-primary/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block font-semibold text-brown-primary mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-brown-primary/20 rounded-lg focus:outline-none focus:border-mustard transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-semibold text-brown-primary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-brown-primary/20 rounded-lg focus:outline-none focus:border-mustard transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-semibold text-brown-primary mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brown-primary/20 rounded-lg focus:outline-none focus:border-mustard transition-colors"
                  placeholder="+234..."
                />
              </div>

              {/* Company */}
              <div>
                <label className="block font-semibold text-brown-primary mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brown-primary/20 rounded-lg focus:outline-none focus:border-mustard transition-colors"
                  placeholder="Your company"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label className="block font-semibold text-brown-primary mb-2">
                Subject *
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-brown-primary/20 rounded-lg focus:outline-none focus:border-mustard transition-colors"
              >
                <option value="">Select a subject...</option>
                <option value="website">Website Design</option>
                <option value="app">App Development</option>
                <option value="support">IT Support</option>
                <option value="classes">Coding Classes</option>
                <option value="consultation">General Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block font-semibold text-brown-primary mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-brown-primary/20 rounded-lg focus:outline-none focus:border-mustard transition-colors resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2 text-lg"
            >
              <Send size={20} />
              Send Message
            </button>

            <p className="text-center text-dark-gray/60 text-sm mt-4">
              We typically respond within 24 business hours.
            </p>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-container">
        <h2 className="text-4xl font-bold text-brown-primary text-center mb-12">Visit Our Office</h2>
        <div className="bg-gradient-to-br from-brown-primary/10 to-mustard/10 h-72 md:h-96 rounded-2xl border-2 border-brown-primary/20 flex items-center justify-center overflow-hidden">
          <div className="text-center px-4 sm:px-0">
            <MapPin size={64} className="text-brown-primary mx-auto mb-4" />
            <p className="text-dark-gray text-lg font-semibold">
              Theodak Plaza, CBD, Abuja Nigeria
            </p>
            <p className="text-dark-gray/60 mt-2">
              Open Monday - Friday, 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container bg-cream mt-12 mb-16 py-12 rounded-xl">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto mt-12 space-y-6">
          {[
            {
              q: 'How long does a typical project take?',
              a: 'Project timelines vary depending on complexity and scope. Simple websites may take 2-4 weeks, while complex applications can take several months. We provide detailed timelines during the consultation phase.',
            },
            {
              q: 'Do you offer support after project completion?',
              a: 'Yes! We offer various support packages including maintenance, updates, and technical support. All projects come with a 30-day free support period.',
            },
            {
              q: 'What is your pricing model?',
              a: 'We offer flexible pricing models: hourly rates, fixed project fees, or retainer-based contracts. Pricing depends on project scope and complexity.',
            },
            {
              q: 'Can you work on existing projects?',
              a: 'Absolutely! We can audit, improve, or expand existing applications. We work with any technology stack and provide seamless integration.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border-l-4 border-mustard">
              <h3 className="font-bold text-lg text-brown-primary mb-2">{item.q}</h3>
              <p className="text-dark-gray/80">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
