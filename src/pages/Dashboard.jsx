import MainContent from "../dashboardContent/MainContent";
import SideContent from "../components/SideContent";

export default function Dashboard () {
    return (
        <div className="dashboard ">
           <MainContent />
           <SideContent/>
        </div>
    )
}
