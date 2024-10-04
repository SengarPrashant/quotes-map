import { http2 } from "./http";

export function GetMyLoaction(cb=()=>{}) {
    const ob = { lat: '', longt: '' }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        console.log("Geolocation not supported");
    }

    function success(position) {
        ob.lat = position.coords.latitude;
        ob.longt = position.coords.longitude;
        cb(ob);
    }
    function error(err){
        console.log(err);
        cb(null)
    }
}


export function getPostalCodeFromCoordinates(lat, lon) {
    http2.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`).then(res=>{
        const {data}= res;
        if (data && data.address && data.address.postcode) {
            console.log('Postal Code:', data.address.postcode);

        } else {
            console.log('Postal code not found');
        }
    }).catch(err=>console.error('Error fetching data:', err));
}

export function getAddressFromPostalCode(postalCode, onSuccess=()=>{}){
    const url = `https://nominatim.openstreetmap.org/search?postalcode=${postalCode}&format=json&addressdetails=1`;
    http2.get(url).then(res=>{
        onSuccess(res.data);
    }).catch((error)=>{
        console.log(error);
        onSuccess(null)
    });
}


