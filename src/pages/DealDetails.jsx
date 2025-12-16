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
  Heart
} from 'lucide-react';

const DealDetails = () => {
  const { id } = useParams();
  const { getListingById, unlockListing, isListingUnlocked } = useApp();
  const listing = getListingById(id);
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

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

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
    console.log('Favorited:', listing.id);
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
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Images */}
            <div className="card overflow-hidden">
              <div className="relative bg-gradient-to-br from-gray-300 to-gray-400 h-96 flex items-center justify-center">
                {/* Favorite Button */}
                <button
                  onClick={handleFavoriteClick}
                  className={`absolute top-4 right-4 p-3 rounded-full transition-all z-10 ${
                    isFavorited
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Heart
                    className={`h-6 w-6 ${isFavorited ? 'fill-current' : ''}`}
                  />
                </button>

                <div className="text-center">
                  <div className="text-6xl font-bold text-gray-500">
                    {listing.vehicle.make}
                  </div>
                  <div className="text-3xl text-gray-600">
                    {listing.vehicle.model}
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Vehicle Details
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Year</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {listing.vehicle.year}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Mileage</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {listing.vehicle.mileage.toLocaleString()} mi
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Exterior Color</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {listing.vehicle.exteriorColor}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Interior Color</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {listing.vehicle.interiorColor}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Body Style</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {listing.vehicle.bodyStyle}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Condition</p>
                  <p className="text-lg font-semibold text-gray-900 capitalize">
                    {listing.vehicle.condition}
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            {listing.features && listing.features.length > 0 && (
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Features
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {listing.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-700"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="card">
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {listing.vehicle.year} {listing.vehicle.make}{' '}
                  {listing.vehicle.model}
                </h1>
                <p className="text-xl text-gray-600">{listing.vehicle.trim}</p>
              </div>

              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">MSRP:</span>
                  <span className="text-gray-900 line-through text-lg">
                    ${listing.pricing.msrp.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Your Price:</span>
                  <span className="text-3xl font-bold text-gray-900">
                    ${listing.pricing.sellingPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">You Save:</span>
                  <span className="text-xl font-semibold text-green-600">
                    ${listing.pricing.discount.toLocaleString()} (
                    {listing.pricing.discountPercent.toFixed(1)}%)
                  </span>
                </div>
              </div>

              {/* Unlock Button */}
              {isUnlocked ? (
                <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6 mb-4">
                  <div className="flex items-center justify-center text-green-600 mb-4">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    <span className="font-semibold">Deal Unlocked!</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">
                      <span className="font-medium">VIN:</span>{' '}
                      {listing.vehicle.vin}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Dealer:</span>{' '}
                      {listing.dealerName}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Phone:</span>{' '}
                      <a
                        href={`tel:${listing.dealerPhone}`}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        {listing.dealerPhone}
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Email:</span>{' '}
                      <a
                        href={`mailto:${listing.dealerEmail}`}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        {listing.dealerEmail}
                      </a>
                    </p>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setShowUnlockModal(true)}
                  className="w-full btn-primary flex items-center justify-center py-4 text-lg"
                >
                  <Unlock className="h-5 w-5 mr-2" />
                  Unlock This Deal
                </button>
              )}

              {/* Meta Info */}
              <div className="space-y-3 mt-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{listing.dealerLocation}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{listing.inventory.daysInStock} days in stock</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Eye className="h-5 w-5 mr-2" />
                  <span>{listing.views} views</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <TrendingDown className="h-5 w-5 mr-2" />
                  <span>Deal Heat Score: {listing.dealHeatScore}</span>
                </div>
              </div>
            </div>
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
