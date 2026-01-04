import {useEffect, useRef } from 'react';
import type { IpData } from '../types';
import L from 'leaflet';
import  type{ MapProps } from '../types';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png' ;
import markerIcon from '/node_modules/leaflet/dist/images/marker-icon.png';
const defaultCenter: [number, number] = [51.505, -0.09]
const defaultZoom = 10;

export default function Map({data}:MapProps){
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<L.Map | null>(null);
    const markerRef = useRef<L.Marker | null>(null);

    useEffect(() => {
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: markerIcon2x,
            iconUrl: markerIcon,
           
        });
    }, []);


    useEffect(() => {
        if (!mapContainerRef.current) return;
        if (mapRef.current) return;

        const map = L.map(mapContainerRef.current).setView(defaultCenter,defaultZoom);

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

         const marker = L.marker(defaultCenter).addTo(map);

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
