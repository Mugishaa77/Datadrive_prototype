import { Button, Card, Flex, Typography } from "antd";
export default function DeliveryBanner () {
    return (
        <div className="delivery-banner" style={{width:"100%"}}>
            <div style={{width:"100%"}}>
            <Card>
        <Typography.Title level={2} strong  className="primary--color">
                        Total Deliveries Completed
                    </Typography.Title>
                    <br/>
                    <Typography.Title level={3} strong>
                       72
                    </Typography.Title>

                   
        </Card>
          
                
            </div>
            <div>
            <Card>
        <Typography.Title level={2} strong  className="primary--color">
                        Pending Deliveries
                    </Typography.Title>
                    <br/>
                    <Typography.Title level={3} strong>
                       12
                    </Typography.Title>

                   
        </Card>

            </div>

        </div>
    )
}