<<<<<<< HEAD
// REHAM

=======
>>>>>>> 5406e0bb834f0bfc5c07bd7da41f12f5a7d5e74a
function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <p className="italic text-gray-600">"{testimonial.text}"</p>
      <p className="mt-4 font-bold">{testimonial.author}</p>
    </div>
  );
}

export default TestimonialCard;
