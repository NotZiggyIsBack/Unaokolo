const locations = [
    {"link":"/", "name":"početna"},
    {"link":"/locations", "name":"lokacije"},
    {"link":"/about", "name":"o nama"},
]

export default function Nav() {
    return (
        <div className="bg-blue-900 w-[95%] h-[56px] justify-between text-white m-auto mt-5 rounded-[10px] box-border p-2 flex items-center shadow-lg border gap-3">
            <div className="flex items-center gap-3 justify-evenly w-max h-full">
                <div className="flex items-center justify-center gap-3 w-max whitespace-nowrap">
                    <i className="fa-solid fa-sun-cloud text-[24px]"></i>
                    <span className="block">Cloudy, 22.3 °C</span> 
                </div>

                <div className="bg-neutral-400 w-[2px] h-full opacity-[0.3] rounded-xl block">

                </div>

                <div className="flex items-center gap-10 overflow-x-clip">
                    {locations.map((obj, i) => {
                        return (
                            <a href={obj.link} key={i} className="capitalize hover:translate-y-[-2px] hover:drop-shadow-md shadow-white transition-all font-bold">{obj.name}</a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}