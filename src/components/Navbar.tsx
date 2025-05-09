
import React from 'react';
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="py-4 px-6 sm:px-10 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-heading font-bold text-lg">Jimmy.codes</span>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        
        <Button className="bg-primary hover:bg-primary/90">
          <a href="#contact">Get In Touch</a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
