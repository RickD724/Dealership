import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  MapPin,
  Clock,
  TrendingDown,
  Eye,
  Unlock,
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail,
  AlertCircle
} from 'lucide-react';

const DealDetails = () => {
  const { id } = useParams();
  const { getListingById, unlockListing, isListingUnlocked } = useApp();
  const listing = getListingById(id);
  const [showUnlockModal, setShowUnlockModal] = useState(false);

  if (!listing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Listing Not Found
          </h2>
          <Link to="/browse" className="text-blue-600 hover:text-blue-700">
            Back to Browse
          </Link>
        </div>
      </div>
    );
  }

  const isUnlocked = isListingUnlocked(listing.id);

  const handleUnlock = (plan) => {
    unlockListing(listing.id);
    setShowUnlockModal(false);
    alert(`${plan} purchased! You now have access to unlock all deals.`);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/browse"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Browse
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image */}
            <div className="card overflow-hidden">
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-300 to-gray-400 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gray-500">
                      {listing.vehicle.make}
                    </div>
                    <div className="text-3xl text-gray-600">
                      {listing.vehicle.model}
                    </div>
                  </div>
                </div>
                
                {/* Condition Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-900 uppercase">
                    {listing.vehicle.condition}
                  </span>
                </div>

                {/* Deal Heat Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold flex items-center">
                    🔥 {listing.dealHeatScore}
                  </span>
                </div>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {listing.vehicle.year} {listing.vehicle.make} {listing.vehicle.model}
              </h1>
              <p className="text-xl text-gray-600">{listing.vehicle.trim}</p>
            </div>

            {/* Vehicle Details Grid */}
            <div className="card">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Exterior</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {listing.vehicle.exteriorColor}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Interior</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {listing.vehicle.interiorColor}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Mileage</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {listing.vehicle.mileage.toLocaleString()} mi
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Body Style</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {listing.vehicle.bodyStyle}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            {listing.features && listing.features.length > 0 && (
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {listing.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Vehicle Identification */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Vehicle Identification
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Stock Number</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {listing.inventory.stockNumber}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">VIN</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {listing.vehicle.vin}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="card">
              <div className="text-right mb-4">
                <p className="text-sm text-gray-500 line-through mb-1">
                  ${listing.pricing.msrp.toLocaleString()}
                </p>
                <p className="text-4xl font-bold text-gray-900 mb-2">
                  ${listing.pricing.sellingPrice.toLocaleString()}
                </p>
                <p className="text-lg text-green-600 font-semibold flex items-center justify-end">
                  <TrendingDown className="h-5 w-5 mr-1" />
                  Save ${listing.pricing.discount.toLocaleString()} ({listing.pricing.discountPercent.toFixed(1)}%)
                </p>
              </div>

              {/* Unlocked State */}
              {isUnlocked ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 mb-4">
                  <div className="flex items-center text-green-700 font-semibold mb-3">
                    <Unlock className="h-5 w-5 mr-2" />
                    Dealer Contact Unlocked
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Dealership</p>
                      <p className="font-semibold text-gray-900">{listing.dealerName}</p>
                    </div>
                    
                    <div className="flex items-center text-gray-900">
                      <Phone className="h-4 w-4 mr-2 text-gray-600" />
                      <a 
                        href={`tel:${listing.dealerPhone}`}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        {listing.dealerPhone}
                      </a>
                    </div>
                    
                    <div className="flex items-center text-gray-900">
                      <Mail className="h-4 w-4 mr-2 text-gray-600" />
                      <a 
                        href={`mailto:${listing.dealerEmail}`}
                        className="text-blue-600 hover:text-blue-700 break-all"
                      >
                        {listing.dealerEmail}
                      </a>
                    </div>
                  </div>

                  <button className="w-full mt-4 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                    Contact Dealer
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowUnlockModal(true)}
                  className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center justify-center"
                >
                  <Unlock className="h-5 w-5 mr-2" />
                  Unlock This Deal
                </button>
              )}
            </div>

            {/* Deal Stats */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Deal Stats</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold text-gray-900">{listing.dealerLocation}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Days in Stock</p>
                    <p className="font-semibold text-gray-900">{listing.inventory.daysInStock} days</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Eye className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Views</p>
                    <p className="font-semibold text-gray-900">{listing.views} times</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <TrendingDown className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Deal Heat Score</p>
                    <p className="font-semibold text-gray-900">{listing.dealHeatScore}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hot Deal Alert */}
            {listing.inventory.daysInStock > 90 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-1">Hot Deal Alert!</h4>
                    <p className="text-sm text-yellow-800">
                      This vehicle has been in inventory for {listing.inventory.daysInStock} days. 
                      The dealer is highly motivated to move it.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Unlock Modal */}
      {showUnlockModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                Choose Your Access Pass
              </h2>
              <p className="text-gray-600 mt-2">
                Get time-based access to unlock any deal on the marketplace
              </p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 3-Day Pass */}
                <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      3-Day Access
                    </h3>
                    <div className="text-3xl font-bold text-gray-900">
                      $49.99
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      Unlock any deal for 3 days
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      Full dealer contact info
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      Complete VIN access
                    </li>
                  </ul>
                  <button
                    onClick={() => handleUnlock('3-Day Access')}
                    className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                  >
                    Get 3-Day Access
                  </button>
                </div>

                {/* 7-Day Pass - Popular */}
                <div className="border-2 border-blue-600 rounded-lg p-6 relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      7-Day Access
                    </h3>
                    <div className="text-3xl font-bold text-gray-900">
                      $79.99
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      Unlock any deal for 7 days
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      Full dealer contact info
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      Complete VIN access
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      Best value
                    </li>
                  </ul>
                  <button
                    onClick={() => handleUnlock('7-Day Access')}
                    className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                  >
                    Get 7-Day Access
                  </button>
                </div>

                {/* 14-Day Pass */}
                <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      14-Day Access
                    </h3>
                    <div className="text-3xl font-bold text-gray-900">
                      $99.99
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      Unlock any deal for 14 days
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      Full dealer contact info
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      Complete VIN access
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      Maximum flexibility
                    </li>
                  </ul>
                  <button
                    onClick={() => handleUnlock('14-Day Access')}
                    className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                  >
                    Get 14-Day Access
                  </button>
                </div>
              </div>

              {/* Small Print */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700 text-center">
                  <strong>How it works:</strong> Your access pass unlocks all
                  deals on the marketplace during your active window. No
                  subscriptions, no per-deal charges. When your access expires,
                  deal details are masked again.
                </p>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setShowUnlockModal(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DealDetails;
