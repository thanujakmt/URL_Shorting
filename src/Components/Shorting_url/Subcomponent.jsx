
import { useState,useEffect } from "react";

function  Subcomponent({destination_url,short_url}) {
   
    const [buttonText, setButtonText] = useState('Copy');
    const handleCopyClick = () => {
        navigator.clipboard.writeText(short_url).then(() => {
            setButtonText('Copied!')
        }, () => {
        });
    }

    return (
        <>
            <div className="flex md:flex-row flex-col items-center justify-between w-[100%] my-5 bg-white rounded-[6px] px-5 py-1 ">
                <div className="firsturl truncate">
                    <a href="https://www.frontendmentor.io/challenges/url" className="">{destination_url}</a>
                </div>
                <div className="shortenurl flex gap-6">
                    <a href="https://www.frntmtor.io/chles/url" className="text-Cyan">{short_url}</a>
                    <button className="bg-Cyan text-white text-[0.9em] px-6 rounded-[6px] py-1" onClick={handleCopyClick}>{buttonText}</button>
                </div>
            </div>
        </>
    )
}

export default Subcomponent
