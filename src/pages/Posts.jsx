
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { User, Heart, MessageCircle } from 'lucide-react';
import SkeletonCard from '../components/SkeletonCard';

const Posts = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch('https://dummyjson.com/posts');
      return response.json();
    },
  });

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error loading posts</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Posts
          </h1>
          <p className="text-xl text-gray-600">
            Discover engaging articles and stories from our community
          </p>
        </div>

        <div className="space-y-8">
          {isLoading ? (
            // Skeleton loading
            Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : (
            posts?.posts?.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {post.body}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-gray-500">
                      User {post.userId}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-red-500">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{post.reactions}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-500">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">Comments</span>
                    </div>
                  </div>
                </div>
                
                {post.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;
