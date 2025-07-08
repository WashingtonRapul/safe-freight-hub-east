
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Truck, Users, Box } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const services = [
    { name: 'Jet A1 Fuel Transport', icon: '✈️' },
    { name: 'AGO Delivery', icon: '🚛' },
    { name: 'PMS Distribution', icon: '⛽' },
    { name: 'LPG Haulage', icon: '🔥' },
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Safe Freight Logistics
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-semibold text-accent animate-fade-in">
            Know Safety, No Pain
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Leading petroleum logistics and transport company operating across East Africa. 
            Ensuring safe, reliable, and compliant fuel transportation services.
          </p>
          <Button 
            onClick={() => navigate('/contact')}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in"
          >
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Quick Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive petroleum logistics solutions across East Africa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
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
          <Button 
            onClick={() => navigate('/contact')}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
