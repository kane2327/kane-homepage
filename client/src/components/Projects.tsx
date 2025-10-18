import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import dashboardImg from "@assets/generated_images/Dashboard_web_application_screenshot_007700dc.png";
import ecommerceImg from "@assets/generated_images/E-commerce_mobile_app_screenshot_e518e192.png";
import taskAppImg from "@assets/generated_images/Task_management_app_screenshot_57c4037e.png";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics platform with interactive data visualizations and customizable reporting features.",
      image: dashboardImg,
      technologies: ["React", "TypeScript", "D3.js", "Node.js"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with payment integration, inventory management, and admin dashboard.",
      image: ecommerceImg,
      technologies: ["React Native", "PostgreSQL", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team collaboration, and project tracking.",
      image: taskAppImg,
      technologies: ["React", "WebSocket", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="text-projects-title">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-projects-subtitle">
          A selection of projects showcasing my skills in full stack development,
          UI/UX design, and problem-solving.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`flex flex-col overflow-hidden hover-elevate transition-all ${
                project.featured ? "md:col-span-2" : ""
              }`}
              data-testid={`card-project-${index}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  data-testid={`img-project-${index}`}
                />
              </div>
              <CardHeader>
                <CardTitle data-testid={`text-project-title-${index}`}>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" data-testid={`badge-tech-${tech.toLowerCase()}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => console.log(`Open GitHub: ${project.githubUrl}`)}
                    data-testid={`button-github-${index}`}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    size="sm"
                    onClick={() => console.log(`Open Live: ${project.liveUrl}`)}
                    data-testid={`button-live-${index}`}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
