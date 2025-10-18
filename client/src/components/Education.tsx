import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  type: "degree" | "certification";
}

export default function Education() {
  const education: EducationItem[] = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2014 - 2018",
      type: "degree",
    },
    {
      degree: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      period: "2023",
      type: "certification",
    },
    {
      degree: "Professional Scrum Master I",
      institution: "Scrum.org",
      period: "2022",
      type: "certification",
    },
  ];

  return (
    <section id="education" className="py-20 md:py-32 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-education-title">
          Education & Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-education-${index}`}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    {item.type === "degree" ? (
                      <GraduationCap className="h-6 w-6 text-primary" />
                    ) : (
                      <Award className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg" data-testid={`text-degree-${index}`}>
                      {item.degree}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-muted-foreground" data-testid={`text-institution-${index}`}>
                  {item.institution}
                </p>
                <p className="text-sm text-muted-foreground mt-1" data-testid={`text-education-period-${index}`}>
                  {item.period}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
