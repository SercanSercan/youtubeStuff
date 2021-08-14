import React, {useEffect, useState} from 'react';
import './App.css';
import Map from './Map/';
import {loadMapApi} from "./utils/GoogleMapsUtils";

function App() {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [distanceInKm, setDistanceInKm] = useState<number>(-1);

    useEffect(() => {
        const googleMapScript = loadMapApi();
        googleMapScript.addEventListener('load', function () {
            setScriptLoaded(true);
        });
    }, []);

    const renderDistanceSentence = () => {
        return (
            <div className='distance-info'>
                {`Distance between selected marker and home address is ${distanceInKm}km.`}
            </div>
        );
    };

    return (
        <div className="App">
            {scriptLoaded && (
                <Map
                  mapType={google.maps.MapTypeId.ROADMAP}
                  mapTypeControl={true}
                  setDistanceInKm={setDistanceInKm}
                />
            )}
            {distanceInKm > -1 && renderDistanceSentence()}
        </div>
    );
}

export default App;
