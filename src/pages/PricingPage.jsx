import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Building2 } from 'lucide-react';

const PricingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Buyer Pricing */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Buyer Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Get time-based access to unlock any deal
          </p>
          <p className="text-sm text-gray-500">
            No subscriptions. No per-deal charges. Just access.
          </p>
        </div>

        {/* Buyer Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {/* 3-Day Pass */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">3-Day Access</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                $49<span className="text-xl text-gray-600">.99</span>
              </div>
              <p className="text-gray-600">Perfect for quick shopping</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Unlock any deal for 3 days</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Full dealer contact info</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Complete VIN access</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Save favorites</span>
              </li>
            </ul>

            <Link
              to="/buyer/signup"
              className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* 7-Day Pass - Popular */}
          <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-blue-600 relative transform scale-105">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">7-Day Access</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                $79<span className="text-xl text-gray-600">.99</span>
              </div>
              <p className="text-gray-600">Best value for serious buyers</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Unlock any deal for 7 days</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Full dealer contact info</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Complete VIN access</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Save favorites</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Compare multiple deals</span>
              </li>
            </ul>

            <Link
              to="/buyer/signup"
              className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* 14-Day Pass */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">14-Day Access</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                $99<span className="text-xl text-gray-600">.99</span>
              </div>
              <p className="text-gray-600">Maximum flexibility</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Unlock any deal for 14 days</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Full dealer contact info</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Complete VIN access</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Save favorites</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Extended research time</span>
              </li>
            </ul>

            <Link
              to="/buyer/signup"
              className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Small Print */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <p className="text-sm text-gray-700">
              <strong>How it works:</strong> Your access pass unlocks all deals on the marketplace during your active window. 
              Click "Unlock" on any listing to reveal full details. When your access expires, deal details are masked again. 
              No subscriptions, no per-deal charges.
            </p>
          </div>
        </div>

        {/* Dealer Pricing */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Dealer Pricing
            </h1>
            <p className="text-xl text-gray-600">
              Get access to serious, paid buyers
            </p>
          </div>

          {/* Dealer Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Tier */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
              <div className="text-center mb-6">
                <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  $0<span className="text-xl text-gray-600">/mo</span>
                </div>
                <p className="text-gray-600">Perfect for getting started</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">1 active listing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Standard placement</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic buyer exposure</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-3">✗</span>
                  <span>No analytics</span>
                </li>
              </ul>

              <Link
                to="/dealer/signup"
                className="block w-full text-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
              >
                Get Started
              </Link>
            </div>

            {/* Pro Tier - Recommended */}
            <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-blue-600 relative transform scale-105">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </span>
              </div>

              <div className="text-center mb-6">
                <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  $299<span className="text-xl text-gray-600">/mo</span>
                </div>
                <p className="text-gray-600">For serious dealers</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Unlimited</strong> active listings</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Full dealer identity visible</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Access to paid buyers only</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Full analytics dashboard</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Pause/remove listings anytime</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Views & unlock tracking</span>
                </li>
              </ul>

              <Link
                to="/dealer/signup"
                className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
              <div className="text-center mb-6">
                <Building2 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  $699<span className="text-xl text-gray-600">+/mo</span>
                </div>
                <p className="text-gray-600">For dealer groups</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Everything in Pro</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multi-rooftop support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Group-level analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Priority buyer access</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Bulk inventory tools</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
              </ul>

              <Link
                to="/dealer/signup"
                className="block w-full text-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                What happens when my access pass expires?
              </h3>
              <p className="text-gray-600">
                Deal details are masked again. You'll need to purchase a new access pass to unlock deals. 
                Previously unlocked deals remain in your dashboard but contact info is hidden.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I unlock unlimited deals with one pass?
              </h3>
              <p className="text-gray-600">
                Yes! Your access pass lets you unlock any deal on the marketplace during your active window.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                How do dealers benefit from paid buyers?
              </h3>
              <p className="text-gray-600">
                Buyers who purchase access passes are serious about buying. They've invested money to access deals, 
                which means higher quality leads for dealers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
