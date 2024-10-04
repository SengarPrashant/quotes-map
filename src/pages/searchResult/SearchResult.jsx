import { Box } from '@mui/material';
import React from 'react';
import QuoteSearch from '../../components/search/QuoteSearch';
import { getMarkers, MapObject, AddToolTip, AddBookACallModal, MapMoveEvent } from './mapUtil';
import YourInfo from '../../components/YourInfo/YourInfo';
import BookCallModel from '../../components/BookCallModal/BookCallModel';

const SearchResult = () => {
    const mapRef = React.useRef(null); // To reference the map container
    const [bookCallDialog, setBookCallDialog] = React.useState({ open: false, data: {}, position: [-200, 0] });

    React.useEffect(() => {
        // Initialize the OpenLayers map
        const map = MapObject(mapRef);
        const markers = getMarkers();
        map.addLayer(markers);
        AddToolTip(map);
        AddBookACallModal(map,setBookCallDialog);
        MapMoveEvent(map,setBookCallDialog);
        // Clean up the map on unmount
        return () => map.setTarget(null);
    }, []);

    const closeBookCallDialog=()=>{
        setBookCallDialog({ open: false, data: {}, position: [-200, 0] });
    }

    return (
        <>
            <YourInfo />
            <BookCallModel data={bookCallDialog.data} onClose={closeBookCallDialog} popupPosition={bookCallDialog.position} />
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