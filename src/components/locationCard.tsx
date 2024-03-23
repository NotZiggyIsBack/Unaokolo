export default function Card({ cardData, id }) {
    return (
        <a href={"/location/"+id} className='cursor-pointer flex-auto min-w-[599px] max-w-[600px] h-[max] bg-white rounded-xl relative box-border p-1 overflow-clip shadow-xl'>
            <div className='absolute top-0 left-0 w-full h-[200px] '>
                <img className='object-cover w-full h-full' src={"/assets/" + cardData.slika} alt="slika"/>
            </div>
            <div className='mt-[200px] box-border px-2 flex flex-col gap-3'>
                <p className='font-bold text-[36px] '>{cardData.ime}</p>
                <p className=''>{cardData.kratkiOpis}</p>
            </div>
        </a>
    )
}