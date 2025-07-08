
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, Truck, Box, Film } from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: <ArrowRight className="h-8 w-8 text-accent" />,
      title: 'Safety',
      description: 'Safety is our top priority in all operations and transportation activities.'
    },
    {
      icon: <Truck className="h-8 w-8 text-accent" />,
      title: 'Reliability',
      description: 'Consistent, dependable service delivery across all our operational regions.'
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: 'Integrity',
      description: 'Honest, transparent business practices and ethical conduct in all dealings.'
    },
    {
      icon: <Box className="h-8 w-8 text-accent" />,
      title: 'Customer Focus',
      description: 'Dedicated to exceeding customer expectations and building long-term partnerships.'
    },
    {
      icon: <Film className="h-8 w-8 text-accent" />,
      title: 'Compliance',
      description: 'Strict adherence to local and international regulations and industry standards.'
    }
  ];

  const regions = [
    'Kenya - Our headquarters in Nairobi',
    'Uganda - Comprehensive logistics coverage',
    'Tanzania - Strategic transport routes',
    'Rwanda - Growing market presence',
    'South Sudan - Specialized fuel delivery',
    'DRC - Cross-border logistics expertise'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Safe Freight Logistics</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Leading petroleum logistics company ensuring safe, reliable, and compliant 
              fuel transportation across East Africa since our establishment.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Safe Freight Logistics Ltd is a premier petroleum logistics and transport company 
                headquartered in Nairobi, Kenya. We specialize in the safe transportation and 
                distribution of petroleum products across East Africa.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With our modern fleet of GPS-tracked petroleum tankers and commitment to safety excellence, 
                we have established ourselves as a trusted partner for major oil marketing companies 
                and fuel distributors throughout the region.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our motto "Know Safety, No Pain" reflects our unwavering commitment to maintaining 
                the highest safety standards while delivering exceptional logistics services to our clients.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Petroleum logistics operations"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Operational Regions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Operational Regions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We operate across six East African countries, providing comprehensive 
              petroleum logistics solutions throughout the region.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {region.split(' - ')[0]}
                    </h3>
                  </div>
                  <p className="text-gray-600">{region.split(' - ')[1]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
          <p className="text-xl mb-8">
            Experience the difference of working with East Africa's leading petroleum logistics company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/services" 
              className="bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold hover:bg-accent/90 transition-colors"
            >
              Our Services
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
