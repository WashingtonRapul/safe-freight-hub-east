
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Upload, Play, Plus, Video, FileText, Camera } from 'lucide-react';

const Media = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const mediaItems = [
    {
      id: 1,
      type: 'Company Video',
      title: 'Fleet Safety Training Program',
      description: 'Comprehensive overview of our driver safety training and certification process.',
      date: '2024-01-15',
      category: 'Training',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://youtube.com/watch?v=example1'
    },
    {
      id: 2,
      type: 'TV Ad',
      title: 'Safe Freight Logistics - Know Safety, No Pain',
      description: 'Brand commercial highlighting our commitment to safety excellence across East Africa.',
      date: '2024-01-10',
      category: 'Brand',
      thumbnail: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://youtube.com/watch?v=example2'
    },
    {
      id: 3,
      type: 'Company Video',
      title: 'Modern Fleet Overview',
      description: 'Tour of our state-of-the-art petroleum tankers and safety equipment.',
      date: '2024-01-08',
      category: 'Fleet',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://youtube.com/watch?v=example3'
    },
    {
      id: 4,
      type: 'Campaign',
      title: 'Environmental Protection Initiative Campaign',
      description: 'Our commitment to environmental stewardship and sustainable operations across East Africa.',
      date: '2024-01-05',
      category: 'Environment',
      thumbnail: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://youtube.com/watch?v=example4'
    },
    {
      id: 5,
      type: 'TV Ad',
      title: 'Reliable Petroleum Logistics Solutions',
      description: 'Service advertisement showcasing our comprehensive logistics capabilities.',
      date: '2024-01-03',
      category: 'Services',
      thumbnail: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://youtube.com/watch?v=example5'
    },
    {
      id: 6,
      type: 'Company Video',
      title: 'East Africa Operations Expansion',
      description: 'Documentary covering our expansion across six East African countries.',
      date: '2024-01-01',
      category: 'Company News',
      thumbnail: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://youtube.com/watch?v=example6'
    }
  ];

  const filterOptions = ['All', 'Company Videos', 'TV Ads', 'Campaigns'];

  const filteredItems = selectedFilter === 'All' 
    ? mediaItems 
    : mediaItems.filter(item => {
        if (selectedFilter === 'Company Videos') return item.type === 'Company Video';
        if (selectedFilter === 'TV Ads') return item.type === 'TV Ad';
        if (selectedFilter === 'Campaigns') return item.type === 'Campaign';
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

      {/* CMS Upload Section - Admin Only */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Content Management System</h2>
              <p className="text-lg text-gray-600">
                Upload and manage your media content - Videos, TV Ads, and Campaigns
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center border-2 border-dashed border-gray-300 hover:border-primary transition-colors">
                <CardContent className="p-0">
                  <Video className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Company Videos</h3>
                  <p className="text-gray-600 text-sm mb-4">Upload training videos, fleet tours, and company documentaries</p>
                  <Button className="bg-primary text-white hover:bg-primary/90">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Video
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center border-2 border-dashed border-gray-300 hover:border-accent transition-colors">
                <CardContent className="p-0">
                  <Camera className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-lg font-semibold mb-2">TV Advertisements</h3>
                  <p className="text-gray-600 text-sm mb-4">Upload TV commercials and brand advertisements</p>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Ad
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center border-2 border-dashed border-gray-300 hover:border-primary transition-colors">
                <CardContent className="p-0">
                  <FileText className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Campaign Content</h3>
                  <p className="text-gray-600 text-sm mb-4">Upload campaign videos and promotional content</p>
                  <Button className="bg-primary text-white hover:bg-primary/90">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Campaign
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="h-16 w-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Drag & Drop Media Files</h3>
              <p className="text-gray-500 mb-4">
                Supports YouTube/Vimeo links, MP4 uploads, and embedded video content
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Add YouTube Link
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload MP4 File
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filterOptions.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter)}
                className={selectedFilter === filter ? "bg-primary text-white" : "border-primary text-primary hover:bg-primary hover:text-white"}
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
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant={item.type === 'Company Video' ? 'default' : item.type === 'TV Ad' ? 'secondary' : 'outline'}
                      className={
                        item.type === 'Company Video' 
                          ? 'bg-primary text-white' 
                          : item.type === 'TV Ad' 
                            ? 'bg-accent text-accent-foreground' 
                            : 'bg-gray-600 text-white'
                      }
                    >
                      {item.type}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="secondary" size="lg" className="text-white bg-primary hover:bg-primary/90">
                      <Play className="h-5 w-5 mr-2" />
                      Watch Now
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

      {/* YouTube/Vimeo Integration Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Video Platform Integration</h2>
            <p className="text-lg text-gray-600">
              Seamlessly integrate content from YouTube, Vimeo, and direct MP4 uploads
            </p>
          </div>
          
          <Card className="p-8">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">▶</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">YouTube Integration</h3>
                  <p className="text-gray-600 text-sm">Embed YouTube videos directly with automatic thumbnail generation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">V</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Vimeo Support</h3>
                  <p className="text-gray-600 text-sm">Professional video hosting with high-quality playback</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">📁</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Direct Upload</h3>
                  <p className="text-gray-600 text-sm">Upload MP4 files directly to your media library</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Follow Us on Social Media</h2>
            <p className="text-lg text-gray-600">
              Stay connected with Safe Freight Logistics for the latest updates and behind-the-scenes content.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="lg" className="flex items-center space-x-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <span>📘</span>
              <span>Facebook</span>
            </Button>
            <Button variant="outline" size="lg" className="flex items-center space-x-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white">
              <span>📸</span>
              <span>Instagram</span>
            </Button>
            <Button variant="outline" size="lg" className="flex items-center space-x-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
              <span>🐦</span>
              <span>Twitter</span>
            </Button>
            <Button variant="outline" size="lg" className="flex items-center space-x-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
              <span>💼</span>
              <span>LinkedIn</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Media Inquiries & Partnerships</h2>
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
