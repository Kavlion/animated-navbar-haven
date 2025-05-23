
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { MapPin, Mail, Phone, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SkeletonCard from '../components/SkeletonCard';

const Users = () => {
  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('https://dummyjson.com/users');
      return response.json();
    },
  });

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error loading users</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Community
          </h1>
          <p className="text-xl text-gray-600">
            Connect with amazing people in our community
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading ? (
            // Skeleton loading
            Array.from({ length: 9 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : (
            users?.users?.map((user, index) => (
              <Card
                key={user.id}
                className="border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <img
                      src={user.image}
                      alt={`${user.firstName} ${user.lastName}`}
                      className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-gray-200 object-cover"
                    />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {user.firstName} {user.lastName}
                    </h3>
                    <p className="text-sm text-gray-500">@{user.username}</p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{user.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{user.phone}</span>
                    </div>
                    {user.address && (
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{user.address.city}, {user.address.state}</span>
                      </div>
                    )}
                    {user.company && (
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Building className="w-4 h-4" />
                        <span>{user.company.name}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Age: {user.age}</span>
                      <span>{user.gender}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
