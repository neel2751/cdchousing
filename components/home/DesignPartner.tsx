import AnimatedSection from "@/components/shared/AnimatedSection";

const stadium = "https://cubeinsidebd.com/media/images/PICC-2.width-1200.jpg";
const buildings = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
];

export default function DesignPartner() {
  return (
    <section className="py-12 md:py-16 bg-light">
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        <AnimatedSection animation="fade-up" className="text-center mb-14">
          <p className="font-serif text-2xl md:text-3xl text-secondary">Our Design Partner</p>
          <p className="font-serif text-2xl md:text-3xl text-secondary mt-1">
            In collaboration with{" "}
            <a
              href="https://cubeinsidebd.com/?projects=all"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              CUBEINSIDE
              <span className="text-[1.1em] inline-block rotate-[45deg] opacity-100">↗</span>
            </a>
            ,
          </p>
          <p className="font-serif text-2xl md:text-3xl text-primary mt-1">
            CDC Housing brings visionary spaces to life.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
          <div className="overflow-hidden mb-4" style={{ aspectRatio: "16 / 9" }}>
            <img
              src={stadium}
              alt=""
              className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105"
            />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-3 gap-4">
          {buildings.map((src, i) => (
            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
              <div className="overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}