
import StaticsComponent from "../../Components/Satics/StaticsComponent";
import { StaticsData } from "../../Components/Satics/StaticsData";

function Statics() {
    return (
        <>
            <div className=" flex flex-col justify-center items-center py-10 bg-light_blue font-font_Po ">
                <div className=" container text-center">
                    <div className="heading">
                        <h1 className=" text-[2em] font-[1000] text-Very_Dark_Blue font-font_family">Advanced Statistics</h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <p className=" text-Grayish_Violet text-[1.1em] font-[600] font-font_family py-4 w-[450px] ">Track how your links are performing across the web with our advanced statistics dashboard.</p>
                    </div>
                </div>
                <div className=" relative container grid md:grid-cols-3 pt-20 place-items-center mb-[100px]">
                    {
                        <>
                            <StaticsComponent key={StaticsData[0].id} item={StaticsData[0]} showAfter={true} top={'top-[0px]'} />
                            <StaticsComponent key={StaticsData[1].id} item={StaticsData[1]} showAfter={true} top={'top-[50px]'} />
                            <StaticsComponent key={StaticsData[2].id} item={StaticsData[2]} showAfter={false} top={'top-[100px]'} />
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default Statics;
