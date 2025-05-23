
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Clock, Users, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SkeletonCard from '../components/SkeletonCard';

const Recipes = () => {
  const { data: recipes, isLoading, error } = useQuery({
    queryKey: ['recipes'],
    queryFn: async () => {
      const response = await fetch('https://dummyjson.com/recipes');
      return response.json();
    },
  });

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error loading recipes</h2>
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
            Recipes
          </h1>
          <p className="text-xl text-gray-600">
            Discover delicious recipes and cooking inspiration
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Skeleton loading
            Array.from({ length: 9 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : (
            recipes?.recipes?.map((recipe, index) => (
              <Card
                key={recipe.id}
                className="border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale h-full flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {recipe.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{recipe.servings} servings</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{recipe.rating}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 flex-grow">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Ingredients:</h4>
                      <div className="text-sm text-gray-600">
                        {recipe.ingredients.slice(0, 3).map((ingredient, idx) => (
                          <div key={idx} className="mb-1">• {ingredient}</div>
                        ))}
                        {recipe.ingredients.length > 3 && (
                          <div className="text-blue-600">
                            +{recipe.ingredients.length - 3} more...
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {recipe.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Prep: {recipe.prepTimeMinutes}m</span>
                      <span>Cook: {recipe.cookTimeMinutes}m</span>
                      <span>Difficulty: {recipe.difficulty}</span>
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

export default Recipes;
