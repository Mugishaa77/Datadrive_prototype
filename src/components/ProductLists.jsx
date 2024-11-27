import { Button, Card, Flex, Typography, Image } from "antd";
import PlantData from "../PlantData";
import RouteMap from "./RouteMap";

const {Meta} = Card;
export default function ProductLists () {
    return (
        <div>
            <Flex align="center" justify="space-between">
            <Typography.Title level={3} strong className="primary--color">
                Real Time Route 
            </Typography.Title>
            <Button type="link" className="gray--color">
                 View in Map
            </Button>
        </Flex>
        <Flex align="center" gap="large">
          <RouteMap/>

        </Flex>
             </div>
        
    
    );
}