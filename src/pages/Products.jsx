
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SkeletonCard from '../components/SkeletonCard';

const Products = () => {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch('https://dummyjson.com/products');
      return response.json();
    },
  });

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error loading products</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Products
          </h1>
          <p className="text-xl text-gray-600">
            Discover amazing products and great deals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading ? (
            // Skeleton loading
            Array.from({ length: 12 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : (
            products?.products?.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {product.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.discountPercentage > 0 && (
                        <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
                          -{product.discountPercentage}%
                        </span>
                      )}
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
