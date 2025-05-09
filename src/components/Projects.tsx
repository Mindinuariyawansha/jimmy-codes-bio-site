
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with product catalog, user authentication, cart functionality, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Task Management App",
      description: "An intuitive task management application with drag-and-drop functionality, task categories, and real-time collaboration.",
      technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current conditions and forecasts for locations worldwide using external API integration.",
      technologies: ["React", "Redux", "OpenWeather API", "Chart.js"],
      demoUrl: "#",
      codeUrl: "#",
    },
  ];
  
  return (
    <section id="projects" className="py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg mt-6 max-w-2xl mx-auto text-muted-foreground">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and learning experience in my development journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-5xl font-bold text-primary/20">Project {index + 1}</div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-primary/5">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button variant="outline" size="sm">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
                <Button variant="outline" size="sm">
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">View Code</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90">
            <a href="#" target="_blank" rel="noopener noreferrer">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
