import React from 'react';
import Banner from './Banner';
import RouteMap from './../components/RouteMap'
import FleetOverview from './FleetOverview';


export default function MainContent () {
    return (
        <div>
            <div >
                    <Banner/>
                    <RouteMap/>
                    <FleetOverview/>


                    
                
               

            </div>
        </div>
    );
}