import AnimatedSection from "@/components/shared/AnimatedSection";

const images = [
  "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1000",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000",
];

export default function DesignPartner() {
  return (
    <section className="py-12 md:py-16 bg-light">
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        <AnimatedSection animation="fade-up" className="text-center mb-14">
          <p className="font-serif text-2xl md:text-3xl text-secondary italic">Our Design Partner</p>
          <p className="font-serif text-2xl md:text-3xl text-secondary mt-1">
            In collaboration with CUBEINSIDE,
          </p>
          <p className="font-serif text-2xl md:text-3xl text-primary mt-1">
            CDC Housing brings visionary spaces to life.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatedSection animation="fade-right" className="flex flex-col gap-4">
            <div className="overflow-hidden aspect-video">
              <img src={images[0]} alt="" className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105" />
            </div>
            <div className="overflow-hidden aspect-4/3">
              <img src={images[1]} alt="" className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={100} className="flex flex-col gap-4">
            <div className="overflow-hidden aspect-4/3">
              <img src={images[2]} alt="" className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105" />
            </div>
            <div className="overflow-hidden aspect-video">
              <img src={images[3]} alt="" className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105" />
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}