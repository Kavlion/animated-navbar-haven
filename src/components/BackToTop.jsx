
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg animate-fade-in hover-scale"
          size="icon"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
    </>
  );
};

export default BackToTop;
