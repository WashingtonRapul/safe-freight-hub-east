
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: '✈️',
      title: 'Jet A1 Fuel Transport',
      description: 'Specialized transportation of aviation fuel with strict safety protocols and temperature-controlled delivery systems for airports and aviation facilities.'
    },
    {
      icon: '🚛',
      title: 'Automotive Gas Oil Delivery (AGO)',
      description: 'Reliable delivery of diesel fuel for industrial, commercial, and automotive applications across East Africa with GPS tracking and real-time monitoring.'
    },
    {
      icon: '⛽',
      title: 'Premium Motor Spirit Distribution (PMS)',
      description: 'Safe and efficient distribution of gasoline to retail stations, ensuring quality preservation and timely delivery to meet market demands.'
    },
    {
      icon: '🏮',
      title: 'Illuminating Kerosene Transport (IK)',
      description: 'Dedicated kerosene transportation services for household and industrial use, maintaining product integrity throughout the supply chain.'
    },
    {
      icon: '🔥',
      title: 'Heavy Fuel Oil (HFO) Transport',
      description: 'Specialized handling and transportation of heavy fuel oil for power generation and industrial applications with temperature management systems.'
    },
    {
      icon: '🔥',
      title: 'Bulk LPG Haulage',
      description: 'Safe transportation of liquefied petroleum gas in compliance with international safety standards and regulations for domestic and commercial use.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive petroleum logistics solutions designed to meet the diverse 
              needs of our clients across East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in the safe transportation and distribution of various petroleum 
              products, ensuring compliance with international safety standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Choose Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and safety makes us the preferred choice 
              for petroleum logistics across East Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Round-the-Clock Service</h3>
              <p className="text-gray-600">Continuous operations to meet your urgent delivery needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600">Strict adherence to safety protocols and industry standards.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📍</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">GPS Tracking</h3>
              <p className="text-gray-600">Real-time tracking and monitoring of all deliveries.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✅</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Compliance</h3>
              <p className="text-gray-600">Full compliance with local and international regulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your petroleum logistics requirements 
            and discover how we can serve your business.
          </p>
          <a 
            href="/contact" 
            className="bg-accent text-accent-foreground px-8 py-4 rounded-md font-semibold text-lg hover:bg-accent/90 transition-colors inline-block"
          >
            Get Quote Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
