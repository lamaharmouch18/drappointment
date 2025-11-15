// REHAM

function DoctorCard({ doctor }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <img src={doctor.image} className="w-full rounded-lg mb-4" />
      <h3 className="text-xl font-bold">{doctor.name}</h3>
      <p className="text-gray-600">{doctor.specialty}</p>
    </div>
  );
}

export default DoctorCard;
