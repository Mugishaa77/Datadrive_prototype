import { Avatar, Button, Card, Divider, Flex, Tooltip, Typography } from "antd";

export default function SellerLists () {
    return (
        <div>
            <Flex align='center' justify="space-between" gap="large">
                <Flex vertical="row" gap="small" className="top-seller">
                    <Flex  align="center" justify="space-between">
                        <Typography.Title level={5} strong className="primary--color">
                            Top Seller
                        </Typography.Title>
                        <Button type="link" className="gray--color">
                            View All
                        </Button>
                    </Flex>
                    <Card>
                        <Flex align="center" justify="space-evenly">
                            <Avatar.Group maxCount={5} maxPopoverTrigger="click" size="large"
                            maxStyle={{
                                color: '#f56a00',
                                backgroundColor: '#fde3cf',
                                cursor: 'progress'

                            }}>
                                <Tooltip title="User 1" placement="top">
                                    <Avatar src="https://st2.depositphotos.com/4967775/11323/v/950/depositphotos_113235752-stock-illustration-avatar-girls-icon-vector-woman.jpg"/>
                                </Tooltip>
                                <Tooltip title="User 2" placement="top">
                                    <Avatar src="https://static.vecteezy.com/system/resources/previews/004/607/791/non_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"/>
                                </Tooltip>
                                <Tooltip title="User 3" placement="top">
                                    <Avatar src="https://w7.pngwing.com/pngs/240/398/png-transparent-avatar-illustration-girl-hair-design-child-face-web-design.png"/>
                                </Tooltip>
                                <Tooltip title="User 4" placement="top">
                                    <Avatar src="https://w7.pngwing.com/pngs/477/213/png-transparent-girls-miscellaneous-child-face.png"/>
                                </Tooltip>
                                <Tooltip title="User 5" placement="top">
                                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCWFOIYfthrvoiQRpkpdg3poj5nSlYGtBLjg&s"/>
                                </Tooltip>
                                <Tooltip title="User 6" placement="top">
                                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCVP8q0falT1WI_U-_NMZOjQADK5MZAdHsg&s"/>
                                </Tooltip>
                            </Avatar.Group>
                            <Divider type="vertical" className="divider"/>
                            
                        </Flex>
                        <Flex vertical="row">
                                <Typography.Text type="secondary" strong>
                                    1,200 plants sold
                                </Typography.Text>
                                <Typography.Text type="secondary" strong>
                                    10 seller
                                </Typography.Text>
                            </Flex>
                    </Card>
                   
                </Flex>

                <Flex vertical="row" gap="small" className="featured-seller">
                    <Flex  align="center" justify="space-between">
                        <Typography.Title level={5} strong className="primary--color">
                            Featured Seller
                        </Typography.Title>
                        <Button type="link" className="gray--color">
                            View All
                        </Button>

                       
                    </Flex>
                    <Card>
                        <Flex align="center" justify="space-evenly">
                            <Avatar.Group maxCount={5} maxPopoverTrigger="click" size="large"
                            maxStyle={{
                                color: '#f56a00',
                                backgroundColor: '#fde3cf',
                                cursor: 'progress'

                            }}>
                                <Tooltip title="User 1" placement="top">
                                    <Avatar src="https://st2.depositphotos.com/4967775/11323/v/950/depositphotos_113235752-stock-illustration-avatar-girls-icon-vector-woman.jpg"/>
                                </Tooltip>
                                <Tooltip title="User 2" placement="top">
                                    <Avatar src="https://static.vecteezy.com/system/resources/previews/004/607/791/non_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"/>
                                </Tooltip>
                                <Tooltip title="User 3" placement="top">
                                    <Avatar src="https://w7.pngwing.com/pngs/240/398/png-transparent-avatar-illustration-girl-hair-design-child-face-web-design.png"/>
                                </Tooltip>
                                <Tooltip title="User 4" placement="top">
                                    <Avatar src="https://w7.pngwing.com/pngs/477/213/png-transparent-girls-miscellaneous-child-face.png"/>
                                </Tooltip>
                                <Tooltip title="User 5" placement="top">
                                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCWFOIYfthrvoiQRpkpdg3poj5nSlYGtBLjg&s"/>
                                </Tooltip>
                                <Tooltip title="User 6" placement="top">
                                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCVP8q0falT1WI_U-_NMZOjQADK5MZAdHsg&s"/>
                                </Tooltip>
                            </Avatar.Group>
                            <Divider type="vertical" className="divider"/>
                            
                        </Flex>
                        <Flex vertical="row">
                                <Typography.Text type="secondary" strong>
                                    1,200 plants sold
                                </Typography.Text>
                                <Typography.Text type="secondary" strong>
                                    10 seller
                                </Typography.Text>
                            </Flex>
                    </Card>
                </Flex>
            </Flex>
        </div>
    )
}