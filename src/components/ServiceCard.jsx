function ServiceCard({ service }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-xl font-bold">{service.title}</h3>
      <p className="text-gray-600 mt-2">{service.description}</p>
    </div>
  );
}

export default ServiceCard;
