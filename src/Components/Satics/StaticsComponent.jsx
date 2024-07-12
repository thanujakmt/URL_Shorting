
function StaticsComponent({ item, showAfter, top }) {
    return (
        <>
            <div className={`bg-white w-[300px]  lg:w-[300px] xl:w-[400px] md:w-[240px] rounded-[5px] h-[250px] ${top}  lg:px-0 pt-16 flex flex-col gap-3 relative
              z-0
             md:after:w-[250px]
             md:after:h-[5px]
             after:w-[5px]
             after:h-[250px]
             ${showAfter ? 'after:flex' : 'after:hidden'}
             after:absolute
             md:after:right-0
             after:right-[50%]
             after:top-[50%]
             after:translate-y-[50%]
             after:translate-x-[50%]
             after:bg-Cyan
             after:-z-0
            `}>
                <div className="z-20 bg-white px-10 md:px-2 w-full lg:px-10">
                    <img className=" -top-10 left-8 bg-Dark_Violet rounded-[50%] p-5 absolute" src={item.image} alt="" />
                    <div className="heading">
                        <h1 className="text-Very_Dark_Blue text-[1.4em] font-extrabold">{item.title}</h1>
                    </div>
                    <div>
                        <p className="text-Grayish_Violet font-[500]">{item.para}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StaticsComponent
