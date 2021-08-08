import React, {useEffect, useState} from 'react';
import './App.css';
import Map from './Map/';
import {loadMapApi} from "./utils/GoogleMapsUtils";

function App() {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [distanceKm, setDistanceKm] = useState<number>(-1);

    useEffect(() => {
        const googleMapScript = loadMapApi();
        googleMapScript.addEventListener('load', function () {
            setScriptLoaded(true);
        });
    }, []);

    const renderDistanceSentence = () => {
        return `Distance between selected marker and home address is ${distanceKm} km.`;
    };

    return (
        <div className="App">
            {scriptLoaded && (
                <Map
                  mapType={google.maps.MapTypeId.ROADMAP}
                  mapTypeControl={true}
                  setDistanceKm={setDistanceKm}
                />
            )}
            {distanceKm > -1 && renderDistanceSentence()}
        </div>
    );
}

export default App;
