// components/HomeComponent.jsx
"use client";

import { useEffect } from 'react';


const HomeComponent = () => {
  // Initialize animations on mount
  useEffect(() => {
    const initAnimations = async () => {
      // Dynamically import AOS
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out'
      });
    };
    
    initAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#e1f5fe] font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-[#2ecc71] flex items-center justify-center">
              <i className="fas fa-leaf text-white text-xl"></i>
            </div>
            <span className="text-2xl font-bold text-gray-800">
             Proove
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-[#2ecc71] font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-[#2ecc71] font-medium">Leaderboard</a>
            <a href="#" className="text-gray-600 hover:text-[#2ecc71] font-medium">Activities</a>
            <a href="#" className="text-gray-600 hover:text-[#2ecc71] font-medium">My Impact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              <i className="fas fa-wallet mr-2"></i>Connect Wallet
            </button>
            <button className="md:hidden text-gray-600">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#2ecc71] to-[#3498db] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            Prove Your <span className="bg-gradient-to-r from-[#3498db] to-[#2ecc71] px-4 py-2 animate-text-fade rounded-full">Sustainability</span> Impact
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-10 opacity-90" data-aos="fade-up" data-aos-delay="100">
            Track sustainable actions, earn verifiable impact points, and receive exclusive Soulbound NFTs for your environmental contributions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <button className="bg-white text-[#2ecc71] hover:bg-gray-100 font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              <i className="fas fa-chart-line mr-2"></i>View Leaderboard
            </button>
            <button className="border-2 border-white bg-transparent hover:bg-white hover:text-[#2ecc71] font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              <i className="fas fa-plus-circle mr-2"></i>Log Activity
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Impact Makers Leaderboard */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
              <i className="fas fa-trophy text-[#2ecc71] mr-3"></i> Top Impact Makers
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Leaderboard Header */}
              <div className="grid grid-cols-12 bg-gray-100 p-4 font-bold text-gray-700">
                <div className="col-span-1">Rank</div>
                <div className="col-span-5">User</div>
                <div className="col-span-3">Impact Score</div>
                <div className="col-span-3">Sustainable Actions</div>
              </div>
              
              {/* Leaderboard Entries */}
              <div className="divide-y">
                {/* Top 1 */}
                <div className="grid grid-cols-12 items-center p-4 hover:bg-green-50 transition-all" data-aos="fade-right">
                  <div className="col-span-1">
                    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                      <span className="font-bold text-white">1</span>
                    </div>
                  </div>
                  <div className="col-span-5 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#3498db] flex items-center justify-center text-white font-bold mr-3">
                      EC
                    </div>
                    <div>
                      <div className="font-bold">EcoChampion</div>
                      <div className="text-sm text-gray-500">@ecochamp</div>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: '98%' }}></div>
                      </div>
                      <span className="font-bold">9,850</span>
                    </div>
                  </div>
                  <div className="col-span-3 text-[#2ecc71] font-bold">
                    142 actions
                  </div>
                </div>
                
                {/* Top 2 */}
                <div className="grid grid-cols-12 items-center p-4 hover:bg-green-50 transition-all" data-aos="fade-right" data-aos-delay="100">
                  <div className="col-span-1">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="font-bold text-gray-600">2</span>
                    </div>
                  </div>
                  <div className="col-span-5 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#2ecc71] flex items-center justify-center text-white font-bold mr-3">
                      GA
                    </div>
                    <div>
                      <div className="font-bold">GreenAdvocate</div>
                      <div className="text-sm text-gray-500">@greenadv</div>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                      <span className="font-bold">9,210</span>
                    </div>
                  </div>
                  <div className="col-span-3 text-[#2ecc71] font-bold">
                    128 actions
                  </div>
                </div>
                
                {/* Top 3 */}
                <div className="grid grid-cols-12 items-center p-4 hover:bg-green-50 transition-all" data-aos="fade-right" data-aos-delay="200">
                  <div className="col-span-1">
                    <div className="w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center">
                      <span className="font-bold text-white">3</span>
                    </div>
                  </div>
                  <div className="col-span-5 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#27ae60] flex items-center justify-center text-white font-bold mr-3">
                      SE
                    </div>
                    <div>
                      <div className="font-bold">SustainableElla</div>
                      <div className="text-sm text-gray-500">@sustainable_ella</div>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="font-bold">8,540</span>
                    </div>
                  </div>
                  <div className="col-span-3 text-[#2ecc71] font-bold">
                    119 actions
                  </div>
                </div>
                
                {/* Additional entries */}
                <div className="grid grid-cols-12 items-center p-4 hover:bg-green-50 transition-all" data-aos="fade-right" data-aos-delay="300">
                  <div className="col-span-1 text-gray-500 font-bold">4</div>
                  <div className="col-span-5 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#3498db] flex items-center justify-center text-white font-bold mr-3">
                      RT
                    </div>
                    <div>
                      <div className="font-bold">RecycleTom</div>
                      <div className="text-sm text-gray-500">@recycletom</div>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-[#3498db] h-2.5 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                      <span className="font-bold">7,810</span>
                    </div>
                  </div>
                  <div className="col-span-3 text-[#2ecc71] font-bold">
                    105 actions
                  </div>
                </div>
                
                <div className="grid grid-cols-12 items-center p-4 hover:bg-green-50 transition-all" data-aos="fade-right" data-aos-delay="400">
                  <div className="col-span-1 text-gray-500 font-bold">5</div>
                  <div className="col-span-5 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#2ecc71] flex items-center justify-center text-white font-bold mr-3">
                      EW
                    </div>
                    <div>
                      <div className="font-bold">EcoWarrior</div>
                      <div className="text-sm text-gray-500">@ecowarrior</div>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-green-300 h-2.5 rounded-full" style={{ width: '72%' }}></div>
                      </div>
                      <span className="font-bold">7,250</span>
                    </div>
                  </div>
                  <div className="col-span-3 text-[#2ecc71] font-bold">
                    98 actions
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Log Activity and NFT Display */}
          <div className="space-y-8">
            {/* Log Activity Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl" data-aos="fade-left">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <i className="fas fa-plus-circle text-[#3498db] mr-3"></i> Log Sustainable Activity
              </h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Activity Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3498db] focus:border-transparent">
                    <option value="">Select activity</option>
                    <option value="recycling">Recycling</option>
                    <option value="energy">Renewable Energy Use</option>
                    <option value="transport">Sustainable Transport</option>
                    <option value="conservation">Water Conservation</option>
                    <option value="tree">Tree Planting</option>
                    <option value="waste">Waste Reduction</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Description</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3498db] focus:border-transparent h-32" 
                    placeholder="Describe your sustainable action..."
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Verification Method</label>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center">
                      <input type="radio" id="iot" name="verification" className="mr-2"/>
                      <label htmlFor="iot" className="flex items-center">
                        <i className="fas fa-microchip text-[#2ecc71] mr-1"></i> IoT Device
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="chainlink" name="verification" className="mr-2"/>
                      <label htmlFor="chainlink" className="flex items-center">
                        <i className="fas fa-link text-[#3498db] mr-1"></i> Chainlink Oracle
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="manual" name="verification" className="mr-2"/>
                      <label htmlFor="manual" className="flex items-center">
                        <i className="fas fa-user-check text-gray-600 mr-1"></i> Manual Review
                      </label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Upload Evidence (Optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-[#2ecc71] transition-colors">
                    <i className="fas fa-cloud-upload-alt text-3xl text-gray-400 mb-2"></i>
                    <p className="text-gray-500">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-400">PNG, JPG, PDF up to 10MB</p>
                  </div>
                </div>
                
                <button type="submit" className="bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 w-full mt-4">
                  <i className="fas fa-check-circle mr-2"></i> Submit Activity
                </button>
              </form>
            </div>
            
            {/* Soulbound NFT Display */}
            <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl" data-aos="fade-left" data-aos-delay="200">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <i className="fas fa-medal text-[#2ecc71] mr-3"></i> Your Sustainability NFT
              </h2>
              
              <div className="text-center">
                <div className="relative mx-auto w-64 h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2ecc71] to-[#3498db] rounded-xl transform rotate-6"></div>
                  <div className="relative w-full h-full bg-white rounded-xl border-4 border-white shadow-xl overflow-hidden">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
                      <div className="text-center p-4">
                        <i className="fas fa-leaf text-4xl text-[#2ecc71] mb-2"></i>
                        <p className="text-gray-500">Soulbound NFT</p>
                        <p className="text-xs text-gray-400">Placeholder Image</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-bold text-xl">Guardian of the Earth</h3>
                  <p className="text-gray-600 mt-2">This Soulbound NFT represents your commitment to sustainability and verifiable impact on the environment.</p>
                  
                  <div className="mt-4 flex justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#2ecc71]">142</div>
                      <div className="text-gray-500 text-sm">Actions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#3498db]">9,850</div>
                      <div className="text-gray-500 text-sm">Impact Points</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#27ae60]">5</div>
                      <div className="text-gray-500 text-sm">Level</div>
                    </div>
                  </div>
                </div>
                
                <button className="bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 mt-6">
                  <i className="fas fa-share-alt mr-2"></i> Share Achievement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800" data-aos="fade-up">Global Sustainability Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4" data-aos="fade-up" data-aos-delay="100">Join thousands of eco-conscious individuals making a measurable difference</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg" data-aos="zoom-in">
              <div className="text-5xl font-bold text-[#2ecc71] mb-2">12,589</div>
              <div className="text-gray-600">Sustainable Actions Logged</div>
              <div className="mt-4 h-1 bg-[#2ecc71] rounded-full w-16 mx-auto"></div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg" data-aos="zoom-in" data-aos-delay="100">
              <div className="text-5xl font-bold text-[#3498db] mb-2">8,426</div>
              <div className="text-gray-600">Active Contributors</div>
              <div className="mt-4 h-1 bg-[#3498db] rounded-full w-16 mx-auto"></div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg" data-aos="zoom-in" data-aos-delay="200">
              <div className="text-5xl font-bold text-[#27ae60] mb-2">3.2M</div>
              <div className="text-gray-600">KG CO2 Reduced</div>
              <div className="mt-4 h-1 bg-[#27ae60] rounded-full w-16 mx-auto"></div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg" data-aos="zoom-in" data-aos-delay="300">
              <div className="text-5xl font-bold text-[#2ecc71] mb-2">96,854</div>
              <div className="text-gray-600">Soulbound NFTs Minted</div>
              <div className="mt-4 h-1 bg-[#2ecc71] rounded-full w-16 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#2ecc71] flex items-center justify-center">
                  <i className="fas fa-leaf text-white text-xl"></i>
                </div>
                <span className="text-2xl font-bold">Proove</span>
              </div>
              <p className="text-gray-400">Verifiable sustainability impact on the blockchain. Prove your eco-actions with Soulbound NFTs.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Leaderboard</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Log Activity</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">My Impact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Marketplace</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sustainability Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Partners</h3>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-700 rounded-lg p-3">
                  <i className="fab fa-ethereum text-2xl text-purple-500"></i>
                </div>
                <div className="bg-gray-700 rounded-lg p-3">
                  <i className="fas fa-link text-2xl text-blue-400"></i>
                </div>
                <div className="bg-gray-700 rounded-lg p-3">
                  <i className="fas fa-solar-panel text-2xl text-yellow-500"></i>
                </div>
                <div className="bg-gray-700 rounded-lg p-3">
                  <i className="fas fa-recycle text-2xl text-green-500"></i>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl"><i className="fab fa-discord"></i></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl"><i className="fab fa-telegram"></i></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
            <p>© 2025 Proove. Bringing verifiable sustainability to the blockchain.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeComponent;
