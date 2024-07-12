
import { useState, useRef } from "react";
import axios from "axios";
import { data } from "autoprefixer";
import { useLocalStore } from "../../Store/useStore";

function Inputfield() {

    const [url, setUrl] = useState('');
    const { shortlyStorage, setLocalShortlyData } = useLocalStore()
    const inputField = useRef()
    const [error, setError] = useState('');

    function checkUrl(url) {
        console.log(url);
        const urlPattern = new RegExp('https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&//=]*)', 'g');
        return urlPattern.test(url);
    }

    const handleInputChange = (event) => {
        setUrl(event.target.value);
        if (event.target.value !== '') {
            setError('')
        }
    };

    const UrlShorting = async (e) => {
        e.preventDefault();
        const isValidUrl = checkUrl(url);
        console.log(url)
        console.log(isValidUrl)

        if (url.trim() === '') {
            setError('This field is required.')
            return;
        }
        else if (!isValidUrl) {
            setError('Please enter a valid URL.');
            return;
        }

        try {
            const response = await axios.post('https://smolurl.com/api/links', { url });
            let Data = await response.data.data
            setLocalShortlyData([...shortlyStorage, Data])
            console.log(Data)
            setUrl('');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="font-font_Po flex flex-col justify-center items-center bg-light_blue mt-[100px] relative">
                <div className=" container flex justify-center items-center bg-[url('/images/bg-shorten-desktop.svg')] h-40 bg-Dark_Violet lg:w-[1110px] bg-center bg-no-repeat rounded-[10px] absolute">
                    <div className=" grid md:grid-cols-4 lg:grid-cols-6 gap-4">
                        <div className="input lg:col-span-5 md:col-span-3 ">
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <input type="text" placeholder="Shorten a link here..." className=" outline-none rounded-[10px] text-[1.3em] px-4 py-4 text-left  md:w-[500px] lg:w-[750px] truncate" value={url} onChange={handleInputChange} />
                        </div>
                        <div className=" lg:col-span-1 md:col-span-1 flex justify-center ">
                            <button className=" px-8 bg-Cyan hover:bg-Cyan_light text-white py-4 font-semibold rounded-[10px] font-font_family text-[1.2em]" onClick={UrlShorting} >Shorten It!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Inputfield;
