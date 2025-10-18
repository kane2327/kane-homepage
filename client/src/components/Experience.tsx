import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface Job {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export default function Experience() {
  const jobs: Job[] = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: [
        "Led development of microservices architecture serving 100K+ users",
        "Mentored junior developers and conducted code reviews",
        "Improved application performance by 40% through optimization",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: [
        "Built responsive web applications using React and Node.js",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with design team to create intuitive user interfaces",
      ],
    },
    {
      title: "Junior Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2020",
      description: [
        "Developed and maintained client websites and web applications",
        "Worked with RESTful APIs and database management",
        "Participated in agile development processes",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-experience-title">
          Work Experience
        </h2>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-ml-px" />

          <div className="space-y-12">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row gap-8"
                data-testid={`card-job-${index}`}
              >
                <div className="md:w-1/2 md:text-right md:pr-8">
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-2 md:-ml-2 mt-2" />
                  <div className="ml-8 md:ml-0">
                    <h3 className="text-xl font-semibold" data-testid={`text-job-title-${index}`}>
                      {job.title}
                    </h3>
                    <p className="text-primary font-medium" data-testid={`text-company-${index}`}>
                      {job.company}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-period-${index}`}>
                      {job.period}
                    </p>
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-8">
                  <Card className="p-6 ml-8 md:ml-0">
                    <ul className="space-y-2" data-testid={`list-responsibilities-${index}`}>
                      {job.description.map((item, i) => (
                        <li key={i} className="flex gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
