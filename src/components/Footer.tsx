
import React from 'react';
import { Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-12 px-6 sm:px-10 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-heading font-bold text-lg">Jimmy.codes</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-3">Navigation</h4>
              <div className="space-y-2 text-muted-foreground">
                <div><a href="#" className="hover:text-primary transition-colors">Home</a></div>
                <div><a href="#about" className="hover:text-primary transition-colors">About</a></div>
                <div><a href="#skills" className="hover:text-primary transition-colors">Skills</a></div>
                <div><a href="#projects" className="hover:text-primary transition-colors">Projects</a></div>
                <div><a href="#contact" className="hover:text-primary transition-colors">Contact</a></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <div className="space-y-2 text-muted-foreground">
                <div><a href="#" className="hover:text-primary transition-colors">GitHub</a></div>
                <div><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></div>
                <div><a href="#" className="hover:text-primary transition-colors">Twitter</a></div>
                <div><a href="#" className="hover:text-primary transition-colors">Email</a></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} Jimmy.codes. All rights reserved.</p>
          <p className="mt-2">Designed and built with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
