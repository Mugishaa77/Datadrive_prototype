import FleetBanner from "../fleet/FleetBanner";
import VehicleInfoTable from "../fleet/VehicleInfoTable";

export default function Fleet () {
    return (
        <div className="fleet ">
            <FleetBanner/>
            <VehicleInfoTable/>

        </div>
    )
}