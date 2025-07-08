
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const HSE = () => {
  const hseProtocols = [
    {
      title: 'Vehicle Safety Inspections',
      description: 'Comprehensive daily, weekly, and monthly vehicle inspections to ensure all safety systems are functioning properly.',
      icon: '🔍'
    },
    {
      title: 'Driver Training & Certification',
      description: 'Rigorous training programs for all drivers including defensive driving, hazardous materials handling, and emergency response.',
      icon: '👨‍🎓'
    },
    {
      title: 'Emergency Response Procedures',
      description: 'Detailed emergency response protocols and regular drills to ensure quick and effective response to any incidents.',
      icon: '🚨'
    },
    {
      title: 'Equipment Safety Audits',
      description: 'Regular audits of all safety equipment including fire suppression systems, spill containment, and emergency communication devices.',
      icon: '📋'
    },
    {
      title: 'Route Risk Assessment',
      description: 'Comprehensive risk assessment of all transport routes with contingency planning for various scenarios.',
      icon: '🗺️'
    },
    {
      title: 'Environmental Protection',
      description: 'Strict environmental protocols to prevent spillage and contamination, protecting the ecosystems we operate in.',
      icon: '🌱'
    }
  ];

  const complianceStandards = [
    'ADR (European Agreement on Dangerous Goods by Road)',
    'IMDG (International Maritime Dangerous Goods Code)',
    'ERC (Energy and Petroleum Regulatory Authority) Kenya',
    'NEMA (National Environment Management Authority)',
    'NTSA (National Transport and Safety Authority)',
    'ISO 45001 Occupational Health and Safety Management',
    'ISO 14001 Environmental Management Systems',
    'Local transportation authority regulations'
  ];

  const trainingPrograms = [
    'Hazardous Materials Transportation Certification',
    'Defensive Driving Techniques',
    'Emergency Response and First Aid',
    'Fire Safety and Suppression Systems',
    'Environmental Awareness and Spill Response',
    'Customer Service and Communication',
    'Vehicle Maintenance and Pre-trip Inspections',
    'Route Planning and Risk Assessment'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Health, Safety & Environment</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Our unwavering commitment to HSE excellence ensures the safety of our employees, 
              protection of the environment, and security of the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* HSE Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our HSE Commitment</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Safe Freight Logistics, Health, Safety, and Environment (HSE) is not just a policy - 
                it's the foundation of everything we do. Our motto "Know Safety, No Pain" reflects 
                our commitment to maintaining zero incidents through proactive safety measures.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We implement comprehensive HSE protocols that exceed industry standards, ensuring 
                the safety of our drivers, protection of transported materials, and preservation 
                of the environment across all our operational regions.
              </p>
              <div className="flex items-center text-primary font-semibold text-lg">
                <ArrowRight className="h-5 w-5 mr-2" />
                Zero incidents is our goal, excellence is our standard
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Safety training and protocols"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HSE Protocols */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">HSE Protocols & Procedures</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive safety protocols designed to prevent incidents and ensure 
              the highest standards of health, safety, and environmental protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hseProtocols.map((protocol, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{protocol.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900">{protocol.title}</h3>
                  </div>
                  <p className="text-gray-600 text-center leading-relaxed">{protocol.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Training */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Driver training and certification"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Driver Training & Certification</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our drivers undergo rigorous training and certification programs to ensure they 
                are fully equipped to handle the transportation of petroleum products safely 
                and efficiently.
              </p>
              
              <div className="space-y-3">
                {trainingPrograms.map((program, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                    <span className="text-gray-700">{program}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Compliance & Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain strict compliance with local and international regulations, 
              ensuring our operations meet or exceed all required standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">{standard}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Drills & Audits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Regular Drills & Equipment Audits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuous improvement through regular safety drills, equipment audits, 
              and performance evaluations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Monthly Safety Audits</h3>
                <p className="text-gray-600">Comprehensive safety audits conducted monthly to identify and address potential risks.</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">🏃‍♂️</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Emergency Drills</h3>
                <p className="text-gray-600">Regular emergency response drills to ensure all staff are prepared for any situation.</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Equipment Inspections</h3>
                <p className="text-gray-600">Daily equipment inspections and maintenance to ensure all safety systems are operational.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HSE Statistics */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">HSE Performance</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our commitment to safety excellence is reflected in our outstanding safety record.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2 text-accent">0</div>
              <p className="text-xl">Major Incidents</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-accent">100%</div>
              <p className="text-xl">Driver Certification</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-accent">24/7</div>
              <p className="text-xl">Safety Monitoring</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-accent">5⭐</div>
              <p className="text-xl">Safety Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Questions About Our HSE Standards?</h2>
          <p className="text-xl mb-8">
            Learn more about our comprehensive health, safety, and environmental protocols.
          </p>
          <a 
            href="/contact" 
            className="bg-accent text-accent-foreground px-8 py-4 rounded-md font-semibold text-lg hover:bg-accent/90 transition-colors inline-block"
          >
            Contact Our HSE Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default HSE;
