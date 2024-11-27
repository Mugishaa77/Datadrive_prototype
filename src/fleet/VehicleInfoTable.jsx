import React from "react";

const VehicleInfoTable = () => {
  // Sample data for the table
  const vehicleData = [
    {
      VehicleID: "KDC 234A",
      VehicleType: "Truck",
      FuelConsumption: "15 L/100km",
      TotalTrips: 120,
      LastServiced: "2024-11-01",
    },
    {
      VehicleID: "KDE 456B",
      VehicleType: "Van",
      FuelConsumption: "8 L/100km",
      TotalTrips: 75,
      LastServiced: "2024-10-20",
    },
    {
      VehicleID: "KDG 789C",
      VehicleType: "Probox",
      FuelConsumption: "5 L/100km",
      TotalTrips: 200,
      LastServiced: "2024-09-15",
    },
    {
      VehicleID: "KDJ 123D",
      VehicleType: "SUV",
      FuelConsumption: "10 L/100km",
      TotalTrips: 95,
      LastServiced: "2024-08-10",
    },
    {
      VehicleID: "KDK 567E",
      VehicleType: "Pickup",
      FuelConsumption: "12 L/100km",
      TotalTrips: 150,
      LastServiced: "2024-07-25",
    },
    {
      VehicleID: "KDL 890F",
      VehicleType: "Bus",
      FuelConsumption: "20 L/100km",
      TotalTrips: 300,
      LastServiced: "2024-06-15",
    },
  ];
  

  return (
    <div>
      <h2>Vehicle Information Table</h2>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Vehicle ID</th>
            <th>Vehicle Type</th>
            <th>Fuel Consumption</th>
            <th>Total Trips Made</th>
            <th>Last Serviced</th>
          </tr>
        </thead>
        <tbody>
          {vehicleData.map((vehicle, index) => (
            <tr key={index}>
              <td>{vehicle.VehicleID}</td>
              <td>{vehicle.VehicleType}</td>
              <td>{vehicle.FuelConsumption}</td>
              <td>{vehicle.TotalTrips}</td>
              <td>{vehicle.LastServiced}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleInfoTable;
