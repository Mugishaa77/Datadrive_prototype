import MainContent from "../dashboardContent/MainContent";
import SideContent from "../components/SideContent";

export default function Dashboard () {
    return (
        <div className="dashboard ">
        <div className="dashboard-one ">
            <MainContent/>
        </div>
        <div className="dashboard-two">
           < SideContent/>
        </div>
        </div>
    )
}
