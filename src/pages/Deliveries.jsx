import DeliveryBanner from "../deliveries/DeliveryBanner"
import VehicleTable from "../deliveries/VehicleTable"
export default function Deliveries () {
    return (
        <div className="deliveries ">
            <DeliveryBanner/>
            <VehicleTable/>

        </div>
    )
}