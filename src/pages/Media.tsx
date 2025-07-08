
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Media = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const mediaItems = [
    {
      id: 1,
      type: 'Video',
      title: 'Fleet Safety Training Program',
      description: 'Comprehensive overview of our driver safety training and certification process.',
      date: '2024-01-15',
      category: 'Training',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      type: 'Ad',
      title: 'Safe Freight Logistics - Know Safety, No Pain',
      description: 'Brand commercial highlighting our commitment to safety excellence across East Africa.',
      date: '2024-01-10',
      category: 'Brand',
      thumbnail: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      type: 'Video',
      title: 'Modern Fleet Overview',
      description: 'Tour of our state-of-the-art petroleum tankers and safety equipment.',
      date: '2024-01-08',
      category: 'Fleet',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      type: 'Update',
      title: 'Expansion into South Sudan Market',
      description: 'Announcement of our new operations and service coverage in South Sudan.',
      date: '2024-01-05',
      category: 'Company News',
      thumbnail: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      type: 'Video',
      title: 'Environmental Protection Initiatives',
      description: 'Our commitment to environmental stewardship and sustainable operations.',
      date: '2024-01-03',
      category: 'Environment',
      thumbnail: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      type: 'Ad',
      title: 'Reliable Petroleum Logistics Solutions',
      description: 'Service advertisement showcasing our comprehensive logistics capabilities.',
      date: '2024-01-01',
      category: 'Services',
      thumbnail: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filterOptions = ['All', 'Videos', 'Ads', 'Company Updates'];

  const filteredItems = selectedFilter === 'All' 
    ? mediaItems 
    : mediaItems.filter(item => {
        if (selectedFilter === 'Videos') return item.type === 'Video';
        if (selectedFilter === 'Ads') return item.type === 'Ad';
        if (selectedFilter === 'Company Updates') return item.type === 'Update';
        return true;
      });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Media Center</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stay updated with our latest videos, promotional content, and company news. 
              Discover more about Safe Freight Logistics through our media gallery.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filterOptions.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter)}
                className={selectedFilter === filter ? "bg-primary text-white" : ""}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant={item.type === 'Video' ? 'default' : item.type === 'Ad' ? 'secondary' : 'outline'}
                      className={
                        item.type === 'Video' 
                          ? 'bg-primary text-white' 
                          : item.type === 'Ad' 
                            ? 'bg-accent text-accent-foreground' 
                            : 'bg-gray-600 text-white'
                      }
                    >
                      {item.type}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="secondary" size="sm">
                      {item.type === 'Video' ? 'Play Video' : item.type === 'Ad' ? 'View Ad' : 'Read More'}
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Section for Admin */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Content Management</h2>
            <p className="text-lg text-gray-600">
              Administrative section for uploading and managing media content.
            </p>
          </div>
          
          <Card className="p-8">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📹</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Video Upload</h3>
                  <p className="text-gray-600 text-sm">Upload promotional videos and training content</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📢</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Advertisement Management</h3>
                  <p className="text-gray-600 text-sm">Manage promotional advertisements and campaigns</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📰</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">News Updates</h3>
                  <p className="text-gray-600 text-sm">Post company updates and announcements</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Access Admin Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Follow Us</h2>
            <p className="text-lg text-gray-600">
              Stay connected with Safe Freight Logistics on social media for the latest updates.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="lg" className="flex items-center space-x-2">
              <span>📘</span>
              <span>Facebook</span>
            </Button>
            <Button variant="outline" size="lg" className="flex items-center space-x-2">
              <span>📸</span>
              <span>Instagram</span>
            </Button>
            <Button variant="outline" size="lg" className="flex items-center space-x-2">
              <span>🐦</span>
              <span>Twitter</span>
            </Button>
            <Button variant="outline" size="lg" className="flex items-center space-x-2">
              <span>💼</span>
              <span>LinkedIn</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Media Inquiries</h2>
          <p className="text-xl mb-8">
            For media inquiries, press releases, or content collaboration opportunities, 
            please get in touch with our communications team.
          </p>
          <a 
            href="/contact" 
            className="bg-accent text-accent-foreground px-8 py-4 rounded-md font-semibold text-lg hover:bg-accent/90 transition-colors inline-block"
          >
            Contact Media Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default Media;
