import React from 'react';

import { ResponsiveBubble } from '@nivo/circle-packing'
import languageData from './data.json';

export default class LanguageChart extends React.Component {
    // make sure parent container have a defined height when using responsive component,
    // otherwise height will be 0 and no chart will be rendered.
    // website examples showcase many properties, you'll often use just a few of them.
    render() {
        return (
            <ResponsiveBubble
                root={ languageData }
                margin={{
                    "top": 0,
                    "right": 0,
                    "bottom": 0,
                    "left": 0
                }}
                identity="name"
                leavesOnly={ true }
                value="number"
                colors="white"
                colorBy="depth"
                padding={ 30 }
                tooltip={function(e){return e.id+": " + e.value + " million speakers"}}
                labelTextColor="#0073AF"
                labelSkipRadius={ 30 }
                borderColor="#0073AF"
                borderWidth={ 3 }
                //fill= "#fff"
                animate={ true }
                motionStiffness={ 90 }
                motionDamping={ 12 }
            />
        );
    };
}
