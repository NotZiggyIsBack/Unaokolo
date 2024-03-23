'use client';
import React from 'react';
import Nav from '../components/nav';
import { motion } from 'framer-motion';
import { Great_Vibes, Montserrat } from "next/font/google";

//const prefix = 'ba';
//const pathName = 'home';

const pisani = Great_Vibes({subsets: ['latin'], weight: "400"});
const font1 = Montserrat({subsets: ["latin"]});

export default async function Page() {
  return (
    <>
      <Nav></Nav>
    
      <div className='w-full mt-20 m-auto flex flex-col items-center gap-3'>
        <div>
        <motion.span transition={{duration: 0.75}} initial={{opacity:0, y:10}} viewport={{ once: true }} whileInView={{opacity: 1, y:0}} className="font-black text-[100px] text-center text-transparent bg-[url('/assets/una3.jpg')] bg-clip-text bg-bottom bg-[10%]">UNA</motion.span><motion.span transition={{duration: 0.75, delay: 1}} initial={{opacity:0, y:10}} viewport={{ once: true }} whileInView={{opacity: 1, y:0}} className={`${pisani.className} font-light italic text-[90px] text-center`}>okolo</motion.span>
        </div>    
        
        <div className="w-full h-max bg-[url('/assets/una.jpg')] bg-no-repeat bg-center bg-cover py-12">
          <div className='w-[50%] m-auto h-max p-3 blur1'>
          <motion.p transition={{duration: 0.5, delay:1}} initial={{opacity:0, y:10}} viewport={{ once: true }} whileInView={{opacity: 1, y:0}} className={`${font1.className} text-center text-[25px] text-blue-950`}>{t1}</motion.p>
          </div>
        </div>
        
        <motion.div className="mt-6 mb-6 m-auto w-max h-[800px] box-border p-2 bg-blue-900 shadow-2xl rounded-lg">
          <video autoPlay controls src={"https://i.imgur.com/DQ9bqMY.mp4"} className='w-full h-full rounded-md'></video>
        </motion.div>
       
      </div>

      <div id='prefooter' className='w-full h-[300px] bg-blue-800 flex gap-[80px] items-center'>
        <img src={"/assets/logo.png"} className='w-[250px] h-[250px]' alt="" />
        <div>
          <ul className='text-white'>
            <li><p>administrator@unaokolo.com</p></li>
            <li><p>+387 62599711</p></li>
          </ul>
          <div className='flex gap-3 mt-3'>
            <a href="https://www.instagram.com/unaokolo.3d/"><i className="fa-brands fa-instagram text-white text-[24px]"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61555213476799&mibextid=LQQJ4d"><i className="fa-brands fa-facebook text-white text-[24px]"></i></a>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <span className='text-white font-semibold text-center'>Naši saradnici</span>
          <div className='h-[1px] w-[75%] bg-white my-[2px] m-auto'></div>
          <div className='flex gap-[15px] items-center'>
              <img src="https://www.visitbihac.com/bs/images/logo.png" alt="" />
          </div>
        </div>
      </div>
      <div id='footer' className='w-full bg-emerald-600'>
        <p className='p-3 text-neutral-300 font-thin text-[12px]'>Copyright © UNAokolo 2024</p>
      </div>
    </>
  );
};

const t1 = 'Projekat UNAokolo predstavlja inovativni civitas projekat 3D odjeljenja, kreiran od strane učenika Gimnazije "Bihać". Cilj ovog projekta je ne samo prikazati grad na nov i interaktivan način, već i potaknuti javnu raspravu o njegovoj budućnosti. Kroz ovo digitalno odjeljenje, želimo angažirati zajednicu u identifikaciji potencijala i izazova grada, te predložiti korake ka modernizaciji i unapređenju života u Bihaću. Ovaj projekat nije samo statičan prikaz grada, već i platforma za promišljanje i djelovanje, te težimo ostvariti suradnju sa lokalnim vlastima, institucijama i građanima kako bismo zajedno oblikovali bolju budućnost naše zajednice.';

/*  <motion.p transition={{duration: 0.5}} initial={{opacity:0, y:10}} viewport={{ once: true }} whileInView={{opacity: 1, y:0}} className='text-center text-[25px] w-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Neque convallis a cras semper auctor. Mattis pellentesque id nibh tortor id. Amet est placerat in egestas erat imperdiet. Sodales ut eu sem integer vitae justo eget magna. Velit egestas dui id ornare arcu odio. Non tellus orci ac auctor augue mauris. Tortor at auctor urna nunc id cursus. Eget arcu dictum varius duis at. Tellus integer feugiat scelerisque varius. Sit amet nulla facilisi morbi tempus iaculis urna.</motion.p> */