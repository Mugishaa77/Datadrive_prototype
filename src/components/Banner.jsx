import React from "react";
import { Badge, Progress, Typography } from "antd";
import { CarOutlined, InboxOutlined } from "@ant-design/icons"; // Using valid icons
import ActivityChart from "./ActivityChart";

const { Text } = Typography;

export default function Banner() {
    return (
        <div className="banner">
            <h1>Activity Status</h1>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                <li style={{ marginBottom: "1rem" }}>
                    <Text strong>Active Deliveries</Text>
                    <Badge count={32} style={{ backgroundColor: "#52c41a" }}>
                        <InboxOutlined style={{ fontSize: "36px", color: "#1890ff" }} />
                    </Badge>
                </li>
                <li style={{ marginBottom: "1rem" }}>
                    <Text strong>Fleet Status</Text>
                    <Progress
                        type="circle"
                        percent={90} // For 18/20 fleet status
                        format={() => "18/20"}
                        width={80}
                        strokeColor="#faad14"
                        style={{ margin: "1rem" }}
                    />
                </li>
                <li>
                    <Text strong>Efficiency Rate</Text>
                    <ActivityChart />
                </li>
            </ul>
        </div>
    );
}
