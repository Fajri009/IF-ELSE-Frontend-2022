import React from "react";
import './Page1.css';
import {ReactComponent as Bg} from '../../../Assets/Page2/Desert2.svg'
import Rangkaian1 from "../Components/Rangkaian1";

const Page2 = () => {

    return(
        <>
            <div className="px-2 pt-5 w-100 d-flex align-items-end" style={{background:'linear-gradient(#451400,#F58000)',maxHeight:'9000vh'}} >
                <Bg className="position-absolute" style={{left:'0', zIndex:'1'}}/>
                <main className="container-lg" style={{zIndex:'10', marginTop:'15vh'}} >
                    <Rangkaian1/>
                </main>
            </div>
        </>
    );
}

export default Page2;