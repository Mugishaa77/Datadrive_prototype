import React from 'react';
import { Card, Typography, Flex } from 'antd';


export default function ContentSidebar() {
    return (
        <div>
            <Card className="card" style={{textAlign:'center'}}>
                <Flex vertical gap="medium">
                    <Typography.Title level={4} strong>
                        Carbon Reduced Today: <br />
                        <span ><strong>42</strong> kg</span>
                    </Typography.Title>
                    <Typography.Title level={4} strong>
                        Carbon Reduced This Month: <br />
                        <span >1200 kg</span>
                    </Typography.Title>
                </Flex>
            </Card>
        </div>
    );
}
