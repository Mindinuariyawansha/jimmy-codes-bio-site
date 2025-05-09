
import React from 'react';
import { Button } from '@/components/ui/button';
import { User, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center px-6 sm:px-10">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold leading-tight">
          Hey, I'm <span className="gradient-text">Jimmy</span>
          <br />Full Stack Developer
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Passionate about creating elegant, efficient code and building applications 
          that solve real-world problems. Always learning, always coding.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 items-center">
          <div className="flex items-center text-muted-foreground">
            <User className="h-5 w-5 mr-2" />
            <span>23 years old</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-5 w-5 mr-2" />
            <span>3 years of coding experience</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline">
            <a href="#about">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
