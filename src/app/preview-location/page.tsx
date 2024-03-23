export default function Page() {
    return (
        <div className="bg-black/10 w-full h-max flex justify-center items-center py-6">
            <div className="w-[500px] h-max bg-white overflow-clip shadow-xl rounded-xl relative pb-3">
                <div className='absolute top-0 left-0 w-full h-[200px] '>
                    <img className='object-cover w-full h-full' src={"/assets/test1.jpg"} alt="slika"/>
                </div>
                <div className='mt-[200px] box-border px-2 flex flex-col gap-3'>
                    <div className="w-full h-max mt-2">
                        <p className='font-bold text-[14px] text-blue-900 uppercase'>ime:</p>
                        <p className='font-normal text-[20px] leading-none'>Bihac</p>
                    </div>
                    <div className="w-full h-max">
                        <p className='font-bold text-[14px] text-blue-900 uppercase'>opis:</p>
                        <p className='font-light text-[16px] leading-none'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec.</p>
                    </div>
                    <div className="w-full h-max">
                        <p className='font-bold text-[14px] text-blue-900 uppercase'>lokacija:</p>
                        <img className='object-cover w-full h-[150px] border rounded-xl shadow-md' src={"/assets/mape.png"} alt="mape"/>
                    </div>
                    <div className="w-full h-max">
                        <p className='font-bold text-[14px] text-blue-900 uppercase'>U blizini:</p>
                        <div className="flex items-center gap-6">
                            <div className='cursor-pointer flex-auto w-[300px] h-[max] bg-white rounded-xl relative box-border p-1 overflow-clip shadow-xl'>
                                <div className='absolute top-0 left-0 w-full h-[100px] '>
                                    <img className='object-cover w-full h-full' src={"/assets/test1.jpg"} alt="slika"/>
                                </div>
                                <div className='mt-[100px] box-border px-2 flex flex-col gap-3'>
                                    <p className='font-bold text-[20px] '>Lokacija 2</p>
                                    <p className='text-green-400 text-[24px] font-semibold'>100 m</p>
                                </div>
                            </div>
                            <div className='cursor-pointer flex-auto w-[300px] h-[max] bg-white rounded-xl relative box-border p-1 overflow-clip shadow-xl'>
                                <div className='absolute top-0 left-0 w-full h-[100px] '>
                                    <img className='object-cover w-full h-full' src={"/assets/test1.jpg"} alt="slika"/>
                                </div>
                                <div className='mt-[100px] box-border px-2 flex flex-col gap-3'>
                                    <p className='font-bold text-[20px] '>Lokacija 3</p>
                                    <p className='text-orange-400 text-[24px] font-semibold'>840 m</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}