// REHAM

import { doctors, testimonials } from "../data/mockData";
import DoctorCard from "../components/DoctorCard";
import TestimonialCard from "../components/TestimonialCard";

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to DrAppointment</h1>

      <h2 className="text-2xl font-semibold mt-10">Our Doctors</h2>
      <div className="grid grid-cols-3 gap-6 mt-4">
        {doctors.map((d) => (
          <DoctorCard key={d.id} doctor={d} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-10">Testimonials</h2>
      <div className="grid grid-cols-3 gap-6 mt-4">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

export default Home;
