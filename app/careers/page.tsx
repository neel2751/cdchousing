import AnimatedSection from "@/components/shared/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Careers" };

const jobs = [
  {
    title: "Video Editor",
    type: "Full-time",
    location: "Bashundhara R/A, Dhaka",
    description:
      "We're looking for a creative Video Editor to produce compelling video content for our residential and commercial projects — from cinematic property walkthroughs to social media reels.",
    responsibilities: [
      "Edit and produce high-quality video content for web and social media",
      "Create property showcase videos, reels, and promotional material",
      "Add motion graphics, transitions, colour grading, and sound design",
      "Collaborate with the design and marketing team on creative direction",
    ],
    requirements: [
      "Proven experience with Adobe Premiere Pro / After Effects (or equivalent)",
      "Strong sense of pacing, storytelling, and visual style",
      "Ability to manage multiple projects and meet deadlines",
      "A portfolio or showreel of previous work",
    ],
  },
  {
    title: "Graphic Designer",
    type: "Full-time",
    location: "Bashundhara R/A, Dhaka",
    description:
      "We're seeking a talented Graphic Designer to craft visual assets that reflect the CDC Housing brand — across print, digital, social media, and marketing campaigns.",
    responsibilities: [
      "Design brochures, social media posts, banners, and marketing collateral",
      "Maintain brand consistency across all visual materials",
      "Work closely with the marketing and video team on campaigns",
      "Produce layouts, mockups, and presentation designs",
    ],
    requirements: [
      "Proficiency in Adobe Photoshop, Illustrator, and InDesign",
      "Strong understanding of typography, layout, and colour",
      "A portfolio demonstrating branding and marketing design work",
      "Attention to detail and the ability to take feedback",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-light pt-32 md:pt-40 pb-12 md:pb-16 px-5 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Careers</p>
            <h1 className="font-serif text-4xl md:text-6xl text-primary">Join Our Team</h1>
            <div className="w-16 h-px bg-secondary mx-auto mt-6" />
            <p className="text-primary/60 max-w-xl mx-auto mt-6 leading-relaxed">
              We&apos;re building the future of housing in Bangladesh — and we&apos;re looking for
              creative, driven people to grow with us. Explore our open roles below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* JOB LIST */}
      <section className="bg-light pb-24 md:pb-32 px-5 md:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {jobs.map((job, i) => (
            <AnimatedSection key={job.title} animation="fade-up" delay={i * 100}>
              <div className="bg-white border border-primary/10 rounded-xl p-8 md:p-10 hover:shadow-xl transition-shadow duration-500">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                  <h2 className="font-serif text-2xl md:text-3xl text-primary">{job.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-secondary text-[11px] tracking-widest uppercase border border-secondary/30 rounded-full px-3 py-1">{job.type}</span>
                    <span className="text-primary/50 text-[11px] tracking-widest uppercase border border-primary/15 rounded-full px-3 py-1">{job.location}</span>
                  </div>
                </div>

                <p className="text-primary/70 text-sm md:text-base leading-relaxed mb-6">{job.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-primary text-xs tracking-widest uppercase mb-3">Responsibilities</p>
                    <ul className="space-y-2">
                      {job.responsibilities.map((r) => (
                        <li key={r} className="text-primary/60 text-sm leading-relaxed flex gap-2">
                          <span className="text-secondary">•</span>{r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-primary text-xs tracking-widest uppercase mb-3">Requirements</p>
                    <ul className="space-y-2">
                      {job.requirements.map((r) => (
                        <li key={r} className="text-primary/60 text-sm leading-relaxed flex gap-2">
                          <span className="text-secondary">•</span>{r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={`mailto:careers@cdchousing.com?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="inline-flex items-center justify-center gap-3 bg-secondary text-white text-xs tracking-widest px-8 py-4 rounded-full hover:bg-secondary-dark transition-all duration-500"
                >
                  Apply Now
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-24 px-5 md:px-6 text-center">
        <AnimatedSection animation="fade-up" className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-5">
            Don&apos;t see the right role?
          </h2>
          <p className="text-white/60 mb-8">
            We&apos;re always happy to hear from talented people. Send us your CV and portfolio.
          </p>
          <a
            href="mailto:careers@cdchousing.com"
            className="inline-flex items-center justify-center bg-secondary text-white text-sm tracking-widest px-10 py-4 rounded-full hover:bg-secondary-dark transition-all duration-500"
          >
            Get in Touch
          </a>
        </AnimatedSection>
      </section>
    </>
  );
}