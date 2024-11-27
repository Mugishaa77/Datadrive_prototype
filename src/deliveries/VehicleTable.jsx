import React from "react";
import { Typography } from "antd";

const VehicleTable = () => {
  // Sample data
  const tableData = [
    { 
      VehicleID: "KDC 345A", 
      Driver: "Joseph Otieno", 
      Pickup: "Westlands, Nairobi", 
      DropOff: "Nyali, Mombasa", 
      ETA: "9:30 AM", 
      Status: "Assigned" 
    },
    { 
      VehicleID: "KDE 678B", 
      Driver: "Fatuma Hassan", 
      Pickup: "Kisumu Town", 
      DropOff: "Bungoma", 
      ETA: "11:00 AM", 
      Status: "In Transit" 
    },
    { 
      VehicleID: "KDG 910C", 
      Driver: "Wanjiku Mwangi", 
      Pickup: "Eldoret", 
      DropOff: "Kitale", 
      ETA: "12:45 PM", 
      Status: "Delivered" 
    },
    { 
      VehicleID: "KDJ 234D", 
      Driver: "Kevin Kamau", 
      Pickup: "Thika", 
      DropOff: "Naivasha", 
      ETA: "10:15 AM", 
      Status: "In Transit" 
    },
    { 
      VehicleID: "KDK 567E", 
      Driver: "Agnes Anyango", 
      Pickup: "Meru Town", 
      DropOff: "Nanyuki", 
      ETA: "2:30 PM", 
      Status: "Assigned" 
    },
    { 
      VehicleID: "KDL 890F", 
      Driver: "Mohammed Abdi", 
      Pickup: "Garissa", 
      DropOff: "Isiolo", 
      ETA: "3:00 PM", 
      Status: "In Transit" 
    },
    { 
      VehicleID: "KDM 123G", 
      Driver: "Anne Cherono", 
      Pickup: "Nakuru", 
      DropOff: "Kericho", 
      ETA: "4:45 PM", 
      Status: "Delivered" 
    },
  ];
  

  // Function to get background color based on status
  const getStatusStyle = (status) => {
    switch (status) {
      case "Assigned":
        return { backgroundColor: "blue", color: "white" };
      case "In Transit":
        return { backgroundColor: "orange", color: "white" };
      case "Delivered":
        return { backgroundColor: "green", color: "white" };
      default:
        return {};
    }
  };

  return (
    <div>
       <Typography.Title level={2} strong  className="primary--color" style={{paddingTop:"1rem"}}>
       Vehicle Status Table
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
      <th style={{ padding: "3px", margin: "3px", textAlign: "center", color: "#00BF62", fontSize:"20px" }}>Vehicle ID</th>
      <th style={{ padding: "3px", margin: "3px", textAlign: "center", color: "#00BF62", fontSize:"20px" }}>Driver</th>
      <th style={{ padding: "3px", margin: "3px", textAlign: "center", color: "#00BF62", fontSize:"20px" }}>Pickup Point</th>
      <th style={{ padding: "3px", margin: "3px", textAlign: "center", color: "#00BF62", fontSize:"20px" }}>Drop Off</th>
      <th style={{ padding: "3px", margin: "3px", textAlign: "center", color: "#00BF62", fontSize:"20px" }}>
        ETA
      </th>
      <th style={{ padding: "3px", margin: "3px", textAlign: "center", color: "#00BF62" , fontSize:"20px"}}>Status</th>
    </tr>
  </thead>
  <tbody>
    {tableData.map((row, index) => (
      <tr key={index} style={{ color: "black" }}>
        <td style={{ padding: "3px", margin: "3px", textAlign: "center" }}>{row.VehicleID}</td>
        <td style={{ padding: "3px", margin: "3px", textAlign: "center" }}>{row.Driver}</td>
        <td style={{ padding: "3px", margin: "3px", textAlign: "center" }}>{row.Pickup}</td>
        <td style={{ padding: "3px", margin: "3px", textAlign: "center" }}>{row.DropOff}</td>
        <td style={{ padding: "3px", margin: "3px", textAlign: "center" }}>{row.ETA}</td>
        <td style={{ ...getStatusStyle(row.Status), padding: "3px", margin: "3px", textAlign: "center" }}>
          {row.Status}
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default VehicleTable;
