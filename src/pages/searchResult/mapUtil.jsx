import { Box } from '@mui/material';
import React from 'react';
import { Map, Overlay, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { defaults as defaultControls, Zoom } from 'ol/control';
import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Style, Icon, Text, Fill, Stroke } from 'ol/style';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';


const dummyLocations = [
    { lat: 28.4595, lon: 77.0266, quote: '$240', postalcode: '122001', metadata: 'DLF Cyber City' },
    { lat: 28.4370, lon: 77.0310, quote: '$250', postalcode: '122018', metadata: 'Sector 29 Market' },
    { lat: 28.4143, lon: 77.0436, quote: '$280', postalcode: '122002', metadata: 'Sohna Road' },
    { lat: 28.5040, lon: 77.0980, quote: '$340', postalcode: '122011', metadata: 'Palam Vihar' },
    { lat: 28.4591, lon: 77.0727, quote: '$240', postalcode: '122016', metadata: 'Sector 56' },
    { lat: 28.4662, lon: 77.0321, quote: '$140', postalcode: '122015', metadata: 'Golf Course Road' },
    { lat: 28.4179, lon: 77.0733, quote: '$230', postalcode: '122017', metadata: 'Medanta Hospital' },
    { lat: 28.4089, lon: 77.0846, quote: '$234', postalcode: '122004', metadata: 'Sector 47' },
    { lat: 28.5035, lon: 77.0721, quote: '$255', postalcode: '122022', metadata: 'MG Road Metro Station' },
    { lat: 28.4574, lon: 77.0301, quote: '$267', postalcode: '122009', metadata: 'Huda City Centre' },
];


export const MapObject = (mapRef) => {
    return new Map({
        target: mapRef.current, // The container to render the map
        layers: [
            new TileLayer({
                source: new OSM(), // OpenStreetMap as the tile layer source
            }),
        ],
        view: new View({
            center: fromLonLat([77.07524244722222, 28.43318679722222]), // Map center in lon/lat (use transform for proper projections)
            zoom: 14, // Initial zoom level
        }),
        controls: defaultControls().extend([
            new Zoom({ className: 'custom-zoom-control' })// Custom class for positioning
        ])
    });
}

export const getMarkers = (locations = dummyLocations) => {
    const vectorSource = new VectorSource();
    locations.forEach((location) => {
        const { lat, lon, postalcode, quote, metadata } = location;

        const marker = new Feature({
            geometry: new Point(fromLonLat([lon, lat])), // Convert lat/lon to the map's projection
        });

        marker.set('meta', { metadata, postalcode });

        // const svgIcon = createSvgIcon(quote,'#19a21d','#a5f9a8');
        const svgIcon = createSvgIcon(quote);

        marker.setStyle(
            new Style({
                image: new Icon({
                    anchor: [0.5, 1],
                    src: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgIcon)}`,
                    scale: 0.8, // Scale the marker size
                }),
            })
        );
        // Add the marker to the vector source
        vectorSource.addFeature(marker);
    });

    return new VectorLayer({
        source: vectorSource,
    });

}

const createSvgIcon = (text, color = '#065ad8', shadowColor = "#81b8f4") => {
    // createSvgIcon(postalcode,'#19a21d','#a5f9a8');
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="51" viewBox="0 0 57 51" fill="none">
    <circle opacity="0.6" cx="29" cy="41" r="10" fill="#A6CDF7"/>
    <circle cx="29" cy="40.8" r="6" fill="${shadowColor}"/>
    <mask id="path-3-inside-1_146_5676" fill="white">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H23.2265L28.134 40.5C28.5189 41.1667 29.4811 41.1667 29.866 40.5L34.7735 32H53C55.2091 32 57 30.2091 57 28V4C57 1.79086 55.2091 0 53 0H4Z"/>
    </mask>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H23.2265L28.134 40.5C28.5189 41.1667 29.4811 41.1667 29.866 40.5L34.7735 32H53C55.2091 32 57 30.2091 57 28V4C57 1.79086 55.2091 0 53 0H4Z"
     fill="${color}"/>
    <path d="M23.2265 32L24.0925 31.5L23.8038 31H23.2265V32ZM28.134 40.5L27.2679 41L28.134 40.5ZM29.866 40.5L29 40L29.866 40.5ZM34.7735 32V31H34.1962L33.9075 31.5L34.7735 32ZM1 4C1 2.34315 2.34315 1 4 1V-1C1.23858 -1 -1 1.23858 -1 4H1ZM1 28V4H-1V28H1ZM4 31C2.34314 31 1 29.6569 1 28H-1C-1 30.7614 1.23857 33 4 33V31ZM23.2265 31H4V33H23.2265V31ZM22.3605 32.5L27.2679 41L29 40L24.0925 31.5L22.3605 32.5ZM27.2679 41C28.0378 42.3333 29.9622 42.3333 30.7321 41L29 40L27.2679 41ZM30.7321 41L35.6395 32.5L33.9075 31.5L29 40L30.7321 41ZM53 31H34.7735V33H53V31ZM56 28C56 29.6569 54.6569 31 53 31V33C55.7614 33 58 30.7614 58 28H56ZM56 4V28H58V4H56ZM53 1C54.6569 1 56 2.34315 56 4H58C58 1.23858 55.7614 -1 53 -1V1ZM4 1H53V-1H4V1Z" fill="white" mask="url(#path-3-inside-1_146_5676)"/>
    
    <!-- Dynamic Text, adjusted for vertical centering -->
    <text x="29" y="17" font-family="Arial, sans-serif" font-size="14" fill="#FFFFFF" text-anchor="middle" alignment-baseline="middle">
    ${text}
    </text>
</svg>`;
};


export const AddToolTip = (map) => {
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'ol-tooltip ol-tooltip-hidden'; // Add some initial hidden class

    const tooltip = new Overlay({
        element: tooltipElement,
        // offset: [10, 0],
        // positioning: 'bottom-left',
        offset: [-34, -73],
        positioning: 'top-center',
    });

    map.addOverlay(tooltip);

    map.on('pointermove', function (event) {
        const feature = map.forEachFeatureAtPixel(event.pixel, function (feat) {
            return feat;
        });

        if (feature) {
            const { postalcode, metadata } = feature.get('meta');
            const coordinates = feature.getGeometry().getCoordinates();
            tooltip.setPosition(coordinates);
            tooltipElement.innerHTML = postalcode; // Set tooltip text here
            tooltipElement.classList.remove('ol-tooltip-hidden');
        } else {
           tooltipElement.classList.add('ol-tooltip-hidden');
        }
    });

    const style = document.createElement('style');
    style.innerHTML = `
            .ol-tooltip {
                justify-content:center;
                align-items:center;
                display:flex;
                height:20px;
                background-color: #175190;
                color:#fff;
                width:60px;
                text-align:center;
                border-radius:16px;
                padding: 4px;
                white-space: nowrap;
            }
            .ol-tooltip-hidden {
                display: none;
            }
            `;
    document.head.appendChild(style);
}