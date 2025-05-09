
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Hi there! I'm Jimmy, a 23-year-old developer with a passion for creating beautiful, 
              functional applications. My journey in tech started when I was 20, and I've been 
              in love with coding ever since.
            </p>
            <p className="text-lg">
              With a background in Computer Science and a love for problem-solving, I specialize 
              in full-stack development using modern technologies. I enjoy the challenge of 
              learning new frameworks and tools to stay on the cutting edge of web development.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new hiking trails, reading sci-fi 
              novels, or experimenting with new recipes in the kitchen. I believe in continuous learning 
              and pushing my boundaries both professionally and personally.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-accent/50 border-none">
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
            
            <Card className="bg-accent/50 border-none">
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">3+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
            
            <Card className="bg-accent/50 border-none">
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">5</h3>
                <p className="text-muted-foreground">Frameworks</p>
              </CardContent>
            </Card>
            
            <Card className="bg-accent/50 border-none">
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">8</h3>
                <p className="text-muted-foreground">Languages</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
