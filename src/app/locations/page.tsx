'use client';
import React from 'react';
import Nav from '../../components/nav';
import { motion } from 'framer-motion';
import Card from '@/components/locationCard';
import Popup from '@/components/locationPopup';
import { redirect } from 'next/navigation';

/* <div className='w-[95%] mt-6 m-auto flex gap-3 items-center'>
            <div className='bg-red-700 rounded-full p-1 box-content flex items-center justify-center w-[50px] h-[50px]'>
                <i className="fa-solid fa-plate-utensils text-[30px] text-white"></i>
            </div>
            <h1 className='font-bold text-[48px]'>Where to eat?</h1>
        </div> */

export default async function Page() {
  return (
    <>
        <Nav></Nav>
        <div className='w-[95%] mt-6 m-auto flex gap-3 items-center'>
            <div className='bg-green-800 rounded-full p-1 box-content flex items-center justify-center w-[50px] h-[50px]'>
                <i className="fa-solid fa-location-xmark text-[36px] text-white"></i>
            </div>
            <h1 className='font-bold text-[48px]'>Destinacije</h1>
        </div>
        <div id="destinations" className='w-[95%] flex gap-12 mt-6 m-auto flex-wrap justify-center'>
            
            {data.map((obj, index) => {
                return <Card key={index} cardData={obj} id={index}/>
            })}

        </div>
        
    </>
  );
}

const data = [
    {
        "ime":"Djevojka sa Une",
        "opis": "U svom najljepšem izdanju, okružena još jednom ljepoticom – rijekom Unom, izlivena je u bronci, stoji Djevojka sa Une i plijeni pažnju svima koji se nađu na Gradskoj otoci ili na nekom od mostova koji vode u centar grada. Jedan je od najposebnijih spomenika našeg grada. Osluškuje i posmatra život već godinama, okamenjena u vlastitu intimu predstavljajući tajnu o Djevojci sa Une. Njen autor je akademski kipar Vladimir Herljević.",
        "lokacija": [0,0],
        "slika": "najbokjadjsaune!!!!!!!!!!!!!!.jpg"
    },
    {
        "ime":"Garavice",
        "opis": "Kakva su to mjesta koja svjedoče o historiji koja su živote uklesale u tišinu kamena?\nNarod i tadašnja Općina Bihać su 1949. godine podigli spomenik žrtvama nacizma Drugog svjetskog rata. Garavice danas predstavljaju jednu od destinacija koja poziva život, da u miru svjedoči o prošlosti. Tvorac ovog kompleksa je arhitekta Bogdan Bogdanović.",
        "lokacija": [0,0],
        "slika": "arminn.jpg"
    },
    {
        "ime":"Beton",
        "opis": "Svaki grad ima svoje mirno poetsko mjesto, a u Bihaću je ono u samom centru grada! Gradski park u Bihaću zasnovan je na velikom „turskom greblju“ gdje je više od 250 godina ukopavalo lokalno stanovništvo.Poslije Drugog svijetskog rata sklonjeni su svi nišani, osim jednog ženskog nišana koji se nalazi u sredini parka. Gradsko park predstavlja epicentar urbane raznolikosti, radosti i ljubavi čiji su temelji postojanja udareni u doba Dvojne Monarhije.Okružen je gradskim bedemom, kanalom i rijekom Unom. Proširuje se na „beton“ – poznato ljetno okupljalište. U jesen gradski park poprima oblik prave bajke zHVljujući kulturno – zabavnoj manifestaciji „Jesen na Gelenderima“ koja već nekoliko godina okuplja sve generacije bišćana.",
        "lokacija": [0,0],
        "slika": "beton.jpg"
    },
    {
        "ime":"Brvice",
        "opis": "U naselju Hatinac nalazi se gradsko kupalište Brvice kojr predstavlja jedno od najpopularnijih kupališta u Bihaću. Ispratilo je mnoge vesele generacije, utkalo sjećanja na prijateljstva i danas čeka na stvaranje novih priča i doživljeja nevjerovatnih poetskih prizora rijeke Une i neba iznad nje.",
        "lokacija": [0,0],
        "slika": "brivice.jpg"
    },
    {
        "ime":"Crkva Svetog Ante Padovanskog",
        "opis": "Crkva sv. Antonija (Ante Padovanskog) je izgrađena krajem 19. vijeka u duhu stilskog pluralizma / historicizma. Kao izvorni oblik imala je raskošan „štajerski“ krov na zvoniku, kakvom u Bosni i Hercegovini nije bilo premca. Crkva je doživjela više preinaka i dograđivanja, a najveći zahvati i promjena karaktera objekta dešava se 1941. godine kada je skinut krov, dozidan još jedan sprat uz postavljanje blagog krova na četiri vode, te je crkva dodatno proširena.Tokom savezničkog bombardiranja 1944. godine, crkva je stradala, pa je danas od nje ostao samo zvonik kao tužan spomenik na strahote Drugog svjetskog rata. Crkva je nacionalni spomenik Bosne i Hercegovine.",
        "lokacija": [0,0],
        "slika": "crkva.jpg"
    },
    {
        "ime":"Jotanovi Ljubavni otoci",
        "opis": "Zahvaljujući entuzijazmu ribarskig udruženja iz Bihaća, Jotanovi Otoci ponovo dišu i zovu sve znatiželjne na nova druženja. Mjesto koje ima daleku historiju kao i okupljalište mladih i starijih, čija su druženja najčesće bila pretvorena u pjevanje i roštiljanje. Možda i ne moramo govoriti koliko je Una ovdje lijepa, kada je taj epitet prožet njenim postojanjem, ali Vas moramo pozvati da posjetite ovo mjesto i okušate se u fly fishingu ili se prosto opustite i uživate u rijeci i bircu koji se nalazi odmah pored otoka.",
        "lokacija": [0,0],
        "slika": "jotan ljubav.jpg"
    },
    {
        "ime":"Kapetanova Kula",
     "opis": "Kad ste već u samom centru grada, zašto ne posjetiti Muzej u Kapetanovoj kuli? Neka nam ovaj biser kulturnog naslijeđa bude tačka upoznavanja. Otkrijte historijske tajne i transformacije grada, ali i smjene vladara.\nPostavke unutar Kapetanove kule:\nPrizemlje: arheološka izložba „Bihaćki kraj u prahistorijsko doba“\nI Kat: Historijska izložba „Bihać kraj u srednjem vijeku“\nII Kat: historijska izložba „Bihać kraj u osmanskom periodu“\n III Kat: etnološka izložba „Kapetanova divanhana“\n IV Kat: likovna izložba „Stoljeća Bihaća uvezana u likovnu priču“",
        "lokacija": [0,0],
        "slika": "kap kula.jpg"
    },
    {
        "ime":"Muzej AVNOJ-a",
        "opis": "Bihać je u proščosti predstavljao značajno mjesto u nastajanju Jugoslavije. U tu čast, 1952. godine je otvoren Spomen muzej Prvog zasjedanja AVNOJ – a u zgradi Klostera, te se nalazi u blizini centra grada. Danas služi kao mjesto za javne i kulturne priredbe. Svojim eksponentima predstsvlja antifašističe tenkove Grada Bihaća.",
        "lokacija": [0,0],
        "slika": "muzejav.jpg"
    },
    {
        "ime":"Planinarski dom Plješavica",
        "opis": "Nakon što smo obišli skoro sve odabrane lokacije, na red dolazi i kuća za odmor.Planinarski dom Plješevica mjesto je okupljanja zaljubljenika u planine, svjež zrak, društvo, mir, ali i domaće specijalitete u danima vikenda.",
        "lokacija": [0,0],
        "slika": "plan dom plje.jpg"
    },
    
    {
        "ime":"Turbe",
        "opis": "Uz Muzej u Kapetanovoj kuli i crkvu sv. Ante Padovaskog, historijskoj raznolikosti doprinosi i Turbe, koje svojim tajanstvenim i izvanrednim modernističkim stilom svjedoči što prema vjerovanju muslimana ukazuje na pogibiju onih, koji su od Boga za nagradu dobili mjesto u raju. ",
        "lokacija": [0,0],
        "slika": "turbe.jpg"
    },
    
    {
        "ime":"Sokolac",
        "opis": "Dugacki opis",
        "lokacija": [0,0],
        "slika": "ostrozac.jpg"
    },
]