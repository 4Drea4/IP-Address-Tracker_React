import {useEffect, useRef } from 'react';
import type { IpData } from '../types';
import L from 'leaflet';
import { MapProps } from '../types';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png' ;
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

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
            shadowUrl: markerShadow,
        });
    }, []);

}