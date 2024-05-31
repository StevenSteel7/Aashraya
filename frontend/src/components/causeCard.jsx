import React from 'react';

function CauseCard({ title, description, price }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="bg-blue-500 text-white rounded-full px-4 py-2">
        ₹{price}
      </div>
    </div>
  );
}

function CausesGrid() {
  const causes = [
    {
      title: "Feed a Homeless Person",
      description: "Feed a hungry stomach and protect the...",
      price: "25/person",
    },
    {
      title: "Give an Egg & Milk",
      description: "Providing eggs and milk to children is...",
      price: "30/child",
    },
    {
      title: "Get a Wish Video",
      description: "Feed the homeless people and children...",
      price: "2500/100 persons",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {causes.map((cause, index) => (
        <CauseCard key={index} {...cause} />
      ))}
    </div>
  );
}

export default CausesGrid;
