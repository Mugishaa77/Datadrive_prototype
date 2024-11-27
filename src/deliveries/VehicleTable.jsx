import React from "react";

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
      <h2>Vehicle Status Table</h2>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Vehicle ID</th>
            <th>Driver</th>
            <th>Pickup Point</th>
            <th>Drop Off</th>
            <th>Estimated Time of Arrival</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.VehicleID}</td>
              <td>{row.Driver}</td>
              <td>{row.Pickup}</td>
              <td>{row.DropOff}</td>
              <td>{row.ETA}</td>
              <td style={getStatusStyle(row.Status)}>{row.Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleTable;
