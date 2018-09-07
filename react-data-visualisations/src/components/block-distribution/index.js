import React from 'react';

import { ResponsiveWaffle } from '@nivo/waffle'
import blockDistributionData from './data.json';

export default class BlockDistributionChart extends React.Component {
    // make sure parent container have a defined height when using responsive component,
    // otherwise height will be 0 and no chart will be rendered.
    // website examples showcase many properties, you'll often use just a few of them.
    render() {
        return (
            <ResponsiveWaffle
                data={ blockDistributionData }
                total={100}
                rows={30}
                columns={14}
                fillDirection="top"
                margin={{
                    "top": 0,
                    "right": 0,
                    "bottom": 0,
                    "left": 0
                }}
                //cellComponent=""
                colors="d320c"
                colorBy="id"
                borderColor="inherit:darker(0.3)"
                animate={true}
                motionStiffness={90}
                motionDamping={11}
                //tooltip="CustomTooltip(props) => (…)"
                legends={[
                    {
                        "anchor": "top-left",
                        "direction": "column",
                        "justify": false,
                        "translateX": -100,
                        "translateY": 0,
                        "itemsSpacing": 4,
                        "itemWidth": 100,
                        "itemHeight": 20,
                        "itemDirection": "left-to-right",
                        "itemOpacity": 1,
                        "itemTextColor": "#777",
                        "symbolSize": 20,
                        "effects": [
                            {
                                "on": "hover",
                                "style": {
                                    "itemTextColor": "#000",
                                    "itemBackground": "#f7fafb"
                                }
                            }
                        ]
                    }
                ]}
                theme={{
                    "tooltip": {
                        "container": {
                            "fontSize": "13px",
                            "background": "#333"
                        }
                    },
                    "labels": {
                        "textColor": "#555"
                    }
                }}
            />
        );
    };
}
