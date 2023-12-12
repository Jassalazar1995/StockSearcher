import { useEffect, useState } from "react";


import { useParams } from "react-router-dom";

function StockPage(props) {

    let [stock, setStock] = useState({});
    let { symbol } = useParams();

    async function getStock() {
        let response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=8gPQwP9FXQiWtclAbgoZ6f4WyXLVbO2R`)
        let data = await response.json()
        setStock(data[0]);
    }

    useEffect(() => { getStock() }, [])

    return (
        <div>
            <h1>{stock.companyName}</h1>
            <section className="stock-info">
                <h2>CEO: {stock.ceo}</h2>
                <h2>Changes: {stock.changes}</h2>
                <h2>Price: ${stock.price}</h2>
                <h2>Symbol: {stock.symbol}</h2>
            </section>
        </div>
    );
}

export default StockPage;
