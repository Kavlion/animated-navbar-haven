
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const LoginModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(username, password);
    
    if (result.success) {
      toast({
        title: "Login successful!",
        description: "Welcome back to ContentHub",
      });
      onClose();
      setUsername('');
      setPassword('');
    } else {
      toast({
        title: "Login failed",
        description: result.error,
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to ContentHub
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
        
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 text-center">Demo credentials:</p>
          <p className="text-xs text-gray-500 text-center mt-1">
            Username: <strong>kminchelle</strong> | Password: <strong>0lelplR</strong>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
