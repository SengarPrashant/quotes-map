import { Box } from '@mui/material';
import React from 'react';
import QuoteSearch from '../../components/search/QuoteSearch';
import { getMarkers, MapObject, AddToolTip } from './mapUtil';
import YourInfo from '../../components/YourInfo/YourInfo';

const SearchResult = () => {
    const mapRef = React.useRef(null); // To reference the map container

    React.useEffect(() => {
        // Initialize the OpenLayers map
        const map = MapObject(mapRef);
        const markers = getMarkers();
        map.addLayer(markers);
        AddToolTip(map);
        // Clean up the map on unmount
        return () => map.setTarget(null);
    }, []);

    return (
        <>
            <YourInfo />
            <Box className="content-h">
                <Box className="floatingQuoteSearch" sx={{
                    md: { background: '#fff', paddingY: 8 }
                }}>
                    <QuoteSearch />
                </Box>
                <div className='content-h'
                    ref={mapRef}
                    style={{ width: 'calc(100% - 32px)', padding: 16, paddingTop: 0 }} // Set map size4
                ></div>
            </Box>
        </>
    );
};

export default SearchResult;