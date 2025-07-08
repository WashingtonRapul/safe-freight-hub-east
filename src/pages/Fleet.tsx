
import { Card, CardContent } from '@/components/ui/card';

const Fleet = () => {
  const fleetFeatures = [
    {
      title: 'Modern GPS-Tracked Petroleum Tankers',
      description: 'State-of-the-art tanker trucks equipped with advanced GPS tracking systems for real-time monitoring and route optimization.',
      features: ['Real-time GPS tracking', 'Route optimization', 'Temperature monitoring', 'Automated reporting']
    },
    {
      title: 'LPG Bulk Trailers',
      description: 'Specialized trailers designed for safe transportation of liquefied petroleum gas with advanced safety systems.',
      features: ['Pressure monitoring', 'Emergency shut-off valves', 'Temperature control', 'Safety certification']
    },
    {
      title: 'White Oil and HFO Compartments',
      description: 'Dedicated compartments for different fuel types ensuring product integrity and preventing cross-contamination.',
      features: ['Multi-compartment design', 'Product separation', 'Quality preservation', 'Easy cleaning systems']
    },
    {
      title: 'Emergency Response Kits',
      description: 'Comprehensive emergency response equipment installed in all vehicles to handle any unforeseen situations.',
      features: ['Fire suppression systems', 'Spill containment kits', 'First aid equipment', 'Communication devices']
    }
  ];

  const maintenanceFeatures = [
    'Regular preventive maintenance schedules',
    'ADR compliance certifications',
    'Vehicle safety inspections',
    'Driver training and certification',
    'Fleet management software',
    'Fuel efficiency monitoring'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Fleet</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Modern, well-maintained vehicles equipped with the latest safety 
              and tracking technology for reliable petroleum transportation.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Fleet Excellence</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our modern fleet of petroleum tankers and specialized vehicles represents 
                the latest in transportation technology and safety engineering. Every vehicle 
                is meticulously maintained and equipped with advanced monitoring systems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With GPS tracking, temperature monitoring, and emergency response systems, 
                our fleet ensures the safest and most efficient delivery of petroleum products 
                across East Africa.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern petroleum tanker fleet"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Fleet Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our vehicles are equipped with advanced technology and safety features 
              to ensure secure and efficient petroleum transportation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fleetFeatures.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance & Compliance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Fleet maintenance and compliance"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Maintenance & ADR Compliance</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We maintain the highest standards of vehicle maintenance and regulatory compliance. 
                Our fleet undergoes regular inspections and maintenance to ensure optimal performance 
                and safety standards.
              </p>
              
              <div className="space-y-3">
                {maintenanceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-4"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Fleet Statistics</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our impressive fleet numbers reflect our commitment to reliable service delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2 text-accent">50+</div>
              <p className="text-xl">Modern Vehicles</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-accent">100%</div>
              <p className="text-xl">GPS Tracked</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-accent">24/7</div>
              <p className="text-xl">Fleet Monitoring</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-accent">6</div>
              <p className="text-xl">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Need Transportation Services?</h2>
          <p className="text-xl mb-8">
            Our modern fleet is ready to handle your petroleum logistics requirements 
            with the highest standards of safety and efficiency.
          </p>
          <a 
            href="/contact" 
            className="bg-accent text-accent-foreground px-8 py-4 rounded-md font-semibold text-lg hover:bg-accent/90 transition-colors inline-block"
          >
            Request Fleet Services
          </a>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
