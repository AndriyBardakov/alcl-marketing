import React from 'react';
import dealersData from "../../data/mock/dealers.json";

const DealersList = () => {
  return (
    <div className="dealers-list">
      <h2 className="text-center">Regions</h2>
      <div className="row">
        {dealersData.map((dealer, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="dealer-card p-3 border rounded">
              <h3>{dealer.name}</h3>
              {/* <p>{dealer.address}</p>
              <p>{dealer.phoneNumbers.map((number) => {
                return (
                  <span key={number}>
                    {number}
                    {number !== dealer.phoneNumbers[dealer.phoneNumbers.length - 1] ? ', ' : ''}
                  </span>
                );
              })}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DealersList;