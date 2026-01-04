import {useEffect, useRef } from 'react';
import L from 'leaflet';
import  type{ MapProps } from '../types';
// import markerIcon2x from '/node_modules/leaflet/dist/images/marker-icon-2x.png' ;
// import markerIcon from '/node_modules/leaflet/dist/images/marker-icon.png';
import locationIcon from '../assets/icon-location.svg';

const defaultCenter: [number, number] = [0,0];
const defaultZoom = 2;

const locationMarkerIcon = L.icon({
    iconUrl: locationIcon,
    iconSize: [35,35],
    iconAnchor: [17,45],
    
})
export default function Map({data}:MapProps){
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<L.Map | null>(null);
    const markerRef = useRef<L.Marker | null>(null);


    useEffect(() => {
        if (!mapContainerRef.current) return;
        if (mapRef.current) return;

        const map = L.map(mapContainerRef.current).setView(defaultCenter,defaultZoom);

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

         const marker = L.marker(defaultCenter, {icon:locationMarkerIcon,}).addTo(map);

         mapRef.current = map;
         markerRef.current = marker;
    }, []) ;

    useEffect(()=> {
        if (!data) return;
        if (!mapRef.current || !markerRef.current) return;

        const {lat,lng} = data.location;
        mapRef.current.setView([lat,lng], defaultZoom);
        markerRef.current.setLatLng([lat,lng]);
    },  [data]);
    return <div ref={mapContainerRef} className='map'/>;
    }
