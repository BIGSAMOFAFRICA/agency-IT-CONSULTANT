import { Award, Target, Heart, Zap } from 'lucide-react'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brown-primary to-brown-dark text-cream py-16 md:py-24">
        <div className="section-container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Moob Consulting</h1>
          <p className="text-xl text-cream/90 max-w-2xl">
            Founded in 2026, we're an international IT consultancy driven by passion for technology and commitment to excellence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-container">
        <div className="space-y-16 mt-12 mb-16">
          {/* Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brown-primary mb-4">Our Mission</h2>
              <p className="text-dark-gray/80 text-lg leading-relaxed">
                To empower businesses and individuals through innovative IT solutions, exceptional service delivery, and comprehensive educational programs that build lasting partnerships and drive sustainable growth.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden h-72">
              <img
                src={new URL(`../assets/mission.jpg`, import.meta.url).href}
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden h-72 md:order-2">
              <img
                src={new URL(`../assets/vision.jpg`, import.meta.url).href}
                alt="Our Vision"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold text-brown-primary mb-4">Our Vision</h2>
              <p className="text-dark-gray/80 text-lg leading-relaxed">
                To be the most trusted IT consulting partner in Africa and beyond, recognized for delivering cutting-edge technology solutions with uncompromising quality and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-container bg-cream mb-16">
        <h2 className="section-title text-center">Our Core Values</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { icon: Heart, title: 'Excellence', desc: 'Commitment to highest quality in all we do' },
            { icon: Zap, title: 'Innovation', desc: 'Constant pursuit of cutting-edge solutions' },
            { icon: Target, title: 'Integrity', desc: 'Transparent and honest in all dealings' },
            { icon: Award, title: 'Partnership', desc: 'True collaboration with our clients' },
          ].map((value, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-center">
              <value.icon size={40} className="text-mustard mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brown-primary mb-2">{value.title}</h3>
              <p className="text-dark-gray/70 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-container mb-16">
        <div className="bg-white border-2 border-brown-primary/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-brown-primary mb-6">Who We Are</h2>

          <div className="space-y-6 text-dark-gray/80 text-lg">
            <p>
              Moob Consulting LLC is an international information technology consultancy firm with presence in Nigeria and the United States. We specialize in delivering comprehensive IT solutions that transform businesses and educate the next generation of technology professionals.
            </p>

            <p>
              Founded in 2026, our team brings together seasoned professionals with diverse expertise in web design, application development, IT infrastructure, and technology education. We pride ourselves on understanding the unique challenges faced by businesses in emerging markets and delivering solutions that are both innovative and practical.
            </p>

            <p>
              Our approach combines strategic thinking, technical excellence, and a genuine commitment to our clients' success. Whether you're a startup looking to establish your digital presence or an established organization seeking to modernize your technology infrastructure, we have the expertise and passion to help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-container bg-cream mb-16">
        <h2 className="section-title text-center">Global Presence</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-mustard">
            <h3 className="text-2xl font-bold text-brown-primary mb-4">Nigeria</h3>
            <p className="text-dark-gray/80 mb-4">
              Theodak Plaza, Central Business District, Abuja
            </p>
            <p className="text-dark-gray/80">
              Serving clients across Nigeria with local expertise and international standards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-brown-primary">
            <h3 className="text-2xl font-bold text-brown-primary mb-4">United States</h3>
            <p className="text-dark-gray/80 mb-4">
              Operating across major US markets
            </p>
            <p className="text-dark-gray/80">
              Bringing African expertise to the global market with American operational standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
