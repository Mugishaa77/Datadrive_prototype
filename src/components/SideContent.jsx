import {Flex} from 'antd';
import ContentSidebar from '../dashboardContent/ContentSidebar';
import Activity from '../dashboardContent/Activity';


export default function SideContent () {
    return (
    <div>
        <Flex vertical gap="2.3rem"  style={{width:350}}>
            <ContentSidebar/> 
            <Activity/>          
        </Flex>

    </div>);
}