"use client";

const offices = [
  {
    city: "Ahmedabad",
    address: "CDC Tower, SG Highway, Ahmedabad - 380054",
    phone: "+91 79 4000 1234",
    email: "ahmedabad@cdchousing.com",
    hours: "Mon – Sat: 10:00 AM – 7:00 PM",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0!2d72.5!3d23.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzAwLjAiTiA3MsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
  },
  {
    city: "Surat",
    address: "CDC House, Vesu, Surat - 395007",
    phone: "+91 261 400 5678",
    email: "surat@cdchousing.com",
    hours: "Mon – Sat: 10:00 AM – 7:00 PM",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.0!2d72.8!3d21.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAwJzAwLjAiTiA3MsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
  },
];

export default function MapSection() {
  return (
    <section className="py-24 px-6 bg-accent">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <p className="text-secondary text-xs tracking-[0.4em] uppercase mb-4">Find Us</p>
          <h2 className="font-serif text-5xl md:text-6xl text-primary leading-tight">
            Our <span className="italic text-secondary">Offices</span>
          </h2>
          <div className="w-full h-px bg-primary/10 mt-12" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {offices.map((office, i) => (
            <div key={office.city} className="group">

              <div className="overflow-hidden mb-8 aspect-video relative">
                <iframe
                  src={office.mapSrc}
                  className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  title={`${office.city} office map`}
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-white px-4 py-2">
                  <span className="text-secondary text-xs tracking-widest uppercase">{office.city}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-secondary text-xs tracking-widest uppercase mb-2">Address</p>
                  <p className="text-primary/60 text-sm leading-relaxed">{office.address}</p>
                </div>
                <div>
                  <p className="text-secondary text-xs tracking-widest uppercase mb-2">Hours</p>
                  <p className="text-primary/60 text-sm">{office.hours}</p>
                </div>
                <div>
                  <p className="text-secondary text-xs tracking-widest uppercase mb-2">Phone</p>
                  <a href={`tel:${office.phone}`} className="text-primary/60 text-sm hover:text-secondary transition-colors duration-300">
                    {office.phone}
                  </a>
                </div>
                <div>
                  <p className="text-secondary text-xs tracking-widest uppercase mb-2">Email</p>
                  <a href={`mailto:${office.email}`} className="text-primary/60 text-sm hover:text-secondary transition-colors duration-300">
                    {office.email}
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-primary/10 mt-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}