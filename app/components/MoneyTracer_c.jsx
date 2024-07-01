'use client'

import { useState } from "react"

function MoneyTracer_c(){
    const style = {
        backgroundColor:"red",
        height:"300px",
        paddingTop:"30px",
        paddingLeft:"auto",
        paddingRight:"auto"
    }

    const [money, setMoney] = useState({
        netBalance : 10444,

    })

    return (
        <div style={style}>
            <h1>This is Money Tracer</h1>
            <h1>Net balance: ${money.netBalance}</h1>
            <h1>What to spend: </h1>
            <form>
                <input className="input" type="text" name="" id="" />
                <button className="button-27" style={{marginLeft:"10px",width:"100px",textAlign:"center"}}>Spent</button>
                <button className="button-27" style={{marginLeft:"10px",width:"100px",textAlign:"center"}}>Gained</button>
            </form>
        </div>
    )
}

export default MoneyTracer_c