
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Building, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="w-full py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-sm border border-gray-200 overflow-hidden animate-fade-in">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8">
            <div className="flex items-center space-x-4">
              <img
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <div className="text-white">
                <h1 className="text-2xl font-bold">
                  {user.firstName} {user.lastName}
                </h1>
                <p className="text-blue-100">@{user.username}</p>
                <p className="text-blue-100 text-sm mt-1">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Personal Information
                </h2>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <User className="w-5 h-5" />
                    <div>
                      <span className="font-medium">Full Name:</span>
                      <p>{user.firstName} {user.maidenName || ''} {user.lastName}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-5 h-5" />
                    <div>
                      <span className="font-medium">Email:</span>
                      <p>{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="w-5 h-5" />
                    <div>
                      <span className="font-medium">Phone:</span>
                      <p>{user.phone || 'Not provided'}</p>
                    </div>
                  </div>
                  
                  {user.birthDate && (
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Calendar className="w-5 h-5" />
                      <div>
                        <span className="font-medium">Birth Date:</span>
                        <p>{new Date(user.birthDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Address & Company */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Location & Work
                </h2>
                
                <div className="space-y-3">
                  {user.address && (
                    <div className="flex items-start space-x-3 text-gray-600">
                      <MapPin className="w-5 h-5 mt-1" />
                      <div>
                        <span className="font-medium">Address:</span>
                        <p>{user.address.address || 'N/A'}</p>
                        <p>
                          {user.address.city || 'N/A'}, 
                          {user.address.state ? ` ${user.address.state}` : ''} 
                          {user.address.postalCode ? ` ${user.address.postalCode}` : ''}
                        </p>
                        <p>{user.address.country || 'N/A'}</p>
                      </div>
                    </div>
                  )}
                  
                  {user.company && (
                    <div className="flex items-start space-x-3 text-gray-600">
                      <Building className="w-5 h-5 mt-1" />
                      <div>
                        <span className="font-medium">Company:</span>
                        <p>{user.company.name || 'N/A'}</p>
                        <p className="text-sm text-gray-500">{user.company.title || 'N/A'}</p>
                        <p className="text-sm text-gray-500">{user.company.department || 'N/A'}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Additional Information
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {user.age && (
                  <div className="bg-blue-50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                    <div className="text-2xl font-bold text-blue-600">{user.age}</div>
                    <div className="text-sm text-gray-600">Years Old</div>
                  </div>
                )}
                {user.height && (
                  <div className="bg-purple-50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                    <div className="text-2xl font-bold text-purple-600">{user.height}</div>
                    <div className="text-sm text-gray-600">Height (cm)</div>
                  </div>
                )}
                {user.weight && (
                  <div className="bg-green-50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                    <div className="text-2xl font-bold text-green-600">{user.weight}</div>
                    <div className="text-sm text-gray-600">Weight (kg)</div>
                  </div>
                )}
                {user.bloodGroup && (
                  <div className="bg-orange-50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                    <div className="text-2xl font-bold text-orange-600">{user.bloodGroup}</div>
                    <div className="text-sm text-gray-600">Blood Type</div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
