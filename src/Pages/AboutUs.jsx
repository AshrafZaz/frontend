import React from 'react';
import { Users, Award, Globe, Eye } from 'lucide-react';
import { Footer, Header } from '../components';

const stats = [
  {
    icon: <Users className='h-8 w-8' />,
    value: '50,000+',
    label: 'Happy Customers',
  },
  {
    icon: <Award className='h-8 w-8' />,
    value: '15+',
    label: 'Years Experience',
  },
  {
    icon: <Globe className='h-8 w-8' />,
    value: '100+',
    label: 'Countries Served',
  },
  {
    icon: <Eye className='h-8 w-8' />,
    value: '10,000+',
    label: 'Frames Sold Monthly',
  },
];

export function AboutUs() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-yellow-50'>
      <Header />

      {/* Main Content */}
      <div className='container mx-auto px-4 py-16'>
        {/* Hero Section */}
        <section className='mb-20 text-center'>
          <h1 className='text-5xl font-bold mb-6 text-gray-900'>
            About Classic Optics
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            A passion for vision. A commitment to style. A dedication to
            seeing the world more clearly.
          </p>
        </section>

        {/* Our Story */}
        <section className='mb-20'>
          <div className='max-w-4xl mx-auto text-center bg-white rounded-3xl p-12 shadow-lg'>
            <h2 className='text-4xl font-bold mb-6 text-gray-900'>Our Story</h2>
            <div className='space-y-6 text-gray-600 leading-relaxed'>
              <p>
                Founded in 2020, Classic Optics emerged from a simple vision:
                to provide customers with access to high-quality eyewear
                without compromise. What started as a small local optical shop
                has grown into a trusted platform serving eyewear enthusiasts
                in over 100 countries.
              </p>
              <p>
                Our commitment to quality, expertise in optical craftsmanship,
                and dedication to customer satisfaction has made us a leading
                name in the eyewear community. We're not just selling glasses—
                we're helping people see the world better, one frame at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className='mb-20'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-4xl font-bold mb-16 text-center text-gray-900'>
              By The Numbers
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className='bg-white rounded-2xl p-8 text-center shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl'
                >
                  <div className='inline-flex p-4 bg-yellow-100 text-yellow-600 rounded-full mb-6'>
                    {stat.icon}
                  </div>
                  <div className='text-5xl font-bold text-gray-900 mb-3'>
                    {stat.value}
                  </div>
                  <div className='text-gray-600 font-medium text-lg'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className='mb-20'>
          <div className='max-w-4xl mx-auto bg-yellow-600 rounded-3xl p-12 text-center text-white'>
            <h2 className='text-4xl font-bold mb-8'>
              Our Commitment to Customers
            </h2>
            <p className='text-xl mb-10 leading-relaxed'>
              At Classic Optics, we believe great vision comes down to the
              perfect balance of style, comfort, and optical precision.
            </p>
            <div className='grid md:grid-cols-2 gap-8'>
              {[
                {
                  title: 'Prescription Eyeglasses',
                  description:
                    'Expertly crafted prescription frames tailored to your vision needs—combining optical accuracy with timeless style for everyday clarity.',
                },
                {
                  title: 'Designer Sunglasses',
                  description:
                    'Shield your eyes in style with our curated collection of UV-protective sunglasses, designed for both fashion-forward looks and long-lasting protection.',
                },
                {
                  title: 'Contact Lenses',
                  description:
                    'Experience freedom of sight with our wide range of daily, weekly, and monthly contact lenses suited for all prescriptions and lifestyles.',
                },
                {
                  title: 'Lens & Frame Care',
                  description:
                    'Keep your eyewear in peak condition with our premium cleaning kits, protective cases, and professional maintenance accessories.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className='bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.02]'
                >
                  <h3 className='text-2xl font-semibold mb-4'>{item.title}</h3>
                  <p className='text-yellow-100 leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className='mb-20'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl font-bold mb-16 text-gray-900'>
              Our Values
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              {[
                {
                  title: 'Quality First',
                  description:
                    'We never compromise on quality. Every frame and lens we offer meets rigorous optical standards for clarity, durability, and performance.',
                },
                {
                  title: 'Customer Success',
                  description:
                    'Your vision is our priority. We provide expert guidance to help you find the perfect eyewear that fits your lifestyle and prescription.',
                },
                {
                  title: 'Innovation',
                  description:
                    'We continuously update our collections with the latest advancements in lens technology, frame materials, and optical design.',
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className='bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:scale-[1.02]'
                >
                  <div className='h-24 w-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                    <div className='text-3xl font-bold text-yellow-600'>
                      {index + 1}
                    </div>
                  </div>
                  <h3 className='text-2xl font-semibold mb-4 text-gray-800'>
                    {value.title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className='mb-20'>
          <div className='max-w-4xl mx-auto bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-3xl p-12 text-center text-white shadow-xl'>
            <h2 className='text-4xl font-bold mb-6'>Our Mission</h2>
            <blockquote className='text-2xl italic leading-relaxed'>
              "To empower our customers across the nation by providing access to
              premium eyewear, expert optical knowledge, and exceptional
              service—making every perspective clearer than the last."
            </blockquote>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;