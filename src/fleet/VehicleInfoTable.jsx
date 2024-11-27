import React from "react";
import { Typography } from "antd";

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
    <Typography.Title level={2} strong  className="primary--color" style={{paddingTop:"1rem"}}>
    Vehicle Information Table
                    </Typography.Title>
    <table
      border="1"
      style={{
        width: "100%",
        borderCollapse: "collapse",
        backgroundColor: "white",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <thead>
        <tr>
          <th style={{ padding: "8px", margin: "3px", textAlign: "center", color: "#00BF62", fontSize: "18px" }}>Vehicle ID</th>
          <th style={{ padding: "8px", margin: "3px", textAlign: "center", color: "#00BF62", fontSize: "18px" }}>Vehicle Type</th>
          <th style={{ padding: "8px", margin: "3px", textAlign: "center", color: "#00BF62", fontSize: "18px" }}>Fuel Consumption</th>
          <th style={{ padding: "8px", margin: "3px", textAlign: "center", color: "#00BF62", fontSize: "18px" }}>Total Trips Made</th>
          <th style={{ padding: "8px", margin: "3px", textAlign: "center", color: "#00BF62", fontSize: "18px" }}>Last Serviced</th>
        </tr>
      </thead>
      <tbody>
        {vehicleData.map((vehicle, index) => (
          <tr key={index} style={{ textAlign: "center", color: "black" }}>
            <td style={{ padding: "8px", margin: "3px" }}>{vehicle.VehicleID}</td>
            <td style={{ padding: "8px", margin: "3px" }}>{vehicle.VehicleType}</td>
            <td style={{ padding: "8px", margin: "3px" }}>{vehicle.FuelConsumption}</td>
            <td style={{ padding: "8px", margin: "3px" }}>{vehicle.TotalTrips}</td>
            <td style={{ padding: "8px", margin: "3px" }}>{vehicle.LastServiced}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
};

export default VehicleInfoTable;
