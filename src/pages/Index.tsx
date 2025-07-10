import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Truck, Users, Box, Shield, CheckCircle, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const services = [
    { name: 'Jet A1 Aviation Fuel Transport', icon: '✈️', description: 'Specialized aviation fuel delivery' },
    { name: 'Automotive Gas Oil (AGO) Delivery', icon: '🚛', description: 'Reliable diesel fuel distribution' },
    { name: 'Premium Motor Spirit (PMS) Distribution', icon: '⛽', description: 'Gasoline supply and delivery' },
    { name: 'Illuminating Kerosene (IK) Transport', icon: '🏮', description: 'Kerosene distribution services' },
    { name: 'Heavy Fuel Oil (HFO) Transport', icon: '🔥', description: 'Industrial fuel oil delivery' },
    { name: 'Bulk LPG Haulage', icon: '🔥', description: 'Safe LPG transportation' },
  ];

  const operationalCountries = [
    'Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'South Sudan', 'DRC'
  ];

  const clients = [
    { name: 'Dalbit Petroleum', logo: '/lovable-uploads/fa793fdc-c723-40a9-b149-36de802c5bda.png' },
    { name: 'Oil Hub', logo: '/lovable-uploads/0bcdc1f3-d47a-46de-9e6c-0e42b204c91d.png' },
    { name: 'Galana Energies', logo: '/lovable-uploads/72e5da85-7df6-4b9f-8bb3-f2bb80938f16.png' },
    { name: 'Leadway', logo: '/lovable-uploads/17957379-c46c-4915-952f-e856703952c4.png' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/29bd2abd-d36f-45fb-8701-ce230615f4e0.png" 
              alt="Safe Freight Logistics Logo" 
              className="h-20 w-20 mx-auto mb-4"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Safe Freight Logistics Ltd
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-semibold text-accent animate-fade-in">
            Know Safety, No Pain
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Leading petroleum logistics and transport company operating across East Africa. 
            Ensuring safe, reliable, and compliant fuel transportation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => navigate('/contact')}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on principles of safety excellence and operational reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 border-l-4 border-l-primary">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold mb-4 text-primary">Our Vision</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be the leading petroleum logistics company in East Africa, 
                  renowned for safety excellence, reliability, and environmental stewardship 
                  in fuel transportation and distribution.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-l-4 border-l-accent">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold mb-4 text-accent">Our Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To provide safe, efficient, and reliable petroleum logistics services 
                  across East Africa while maintaining the highest standards of safety, 
                  environmental compliance, and customer satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Trusted Clients */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Trusted Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proud to serve leading petroleum companies across East Africa with reliable and safe logistics solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <Card key={index} className="p-6 flex items-center justify-center hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-0 flex items-center justify-center">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} Logo`}
                    className="max-h-16 max-w-full object-contain"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => navigate('/clients')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              View All Clients <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Operational Regions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Operational Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving six East African countries with comprehensive logistics solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {operationalCountries.map((country, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold text-gray-900">{country}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive petroleum logistics solutions across East Africa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => navigate('/services')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2 text-gray-900">Safety First</h3>
                <p className="text-gray-600 text-sm">Zero compromise on safety standards</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Truck className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2 text-gray-900">Reliability</h3>
                <p className="text-gray-600 text-sm">Consistent service delivery</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2 text-gray-900">Integrity</h3>
                <p className="text-gray-600 text-sm">Honest and transparent practices</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2 text-gray-900">Customer Focus</h3>
                <p className="text-gray-600 text-sm">Exceeding expectations</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Box className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2 text-gray-900">Compliance</h3>
                <p className="text-gray-600 text-sm">Meeting all regulations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Truck className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="text-4xl font-bold mb-2">6</h3>
              <p className="text-xl">Countries Served</p>
            </div>
            <div>
              <Box className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-xl">Modern Fleet Vehicles</p>
            </div>
            <div>
              <Users className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="text-4xl font-bold mb-2">100+</h3>
              <p className="text-xl">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Get in touch today for reliable petroleum logistics solutions across East Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => navigate('/services')}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              View Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
