"use client";
import Popup from "@/components/locationPopup2";
import locations from "@/components/locs.json";
import "../../globals.css";

export default function Page({ params }: any) {
    return (
        <div id="lokacijaPage" className="flex justify-center items-center w-full h-full">
            <div id="lokacijaPageBlur" className="flex justify-center items-center w-full h-full">
                <Popup cardData={locations[params.id]}/>
            </div>
        </div>
    )
}