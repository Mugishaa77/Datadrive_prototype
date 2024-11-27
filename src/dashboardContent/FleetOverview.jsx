import { Card, Typography } from "antd"
export default function FleetOverview (){
    return (
       <Card style={{backgroundColor:'#3F7A85', margin:"1rem", padding:"1rem", paddingTop:"0"}}>
         <div className="fleet-overview">
                <Typography.Title level={5} strong  style={{color:'white'}}>
                            Fleet Overview
                        </Typography.Title>

            <div className="fleet-fields" style={{color:'white', display:"flex", flexDirection:"row"}}>
            <ul  style={{listStyleType:"none",}}>
                    <li style={{listStyleType:"none",}}>
                        Active Vehicle: KDE 678B
                    </li>
                    <li>
                        Maintenance Due : 31st Dec 2024
                    </li>
                </ul>
                <ul style={{listStyleType:"none",}} >
             
                    <li style={{listStyleType:"none",}}>
                        Fuel Efficiency :<strong>
                            92%</strong> 
                    </li>
                </ul>

            </div>

        </div>
       </Card>
    )

}