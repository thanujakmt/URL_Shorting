
function ShorterLink() {
    return (
        <>
            <div className=" flex justify-center items-center font-font_Po">
                <div className="main md:grid md:grid-cols-2 container place-content-center">
                    <div className="image_box order-2 flex justify-center items-center">
                        <img src="/images/illustration-working.svg" className=" md:h-80 2xl:min-h-[420px]" alt="illutration" />
                    </div>
                    <div className="content flex flex-col gap-2 my-10 md:m-10 2xl:m-32">
                        <div className="heading">
                            <h1 className=" 2xl:text-[4em] lg:text-[3.6em] md:text-left md:text-[2.4em] text-[3em] font-[1000] text-center font-font_family">More than just Shorter links</h1>
                        </div>
                        <div className="para">
                            <p className=" md:text-left text-Gray md:text-[1.2em] lg:text-[1.4em] text-xl text-center">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                        </div>
                        <div className="getstart my-5 flex justify-center items-center md:justify-start">
                            <a href="" className=" text-white bg-Cyan rounded-[35px] px-8 py-3 text-[1.3em] font-font_family font-bold">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShorterLink;