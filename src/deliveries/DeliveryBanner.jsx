import { Button, Card, Flex, Typography } from "antd";
export default function DeliveryBanner () {
    return (
        <div className="delivery-banner">
            <div>
            <Card>
        <Typography.Title level={2} strong>
                        Total Deliveries Completed
                    </Typography.Title>
                   
        </Card>
          
                
            </div>
            <div>
            <Card>
        <Typography.Title level={2} strong>
                        Pending Deliveries
                    </Typography.Title>
                   
        </Card>

            </div>

        </div>
    )
}