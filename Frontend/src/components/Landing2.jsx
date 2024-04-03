import homeMobile from "../assets/Home_Mobile.png";
import circle from "../assets/circle.svg";
import clock from "../assets/TimeChase.png";
import money from "../assets/Money.png";
import support from "../assets/Support.png";
function Landing2(){
    return(
        <>
            <div className="text-center flex flex-col items-center">
                <p className="p-10 font-bold uppercase text-4xl lg:text-[4rem]">How <span className="text-green-400">CoRide</span> works</p>
                <p className="max-w-[45ch]">Download and install the CoRide app. Enter your phone number and make your user account. when approved you may start driving.</p>
            </div>
            <div className="grid grid-cols-3 grid-rows-2 p-10">
                <div className="grid justify-items-end content-start">
                    <div className="relative">
                        <img src={circle} alt="1" />
                        <div className="flex justify-center items-center w-[100%] h-[98%] absolute  bottom-0 top-0 left-0 rigth-0 text-center">
                            <p className="text-green-400 text-3xl font-bold">1</p>
                        </div>
                    </div>
                    <p>REQUEST A RIDE</p>
                    <p className="max-w-[45ch] text-right">Have to reach office or going for shopping ? Just put your current location and destination and search a ride that suits you</p>
                </div>
                <div className="grid justify-items-start content-start">
                    <div className="relative">
                        <img src={circle} alt="2" />
                        <div className="flex justify-center items-center w-[100%] h-[98%] absolute  bottom-0 top-0 left-0 rigth-0 text-center">
                            <p className="text-green-400 text-3xl font-bold">2</p>
                        </div>
                    </div>
                    <p>REQUEST A RIDE</p>
                    <p className="max-w-[45ch] text-left">Have to reach office or going for shopping ? Just put your current location and destination and search a ride that suits you</p>
                </div>
                
                <div className="relative row-span-2 col-start-2 row-start-1 justify-self-center">
                    <img src={homeMobile} alt="" />
                    {/* <div className="rounded-full bg-green-400 w-[50%] h-[120%] absolute">
                    </div> */}
                </div>
                
                <div className="grid justify-items-end content-start">
                    <div className="relative">
                        <img src={circle} alt="3" />
                        <div className="flex justify-center items-center w-[100%] h-[98%] absolute  bottom-0 top-0 left-0 rigth-0 text-center">
                            <p className="text-green-400 text-3xl font-bold">3</p>
                        </div>
                    </div>
                    <p>INSTANT NOTIFICATIONS</p>
                    <p className="max-w-[45ch] text-right">Get instant notifications for your rides and be in contact with fellow riders all the time</p>
                </div>
                <div className="grid justify-items-start content-start">
                    <div className="relative">
                        <img src={circle} alt="4" />
                        <div className="flex justify-center items-center w-[100%] h-[98%] absolute  bottom-0 top-0 left-0 rigth-0 text-center">
                            <p className="text-green-400 text-3xl font-bold">4</p>
                        </div>
                    </div>
                    <p>INSTANT NOTIFICATIONS</p>
                    <p className="max-w-[45ch] text-leftt">Get instant notifications for your rides and be in contact with fellow riders all the time</p>
                </div>
            </div>


            {/* Coride benefits */}

            <div className="font-bold text-5xl p-10 text-center">
                <span className="text-green-400">CoRide</span> Benefits
            </div>
            <div className="grid md:gap-5 p-10">
                <div className="flex justify-between w-[85%] rounded-lg bg-white p-5 m-5">
                    <div className="flex flex-col justify-center">
                        <div className="flex items-cetner">
                            <p className="text-green-400 text-6xl pr-5">01.</p>
                            <p className="flex items-center font-bold text-xl">Flexible<br></br> working hours</p>
                        </div>
                        <div>
                            <p className="max-w-[45ch] text-[1.25rem] pt-3 text-gray-400">You can decide when, and how much time you want to drive.</p>
                        </div>
                    </div>
                    <div className="md:px-10">
                        <img src={clock} alt="" />
                    </div>
                </div>
                <div className="justify-self-end flex md:flex-row-reverse justify-between w-[85%] rounded-lg bg-white p-5 m-5">
                    <div className="flex flex-col justify-center">
                        <div className="flex items-cetner">
                            <p className="text-green-400 text-6xl pr-5">02.</p>
                            <p className="flex items-center font-bold text-xl">Earnings</p>
                        </div>
                        <div>
                            <p className="max-w-[45ch] text-[1.25rem] pt-3 text-gray-400">By driving with CoRide you can earn more.</p>
                        </div>
                    </div>
                    <div className="md:px-10">
                        <img src={money} alt="" />
                    </div>
                </div>
                <div className="flex justify-between w-[85%] rounded-lg bg-white p-5 m-5">
                    <div className="flex flex-col justify-center">
                        <div className="flex items-cetner">
                            <p className="text-green-400 text-6xl pr-5">03.</p>
                            <p className="flex items-center font-bold text-xl">Customer<br></br> support 24/7</p>
                        </div>
                        <div>
                            <p className="max-w-[45ch] text-[1.25rem] pt-3 text-gray-400">CoRide is a local service provider and we are proud to support you in your local language. We are proud to be at your service 24/7!</p>
                        </div>
                    </div>
                    <div className="md:px-10">
                        <img src={support} alt="" />
                    </div>
                </div>                
            </div>
        </>
    )
}

export default Landing2