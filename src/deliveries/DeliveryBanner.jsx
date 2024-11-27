import { Button, Card, Flex, Typography } from "antd";
export default function DeliveryBanner () {
    return (
        <div className="delivery-banner" style={{width:"100%"}}>
            <div style={{width:"100%"}} className="delivery-one">
            <Card>
        <Typography.Title level={2} strong  className="primary--color">
                        Total Deliveries Completed
                    </Typography.Title>
                    <br/>
                    <Typography.Title level={1} strong style={{textAlign:"center", color:"#0DBD6A"}}
                     className="delivery-count">
                       72
                    </Typography.Title>

                   
        </Card>
          
                
            </div>
            <div className="delivery-two">
            <Card>
        <Typography.Title level={2} strong  className="primary--color" style={{textAlign:"center"}}>
                        Pending Deliveries
                    </Typography.Title>
                    <br/>
                    <Typography.Title level={1} strong style={{textAlign:"center", color:"#BFBFBF"}}
                     className="delivery-count">
                       12
                    </Typography.Title>

                   
        </Card>

            </div>

        </div>
    )
}