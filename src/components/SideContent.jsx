import {Flex} from 'antd';
import ContentSidebar from '../dashboardContent/ContentSidebar';
import Activity from '../dashboardContent/Activity';


export default function SideContent () {
    return (
    <div>
            <ContentSidebar/> 
            <Activity/>          

    </div>);
}