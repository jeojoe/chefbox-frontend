import React from 'react';

const IngredientsAdmin = ({ name, amount }) => (
  <div className="card" style={{ marginBottom: '10px' }}>
    <div className="card-body d-flex justify-content-between">
      <p style={{ margin: 0 }}>{name}</p>
      <p style={{ margin: 0 }}>{amount}</p>
    </div>
  </div>
);

export default IngredientsAdmin;
