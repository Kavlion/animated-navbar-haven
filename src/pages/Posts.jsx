
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SkeletonCard from '../components/SkeletonCard';

const Posts = () => {
  const [visiblePosts, setVisiblePosts] = useState(6); // Initial number of visible posts

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch('https://dummyjson.com/posts');
      return response.json();
    },
  });

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 6); // Load 6 more posts
  };

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
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Posts
          </h1>
          <p className="text-xl text-gray-600">
            Explore thought-provoking content from our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Skeleton loading
            Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : (
            posts?.posts?.slice(0, visiblePosts).map((post) => (
              <Card 
                key={post.id} 
                className="border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale h-full flex flex-col"
              >
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500">
                      #{post.tags.join(', #')}
                    </p>
                  </div>
                  
                  <p className="text-gray-700 flex-grow line-clamp-4 mb-4">
                    {post.body}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-blue-600">
                        {post.reactions} reactions
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-700 hover:text-blue-600"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* See More Button */}
        {!isLoading && posts?.posts && visiblePosts < posts.posts.length && (
          <div className="flex justify-center mt-10">
            <Button 
              onClick={loadMorePosts}
              variant="outline" 
              size="lg"
              className="group hover:bg-blue-50 hover:border-blue-200 transition-all duration-300"
            >
              See More Posts
              <ChevronDown className="ml-2 group-hover:animate-bounce" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
