
import { Link } from 'react-router-dom';
import { ArrowRight, Users, ShoppingBag, FileText, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BackToTop from '../components/BackToTop';

const Index = () => {
  const features = [
    {
      icon: FileText,
      title: 'Posts',
      description: 'Explore engaging articles and blog posts from our community',
      href: '/posts',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ShoppingBag,
      title: 'Products',
      description: 'Discover amazing products and deals in our marketplace',
      href: '/products',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Users',
      description: 'Connect with people and build your network',
      href: '/users',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: ChefHat,
      title: 'Recipes',
      description: 'Find delicious recipes and cooking inspiration',
      href: '/recipes',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ContentHub
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Your ultimate destination for discovering amazing content. Explore posts, products, connect with users, and find delicious recipes all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
              asChild
            >
              <Link to="/posts">
                Explore Posts
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-2 hover:bg-gray-50"
              asChild
            >
              <Link to="/products">
                Browse Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Explore Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={feature.title}
                to={feature.href}
                className="group hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 h-full transition-all duration-300 hover:shadow-xl animate-fade-in">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Explore {feature.title}
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            About ContentHub
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              ContentHub is a modern platform that brings together the best of digital content discovery. 
              Whether you're looking for inspiring articles, unique products, interesting people to connect with, 
              or delicious recipes to try, we've got you covered.
            </p>
            <p className="mb-6">
              Our platform is designed with user experience in mind, featuring smooth animations, 
              responsive design, and intuitive navigation. Join our community and start exploring 
              the wealth of content available at your fingertips.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-sm text-gray-500">Posts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">30+</div>
                <div className="text-sm text-gray-500">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">30+</div>
                <div className="text-sm text-gray-500">Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-sm text-gray-500">Recipes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default Index;
