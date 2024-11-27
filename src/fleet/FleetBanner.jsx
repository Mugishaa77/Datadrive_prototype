import { Button, Card, Flex, Typography } from "antd";

export default function FleetBanner () {
    return (
       <div className="fleet-banner">
        <Card>
        <Typography.Title level={2} strong className="primary--color">
                        Fleet Management
                    </Typography.Title>
                    <Button type="primary" size="large">
                    + Add New Fleet
                </Button>
        </Card>
       </div> 
    )
}