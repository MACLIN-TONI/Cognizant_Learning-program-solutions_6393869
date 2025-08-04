import React from 'react';

function OfficeList() {
  const office1 = {
    name: 'SmartSpace',
    rent: 50000,
    address: 'Indiranagar, Bangalore',
    image: 'https://via.placeholder.com/200x100.png?text=SmartSpace'
  };

  const officeSpaces = [
    {
      name: 'WorkNest',
      rent: 45000,
      address: 'Koramangala, Bangalore',
      image: 'https://via.placeholder.com/200x100.png?text=WorkNest'
    },
    {
      name: 'CoWorkHub',
      rent: 75000,
      address: 'HSR Layout, Bangalore',
      image: 'https://via.placeholder.com/200x100.png?text=CoWorkHub'
    },
    {
      name: 'The Hive',
      rent: 62000,
      address: 'MG Road, Bangalore',
      image: 'https://via.placeholder.com/200x100.png?text=The+Hive'
    }
  ];

  const getRentStyle = (rent) => {
    return {
      color: rent < 60000 ? 'red' : 'green',
      fontWeight: 'bold'
    };
  };

  return (
    <div>
      <h1>Office Space Rental Listings</h1>
      <div>
        <img src={office1.image} alt={office1.name} />
        <h3>{office1.name}</h3>
        <p><strong>Address:</strong> {office1.address}</p>
        <p><strong>Rent:</strong> <span style={getRentStyle(office1.rent)}>₹{office1.rent}</span></p>
      </div>

      <hr />

      {officeSpaces.map((office, index) => (
        <div key={index}>
          <img src={office.image} alt={office.name} />
          <h3>{office.name}</h3>
          <p><strong>Address:</strong> {office.address}</p>
          <p><strong>Rent:</strong> <span style={getRentStyle(office.rent)}>₹{office.rent}</span></p>
        </div>
      ))}
    </div>
  );
}

export default OfficeList;
