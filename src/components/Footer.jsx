/* eslint-disable react/prop-types */
import { useState } from "react";

function Footer ({todaysDate}){



    const [visible, setVisible] = useState(true)

    function hide() {
        setVisible(false)

        setTimeout(() => {setVisible (true)}, 2000);
    }

    if(!visible){
        return null
    } 

    return(
        <footer onClick={hide}>
            <h1>Footer {todaysDate} </h1>
        </footer>
    )
}

export default Footer;