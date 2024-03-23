export default function Popup({ cardData }) {
    const close = () => {
        document.getElementById("popup")?.remove();
    }
    //console.log(cardData)
    return (
        <div id="popup" className="bg-transparent w-full h-max flex justify-center items-center py-6 z-50">
            <div className="w-[500px] h-max bg-white overflow-clip shadow-xl rounded-xl relative pb-3">
                {/* <div onClick={close} className="top-2 right-2 absolute z-[51] select-none cursor-pointer">
                    <i className="fa-solid fa-circle-xmark text-white font-light text-[28px]"></i>
                </div> */}
                <div className='absolute top-0 left-0 w-full h-[200px] '>
                    <img className='object-cover w-full h-full' src={"/assets/" + cardData.slika} alt="slika"/>
                </div>
                <div className='mt-[200px] box-border px-2 flex flex-col gap-3'>
                    <div className="w-full h-max mt-2">
                        <p className='font-bold text-[14px] text-blue-900 uppercase'>ime:</p>
                        <p className='font-normal text-[20px] leading-none'>{cardData.ime}</p>
                    </div>
                    <div className="w-full h-max">
                        <p className='font-bold text-[14px] text-blue-900 uppercase'>opis:</p>
                        <p className='font-light text-[16px] leading-none'>{cardData.opis}</p>
                    </div>
                    <div className="w-full h-max">
                        <p className='font-bold text-[14px] text-blue-900 uppercase'>lokacija:</p>
                        <img className='object-cover w-full h-[150px] border rounded-xl shadow-md' src={"/assets/mape.png"} alt="mape"/>
                    </div>
                    <div className="w-full h-max">
                        <p className='font-bold text-[14px] text-blue-900 uppercase'>U blizini:</p>
                        <div className="flex justify-center items-center gap-3 text-[30px] text-[rgba(25,25,25,0.4)]">
                            <i className="fa-solid fa-plug-circle-xmark"></i>
                            <span className="uppercase font-semibold">Ugašeno</span>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}