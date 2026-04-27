import { BookOpen, Users, Award, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Bootcamp from '../assets/bootcamp.jpg'

export default function CodingClasses() {
  return (
    <>
      <Helmet>
        <title>Coding Classes & Bootcamps - Learn Programming | Moob Consulting</title>
        <meta name="description" content="Professional coding classes and bootcamps in Abuja, Nigeria. Learn web development, app development, and programming skills from industry experts." />
        <meta name="keywords" content="coding classes Abuja, programming bootcamp, web development training, app development course, learn programming Nigeria" />
        <link rel="canonical" href="https://moobconsulting.com/coding-classes" />
      </Helmet>
      <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brown-primary to-brown-dark text-cream py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-400">Coding Classes</h1>
              <p className="text-xl text-cream/90 max-w-2xl">
                Learn coding skills from industry experts. Perfect for beginners and experienced programmers looking to expand their knowledge.
              </p>
            </div>

            <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-cream/20 aspect-[4/3] md:aspect-[5/3]">
              <img
                src={Bootcamp}
                alt="Coding class illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn */}
      <section className="section-container mt-16">
        <h2 className="section-title text-center">Why Learn With Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { icon: Users, title: 'Expert Instructors', desc: 'Learn from experienced professionals' },
            { icon: Clock, title: 'Flexible Timing', desc: 'Classes that fit your schedule' },
            { icon: Award, title: 'Certifications', desc: 'Recognized certificates upon completion' },
            { icon: BookOpen, title: 'Real Projects', desc: 'Hands-on learning with live projects' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-mustard">
              <item.icon size={40} className="text-mustard mb-4" />
              <h3 className="text-xl font-bold text-brown-primary mb-2">{item.title}</h3>
              <p className="text-dark-gray/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section className="section-container bg-cream mt-16">
        <h2 className="section-title text-center">Our Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: 'Python Fundamentals',
              level: 'Beginner to Intermediate',
              duration: '8 weeks',
              desc: 'Start your coding journey with Python. Learn syntax, data structures, and build real projects.',
              topics: ['Syntax & Variables', 'Functions & Modules', 'OOP Basics', 'File Handling'],
              image: 'python class.jpg',
            },
            {
              title: 'Web Development',
              level: 'Beginner to Advanced',
              duration: '12 weeks',
              desc: 'Build modern websites using HTML, CSS, and JavaScript. Create responsive, interactive web applications.',
              topics: ['HTML & CSS', 'JavaScript', 'React.js', 'Responsive Design'],
              image: 'webdevelopment class.jpg',
            },
            {
              title: 'Mobile App Development',
              level: 'Intermediate to Advanced',
              duration: '10 weeks',
              desc: 'Create native and cross-platform mobile applications for iOS and Android.',
              topics: ['React Native', 'App Architecture', 'APIs', 'Deployment'],
              image: 'mobile development class.jpg',
            },
            {
              title: 'Backend Development',
              level: 'Intermediate to Advanced',
              duration: '12 weeks',
              desc: 'Master server-side development with Node.js. Build scalable, secure backend systems.',
              topics: ['Node.js', 'Databases', 'REST APIs', 'Authentication'],
              image: 'backend class.jpg',
            },
            {
              title: 'Data Science & AI',
              level: 'Intermediate',
              duration: '10 weeks',
              desc: 'Learn data analysis, visualization, and machine learning with Python and popular libraries.',
              topics: ['Pandas & NumPy', 'Data Visualization', 'ML Algorithms', 'TensorFlow'],
              image: 'datascience class.jpg',
            },
            {
              title: 'Kids Coding',
              level: 'Complete Beginner',
              duration: 'Flexible',
              desc: 'Introduction to programming for children. Fun, interactive lessons using Scratch and Python.',
              topics: ['Logic & Problem Solving', 'Visual Programming', 'Game Development'],
              image: 'kids coding class.jpg',
            },
          ].map((course, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-brown-primary/10 flex flex-col h-full">
              <div className="aspect-[4/3] sm:aspect-[3/2] overflow-hidden">
                <img
                  src={new URL(`../assets/${course.image}`, import.meta.url).href}
                  alt={`${course.title} class`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div>
                  <h3 className="text-2xl font-bold text-brown-primary mb-2">{course.title}</h3>
                  <div className="flex flex-wrap gap-3 mb-4 text-sm">
                    <span className="bg-mustard/20 text-mustard px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                    <span className="bg-brown-primary/10 text-brown-primary px-3 py-1 rounded-full">
                      {course.duration}
                    </span>
                  </div>
                  <p className="text-dark-gray/80 mb-4">{course.desc}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-brown-primary mb-2 text-sm">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, i) => (
                      <span key={i} className="bg-cream text-dark-gray text-xs px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="mt-auto text-mustard font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Class Details */}
      <section className="section-container mt-16">
        <h2 className="section-title text-center">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {[
            { step: '1', title: 'Choose Your Course', desc: 'Select from our diverse range of programming courses' },
            { step: '2', title: 'Register Online', desc: 'Simple registration process with flexible payment options' },
            { step: '3', title: 'Start Learning', desc: 'Access course materials and join your first class' },
            { step: '4', title: 'Get Certified', desc: 'Complete projects and earn your course certificate' },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-mustard text-brown-primary rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-bold text-lg text-brown-primary mb-2">{item.title}</h3>
              <p className="text-dark-gray/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Info */}
      <section className="section-container bg-cream mt-16">
        <h2 className="section-title text-center">Affordable Pricing</h2>

        <div className="max-w-2xl mx-auto mt-12 bg-white p-8 rounded-xl border-2 border-mustard/20">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brown-primary text-center mb-4">For Nigerian Students</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-dark-gray">Short Courses (4-8 weeks)</span>
                  <span className="font-bold text-brown-primary">₦150,000 - ₦200,000</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-dark-gray">Standard Courses (10-12 weeks)</span>
                  <span className="font-bold text-brown-primary">₦250,000 - ₦300,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-dark-gray">Kids Coding (Per Month)</span>
                  <span className="font-bold text-brown-primary">₦50,000 - ₦70,000</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brown-primary text-center mb-4">For International Students</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-dark-gray">Short Courses (4-8 weeks)</span>
                  <span className="font-bold text-brown-primary">$200 - $400</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-dark-gray">Standard Courses (10-12 weeks)</span>
                  <span className="font-bold text-brown-primary">$500 - $700</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-dark-gray">Kids Coding (Per Month)</span>
                  <span className="font-bold text-brown-primary">$150 - $200</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center border-t pt-6">
            <div className="flex justify-center items-center mb-4">
              <span className="text-dark-gray mr-4">Group Discounts Available:</span>
              <span className="font-bold text-mustard">10-30% OFF</span>
            </div>
          </div>

          <p className="text-center text-dark-gray/70 text-sm mb-6">
            Flexible payment plans available. Scholarships for deserving students.
          </p>

          <div className="text-center">
            <Link to="/contact" className="btn-primary">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brown-primary text-cream py-16 mt-16">
        <div className="section-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Coding Journey?</h2>
          <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who've transformed their careers with our coding classes.
          </p>
          <Link to="/contact" className="btn-secondary">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}
