import React, {Component} from 'react';

class Ticker extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        const script = document.createElement('script');
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
        script.async = false;
        script.innerHTML = JSON.stringify({
            "whitelabel": true,
            "symbols": [
                {
                    "proName": "COINBASE:BTCUSD",
                    "title": "BTC / USD"
                },
                {
                    "proName": "COINBASE:ETHUSD",
                    "title": "ETH / USD"
                },
                {
                    "description": "BNB / USD",
                    "proName": "BINANCE:BNBUSD"
                },
                {
                    "description": "TOTAL MCAP",
                    "proName": "CRYPTOCAP:TOTAL"
                },
            ],
            "colorTheme":
                "dark",
            "isTransparent":
                true,
            "showSymbolLogo":
                true,
            "locale":
                "en"
        })

        this.myRef.current.appendChild(script);
    }

    render() {
        return (
                <div className="tradingview-widget-container" ref={this.myRef}>
                    <span className="tradingview-widget-container__widget"/>
                </div>
        );
    }
}

export default Ticker;