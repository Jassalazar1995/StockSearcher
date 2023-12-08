import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Dashboard ({ stock }) {

  return (
    <div>  
        {/* 
        The array method, map, that is working on the array gathered from
        the API that is destructuring the stock to get its name and symbol
        to display the stock name, and to provide a link to the stock's
        page that will show price.
         */}
        {stock.map(stock => {
            const {name, symbol} = stock

            return (
                <Link key={symbol} to = {'/stock/' + symbol}>
                    <h2>{name}</h2>
                </Link>
            )
        })}
    </div>
  )
}
