import { Flex, Typography, Button, List, Avatar } from "antd";

const data = [
    {name: 'Fleet No. DD#205, Driver ID D007',
        orderTime: 1,
    },
    {name: 'Fleet No. DD#900, Driver ID D089',
        orderTime: 1,
    },
    {name: 'Fleet No. DD#120, Driver ID D056',
        orderTime: 1,
    },
    {name: 'Fleet No. DD#600, Driver ID D035',
        orderTime: 2,
    },
    {name: 'Fleet No. DD#007, Driver ID D079',
        orderTime: 2,
    },
];
export default function Activity () {
 return (
    <div>
        <Flex vertical gap="small">
            <Flex align="center" justify="space-between" gap="large">
                <Typography.Title level={3} strong className="primary--color">
                    Recent Activity
                </Typography.Title>
                <Button type="link" className="gray--color">
                 View All
            </Button>

            </Flex>

            <List
             pagination 
             dataSource={data}
             renderItem={(user,index) => (
                <List.Item>
                    <List.Item.Meta
                     avatar = {<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}/>}
                      title={<a href="#">{user.name}</a>}
                      description="Completed Trip ">
                    {user.data}
                    </List.Item.Meta>
                    <span className="gray--color">
                        {user.orderTime} {user.orderTime == 1 ? 'day ago' : 'days ago'}
                    </span>
                </List.Item>
             )}/>

        </Flex>
    </div>
 );
}