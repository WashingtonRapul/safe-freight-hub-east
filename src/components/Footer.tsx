
import { Mail, Truck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Truck className="h-8 w-8 text-accent mr-3" />
              <div>
                <h3 className="text-xl font-bold text-primary">Safe Freight Logistics Ltd</h3>
                <p className="text-accent text-sm">Know Safety, No Pain</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Leading petroleum logistics and transport company operating across East Africa. 
              We ensure safe, reliable, and compliant fuel transportation services.
            </p>
            <div className="text-gray-300">
              <p className="mb-2">Delta Office Suites, 2nd Floor, Block B</p>
              <p className="mb-2">Nairobi, Kenya</p>
              <div className="flex items-center mb-2">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:info@safefreight.com" className="hover:text-accent transition-colors">
                  info@safefreight.com
                </a>
              </div>
              <p>Phone: 0720437649</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Jet A1 Fuel Transport</li>
              <li>AGO Delivery</li>
              <li>PMS Distribution</li>
              <li>Kerosene Transport</li>
              <li>HFO Transport</li>
              <li>Bulk LPG Haulage</li>
            </ul>
          </div>

          {/* Operating Regions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Operating Regions</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Kenya</li>
              <li>Uganda</li>
              <li>Tanzania</li>
              <li>Rwanda</li>
              <li>South Sudan</li>
              <li>DRC</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Safe Freight Logistics Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
