import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layout, Server, Smartphone, Zap } from "lucide-react";

export default function About() {
  const skills = [
    { name: "React", icon: Layout },
    { name: "TypeScript", icon: Code2 },
    { name: "Node.js", icon: Server },
    { name: "PostgreSQL", icon: Database },
    { name: "Tailwind CSS", icon: Zap },
    { name: "React Native", icon: Smartphone },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-about-title">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="text-lg text-foreground" data-testid="text-bio-1">
              I'm a passionate full stack developer with over 5 years of experience
              building web applications that solve real-world problems. I specialize
              in React, Node.js, and modern web technologies.
            </p>
            <p className="text-lg text-muted-foreground" data-testid="text-bio-2">
              My approach combines clean code, thoughtful design, and a deep
              understanding of user needs. I love collaborating with teams to
              bring ideas to life and continuously learning new technologies.
            </p>
            <p className="text-lg text-muted-foreground" data-testid="text-bio-3">
              When I'm not coding, you'll find me contributing to open source,
              writing technical blogs, or exploring the latest trends in web
              development.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold" data-testid="text-skills-title">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-4 rounded-md border bg-card hover-elevate active-elevate-2"
                    data-testid={`card-skill-${skill.name.toLowerCase()}`}
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
