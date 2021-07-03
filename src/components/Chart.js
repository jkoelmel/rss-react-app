import React, {Component} from 'react';
import classes from "./Chart.module.css";

class Chart extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        const script = document.createElement('script');
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
        script.async = false;
        script.innerHTML = JSON.stringify({
            "whitelabel": true,
            "colorTheme": "dark",
            "dateRange": "1D",
            "showChart": true,
            "locale": "en",
            "largeChartUrl": "",
            "isTransparent": true,
            "showSymbolLogo": false,
            "width": "357",
            "height": "500",
            "color-brand": "rgba(255, 248, 233, 0.06)",
            "color-curious-blue": "rgba(255, 248, 233, 0.06)",
            "plotLineColorGrowing": "#7DFDFF",
            "plotLineColorFalling": "#F0537E",
            "gridLineColor": "rgba(42, 46, 57, 1)",
            "scaleFontColor": "rgba(120, 123, 134, 1)",
            "belowLineFillColorGrowing": "rgba(125, 253, 255, 0.12)",
            "belowLineFillColorFalling": "rgba(240, 83, 126, 0.12)",
            "symbolActiveColor": "rgba(255, 248, 233, 0.06)",
            "lastFallingFlashColor": "rgb(240, 83, 126)",
            "lastGrowingFlashColor": "rgb(125, 253, 255)",
            "changeDownColor": "#F0537E",
            "changeUpColor": "#7DFDFF",
            "changeNeutralColor": "rgb(255, 248, 233)",
            "tabs": [
                {
                    "title": "Crypto",
                    "symbols": [
                        {
                            "s": "COINBASE:BTCUSD",
                            "d": "Bitcoin"
                        },
                        {
                            "s": "COINBASE:ETHUSD",
                            "d": "Ether"
                        },
                        {
                            "s": "BINANCE:BNBUSD",
                            "d": "BNB"
                        },
                        {
                            "s": "CRYPTOCAP:TOTAL",
                            "d": "Market Cap"
                        }
                    ]
                }
            ]
        })

        this.myRef.current.appendChild(script);
    }

    render() {
        return (
            <div className={classes.chart} ref={this.myRef}>
                <div className="tradingview-widget-container__widget"/>
            </div>
        );
    }
}

export default Chart;