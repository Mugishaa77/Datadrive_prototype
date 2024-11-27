import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1IjoibXVnaXNoYWE3NyIsImEiOiJjbTN6d2M4MmsyMzMwMmpzOXJlY3Y0Y2I5In0.jSxZ-cp29SUTDs0cB-ZUpA"; // Replace with your token

const RouteMap = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (!map.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11",
                center: [36.8219, -1.2921], // Starting point [lng, lat] (e.g., Nairobi, Kenya)
                zoom: 12,
            });

            map.current.addControl(new mapboxgl.NavigationControl(), "top-right");
        }

        // Fetch the route
        const getRoute = async () => {
            const start = [36.8219, -1.2921]; // Example: Nairobi
            const end = [36.8190, -1.2833]; // Example: Another point in Nairobi

            const response = await axios.get(
                `https://api.mapbox.com/directions/v5/mapbox/driving/${start.join(",")};${end.join(",")}?geometries=geojson&access_token=${mapboxgl.accessToken}`
            );

            const data = response.data.routes[0].geometry;

            // Draw the route on the map
            map.current.on("load", () => {
                map.current.addSource("route", {
                    type: "geojson",
                    data: {
                        type: "Feature",
                        properties: {},
                        geometry: data,
                    },
                });

                map.current.addLayer({
                    id: "route",
                    type: "line",
                    source: "route",
                    layout: {
                        "line-join": "round",
                        "line-cap": "round",
                    },
                    paint: {
                        "line-color": "#3b9ddd",
                        "line-width": 4,
                    },
                });
            });
        };

        getRoute();
    }, []);

    return (
        <div  style={{width:"100%"}} >
            <div
                ref={mapContainer}
                style={{ maxWidth: "100%", height: "500px", padding: "1rem" }}
            />
        </div>
    );
};

export default RouteMap;
