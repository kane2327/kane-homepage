import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: SiGithub,
      url: "https://github.com",
      label: "@alexjohnson",
    },
    {
      name: "LinkedIn",
      icon: SiLinkedin,
      url: "https://linkedin.com",
      label: "Alex Johnson",
    },
    {
      name: "X",
      icon: SiX,
      url: "https://x.com",
      label: "@alexjohnsondev",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-title">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="text-contact-subtitle">
          I'm always open to new opportunities, collaborations, or just a friendly chat.
          Feel free to reach out!
        </p>

        <div className="flex flex-col items-center gap-8">
          <Button
            size="lg"
            onClick={() => console.log("Email clicked")}
            data-testid="button-email"
          >
            <Mail className="mr-2 h-5 w-5" />
            alex.johnson@email.com
          </Button>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.name}
                  size="icon"
                  variant="outline"
                  className="h-12 w-12"
                  onClick={() => console.log(`Open ${social.name}: ${social.url}`)}
                  data-testid={`button-social-${social.name.toLowerCase()}`}
                >
                  <Icon className="h-5 w-5" />
                </Button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-6 w-full max-w-2xl mt-8">
            {socialLinks.map((social) => (
              <button
                key={social.name}
                onClick={() => console.log(`Open ${social.name}: ${social.url}`)}
                className="p-4 rounded-md border bg-card hover-elevate active-elevate-2 text-left"
                data-testid={`card-social-${social.name.toLowerCase()}`}
              >
                <div className="font-medium mb-1">{social.name}</div>
                <div className="text-sm text-muted-foreground">{social.label}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t">
          <p className="text-sm text-muted-foreground" data-testid="text-footer">
            © 2025 Alex Johnson. Built with React & TypeScript.
          </p>
        </div>
      </div>
    </section>
  );
}
