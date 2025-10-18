import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import headshotImg from "@assets/generated_images/Professional_developer_headshot_portrait_c0eb8387.png";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-6">
          <img
            src={headshotImg}
            alt="Alex Johnson"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
            data-testid="img-headshot"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold" data-testid="text-name">
            Alex Johnson
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground" data-testid="text-title">
            Full Stack Developer
          </p>
        </div>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          data-testid="text-tagline"
        >
          Building elegant web applications with modern technologies.
          Passionate about creating exceptional user experiences.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            data-testid="button-view-projects"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => console.log("Download resume")}
            data-testid="button-download-resume"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            data-testid="button-contact"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </Button>
        </div>

        <div className="pt-12">
          <button
            onClick={() => scrollToSection("about")}
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover-elevate active-elevate-2 rounded-md p-2"
            data-testid="button-scroll-down"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
