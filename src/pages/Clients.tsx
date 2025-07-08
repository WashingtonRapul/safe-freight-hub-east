
import { Card, CardContent } from '@/components/ui/card';

const Clients = () => {
  const partnerCategories = [
    {
      title: 'Oil Marketing Companies (OMCs)',
      description: 'Strategic partnerships with leading petroleum distributors across East Africa',
      partners: [
        'Major International Oil Companies',
        'Regional Fuel Distributors',
        'Aviation Fuel Suppliers',
        'Marine Fuel Providers'
      ]
    },
    {
      title: 'Government Agencies',
      description: 'Trusted service provider for government fuel transportation needs',
      partners: [
        'Ministry of Energy',
        'Defense Forces',
        'Government Vehicle Fleets',
        'Public Service Providers'
      ]
    },
    {
      title: 'Industrial Clients',
      description: 'Reliable fuel supply solutions for industrial operations',
      partners: [
        'Manufacturing Companies',
        'Mining Operations',
        'Power Generation Plants',
        'Construction Companies'
      ]
    },
    {
      title: 'Commercial Retailers',
      description: 'Consistent fuel delivery to retail outlets and service stations',
      partners: [
        'Fuel Service Stations',
        'Retail Chain Outlets',
        'Highway Service Centers',
        'Rural Distribution Points'
      ]
    }
  ];

  const complianceBadges = [
    {
      title: 'ERC Licensed',
      subtitle: 'Energy & Petroleum Regulatory Authority',
      description: 'Fully licensed by Kenya\'s Energy and Petroleum Regulatory Authority for petroleum transportation',
      icon: '🛡️'
    },
    {
      title: 'NEMA Compliant',
      subtitle: 'National Environment Management Authority',
      description: 'Environmental compliance certification ensuring eco-friendly operations',
      icon: '🌱'
    },
    {
      title: 'NTSA Certified',
      subtitle: 'National Transport and Safety Authority',
      description: 'Transport safety certification for all our fleet vehicles and operations',
      icon: '🚛'
    },
    {
      title: 'ISO Certified',
      subtitle: 'International Standards Organization',
      description: 'Quality management system certification for consistent service delivery',
      icon: '⭐'
    }
  ];

  const testimonialHighlights = [
    {
      category: 'Reliability',
      statement: 'Consistent on-time delivery with zero compromise on safety standards',
      metric: '99.8% On-Time Delivery Rate'
    },
    {
      category: 'Safety Excellence',
      statement: 'Outstanding safety record with comprehensive risk management protocols',
      metric: 'Zero Major Incidents Record'
    },
    {
      category: 'Service Quality',
      statement: 'Professional service delivery with 24/7 customer support availability',
      metric: '98% Customer Satisfaction'
    },
    {
      category: 'Regional Coverage',
      statement: 'Extensive operational network covering all major East African markets',
      metric: '6 Countries Coverage'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Valued Clients</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Trusted by leading organizations across East Africa for reliable, 
              safe, and efficient petroleum logistics solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Client Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve a diverse range of clients across multiple sectors, 
              providing tailored solutions for each industry's unique requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerCategories.map((category, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{category.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="space-y-3">
                    {category.partners.map((partner, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                        <span className="text-gray-700">{partner}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Clients Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has earned the trust of leading organizations 
              across East Africa's petroleum supply chain.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonialHighlights.map((highlight, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold mb-3 text-primary">{highlight.category}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{highlight.statement}</p>
                  <div className="text-2xl font-bold text-accent">{highlight.metric}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Compliance & Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certifications and compliance badges demonstrate our commitment 
              to regulatory adherence and industry best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceBadges.map((badge, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{badge.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{badge.title}</h3>
                  <p className="text-sm text-primary font-semibold mb-3">{badge.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{badge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Metrics */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Client Success Metrics</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our performance metrics reflect our dedication to delivering exceptional 
              service to every client, every time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2 text-accent">100+</div>
              <p className="text-xl">Active Clients</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-accent">99.8%</div>
              <p className="text-xl">On-Time Delivery</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-accent">98%</div>
              <p className="text-xl">Customer Satisfaction</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-accent">24/7</div>
              <p className="text-xl">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our growing family of satisfied clients and experience the difference 
              of working with East Africa's premier petroleum logistics company.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Strategic Partnerships</h3>
                <p className="text-gray-600">Long-term strategic partnerships with mutual growth opportunities and shared success.</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Contract Services</h3>
                <p className="text-gray-600">Flexible contract arrangements tailored to meet specific operational requirements and timelines.</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Regional Expansion</h3>
                <p className="text-gray-600">Support for clients expanding across East African markets with comprehensive logistics solutions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Client Family?</h2>
          <p className="text-xl mb-8">
            Discover how Safe Freight Logistics can transform your petroleum 
            transportation requirements with our proven solutions.
          </p>
          <a 
            href="/contact" 
            className="bg-accent text-accent-foreground px-8 py-4 rounded-md font-semibold text-lg hover:bg-accent/90 transition-colors inline-block"
          >
            Become a Client Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Clients;
