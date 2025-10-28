'use client'
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import reactImg from "./img/reactjs.png";
import typescriptImg from "./img/typescript.png";
import nodejsImg from "./img/nodejs.png";
import javaImg from "./img/java.png";
import pythonImg from "./img/python.gif";
import tailwindcssImg from "./img/tailwindcss.png";
import nextjsImg from "./img/nextjs.png";
import highschoolImg from "./img/highschool.png";
import bachelor from "./img/diploma.png";
import kotlin from "./img/kotlin.png";
import android from "./img/android.png";
import download from "./img/download2.png";
import htmlLogo from "./img/html.png";
import cssLogo from "./img/css.png";
import jsLogo from "./img/js.png";
import githubLogo from "./img/github.png";
import javaLogo from "./img/java.png";

export default function Home() {
  const my_link ={
    0:"https://drive.google.com/file/d/1MFGoEhzyKyYnln6cndz9_FXShJoMGyIz/view?usp=drive_link",
    1:"https://drive.google.com/file/d/1aB_5V7a_yhbIBQtNZ85Mwjv8HOKCFe4s/view?usp=drive_link",
    2:"https://ispm-edu.com",
    3:"https://github.com/nalitianaFiderana/Point-Game/tree/master",
    4:"https://point-game-git-master-fideranas-projects-a3df5e1a.vercel.app/",
    5:"https://github.com/nalitianaFiderana/projet-personnel"
  }

  const data = {
    1:{
      item1:"About",
      item2:"Education",
      item3:"Project",
      item4:"Hi! My name is",
      item5:"Download me",
      item6:"About me",
      item7:"I'm a young developer. I come from Madagascar and live at the moment in germany. Fascinated by Technologies, I decided to transform this Passion into Work. I'm always looking for new challenges. If you have some work for me or want to cooporate with me, please ",
      item8:"Contact me!",
      item9:"November",
      item10:"High school Diploma",
      item11:"Establishment",
      item12:"Location",
      item13:"Baccalaureate delivered by the ministry of higher education and scientific research of Antananarivo",
      item14:"I obtained my high school diploma in November 2020 with a major in Mathematics and a minor in Physics-Chemistry. During my studies, I developed a strong foundation in analytical thinking and problem-solving skills.",
      item15:"January",
      item16:"Bachelor's Degree in Information technology, software engineering and artificial intelligence",
      item17:"2,5 years in the university",
      item18:"Throughout my studies, I have gained comprehensive knowledge in various programming languages, software development methodologies, and AI concepts, which have significantly contributed to my growth as a developer.",
      item19:"Higher institute of technology in Madagascar (ISPM)",
      item20:"MUSDOC is a music app totally offline, allowing users to enjoy their favorite tunes without the need of an internet connection. this is an android application with an user-friendly interface. The app was developed in order to help user with their anxiety, stress and so on.",
      item21:"Group project",
      item22:"POINT-GAME is a game which two person can play together. The objective is simple: each player takes turns trying to score points by strategically placing their points on the paper. Every points must be placed on every intersection of two lines. The game ends when there is no more place for the next point.",
      item23:"My project",
      item24:"This desktop app will have a big impact on productivity, revolutionizing the way grocery store manage their goods.With features designed to streamline inventory tracking, it will allow store managers to easily monitor stock levels in real-time. The app provides alerts when items are running low.",
      item25:"Learn more"
    },
    2:{
      item1:"À propos",
      item2:"Formation",
      item3:"Projet",
      item4:"Salut! Je m'appelle",
      item5:"Téléchargez moi",
      item6:"À propos de moi",
      item7:"Je suis un jeune développeur. Je viens de Madagascar et je vis actuellement en Allemagne. Fasciné par les technologies, j'ai décidé de transformer cette passion en travail. Je suis toujours à la recherche de nouveaux défis. Si vous avez du travail pour moi ou si vous souhaitez coopérer avec moi, veuillez ",
      item8:"Me contacter!",
      item9:"Novembre",
      item10:"Diplôme d'études secondaires",
      item11:"Établissement",
      item12:"Emplacement",
      item13:"Baccalauréat délivré par le ministère de l'enseignement supérieur et de la recherche scientifique d'Antananarivo",
      item14:"J'ai obtenu mon diplôme d'études secondaires en novembre 2020 avec une spécialisation en mathématiques et une mineure en physique-chimie. Au cours de mes études, j'ai développé une solide base en pensée analytique et en compétences en résolution de problèmes.",
      item15:"Janvier",
      item16:"Licence en technologie de l'information, génie logiciel et intelligence artificielle",
      item17:"2,5 ans à l'université",
      item18:"Tout au long de mes études, j'ai acquis des connaissances approfondies dans divers langages de programmation, méthodologies de développement logiciel et concepts d'IA, ce qui a considérablement contribué à ma croissance en tant que développeur.",
      item19:"Institut supérieur polytechnique de Madagascar (ISPM)",
      item20:"MUSDOC est une application de musique totalement hors ligne, permettant aux utilisateurs de profiter de leurs morceaux préférés sans avoir besoin d'une connexion Internet. Il s'agit d'une application Android avec une interface conviviale. L'application a été développée afin d'aider les utilisateurs à gérer leur anxiété, leur stress, etc.",
      item21:"Projet de groupe",
      item22:"POINT-GAME est un jeu auquel deux personnes peuvent jouer ensemble. L'objectif est simple : chaque joueur prend tour à tour pour essayer de marquer des points en plaçant stratégiquement leurs points sur le papier. Chaque point doit être placé à chaque intersection de deux lignes. Le jeu se termine lorsqu'il n'y a plus de place pour le point suivant.",
      item23:"Mon projet",
      item24:"Cette application de bureau aura un impact important sur la productivité, révolutionnant la façon dont les épiceries gèrent leurs marchandises. Avec des fonctionnalités conçues pour rationaliser le suivi des stocks, elle permettra aux gestionnaires de magasin de surveiller facilement les niveaux de stock en temps réel. L'application fournit des alertes lorsque les articles sont en rupture de stock.",
      item25:"En savoir plus"
    }
  }
  let [language, setLanguage] = useState<string>('ENG');
  let [activeNavbar, setActiveNavbar] = useState<string>('home');

  function changeNavbar(page : string){
    setActiveNavbar(page);
  }

  function handleChange(event: ChangeEvent<HTMLSelectElement>){
    event.preventDefault();
    setLanguage(event.target.value as '');
  }

  function handleNavBar(view : string | 'home') : string{
    if(view == activeNavbar){
      return 'z-4';
    }else{
      return 'transition-all duration-800 translate-z-[-100px] opacity-0';
    }
  }
  
  return (
   <div className="m-[2px] transition-all duration-100">
    <div className="fixed top-1 left-0 right-0 flex flex-nowrap justify-between items-center z-10">
      <h1 className="hover:shadow-xl hover:shadow-white/50 md:text-[36px] text-2xl font-semibold antialiased bg-black w-fit opacity-75 p-2.5 md:ml-2 ml-2.5 mt-1.5 rounded-full cursor-pointer animate-bounce" onClick={()=>changeNavbar("home")}>
        <span>N</span>
        <span>F</span>
        <span>.</span>
      </h1>
      <div className="navbar group md:text-[20px] text-[13px] font-light  bg-neutral-800 shadow-2xl shadow-white/30 w-fit px-4 py-2.5 mt-1.5 rounded-3xl">
        <a id="About" className="hover:border-b-amber-50 hover:border-b-2 p-1 px-1.5 md:mx-1.5 mx-[3px] cursor-pointer" onClick={()=>changeNavbar("About")}>{data[language=="ENG"?1:2].item1}</a>
        <a id="Education" className="hover:border-b-amber-50 hover:border-b-2 p-1 px-1.5 md:mx-1.5 mx-[3px] cursor-pointer" onClick={()=>changeNavbar("Education")}>{data[language=="ENG"?1:2].item2}</a>
        <a id="Project" className="hover:border-b-amber-50 hover:border-b-2 p-1 px-1.5 md:mx-1.5 mx-[3px] cursor-pointer" onClick={()=>changeNavbar("Project")}>{data[language=="ENG"?1:2].item3}</a>
        <a id="Contact" className="hover:border-b-amber-50 hover:border-b-2 p-1 px-1.5 md:mx-1.5 mx-[3px] cursor-pointer"onClick={()=>changeNavbar("Contact")}>Contact</a>
      </div>
      <div className="">
        <select name="language" className="md:text-[14px] text-[11px] mx-3.5 md:py-2.5 mt-1.5" onChange={handleChange}>
          <option value='ENG'>ENG</option>
          <option value='FR'>FR</option>
        </select>
      </div>
    </div>

    <div className={`absolute top-1/6 md:left-1/4 left-1/12 ${(()=>handleNavBar('home'))()}`}>
      <label className="text-white/30 md:text-[20px] text-[16px] py-[8px]">{"</>"}</label><br/>
      <p className="font-extralight md:text-[16px] text-[14px] text-white/50 pt-2 pb-[4px]">{data[language=="ENG"?1:2].item4}</p>
      <p className="font-extrabold md:text-[30px] text-[23px] py-[4px] text-shadow-2xl text-shadow-amber-50 typewriter">NALITIANA RIVONTSOA Fiderana</p>
      <h4 className="font-extralight py-[4px] md:text-2xl text-[16px] text-white/70"> Web | Android | Desktop Developer</h4>
      <label className="text-white/30 md:text-[20px] text-[18px] py-[8px]">{"</>"}</label><br/>
      <Link href={my_link[1]} target="_blank" download className="bg-gray-900 md:text-xl text-[15px] text-white/80 px-2 float-right mt-[20px] py-1.5 rounded-[6px] shadow-sm shadow-white active:shadow-none animate-pulse">{data[language=="ENG"?1:2].item5}</Link>
    </div>

    <div className={`absolute w-[100vw] h-[100vh] bg-black/60 pt-[100px] px-[10%] ${(()=>handleNavBar('About'))()}`}>
      <h2 className=" border-b-2 text-xl text-white/55 border-white/25">{data[language=="ENG"?1:2].item6}</h2>
      <p className="mt-[20px] p-2 md:text-[24px] text-[18px]">{data[language=="ENG"?1:2].item7} <Link href={my_link[1]} className="underline">{data[language=="ENG"?1:2].item8}</Link></p>
      <h2 className="border-b-2 text-xl text-white/55 border-white/25 mt-[24px]">Techno-stack</h2>
      <div className="mt-[20px] flex flex-wrap md:flex-col md:justify-center-safe flex-row justify-between items-start">
        <div className="flex flex-nowrap justify-between items-center-safe sp">
          <Image src={reactImg} alt="reactjs" width={100} height={100} />
          <Image src={typescriptImg} alt="typescript" width={100} height={100} />
          <Image src={nextjsImg} alt="nextjs" width={100} height={100} />
          <Image src={tailwindcssImg} alt="tailwindcss" width={100} height={100} />
        </div>
        <div className="flex flex-nowrap justify-between items-center-safe sp">
          <Image src={nodejsImg} alt="nodejs" width={100} height={100} />
          <Image src={pythonImg} alt="python" width={100} height={100} />
        </div>
        <br/>
        <Image src={javaImg} alt="java" width={100} height={100} />
      </div>
    </div>

    <div className={`absolute w-[100vw] h-[100vh] bg-black/60 pt-[100px] px-[10%] grid md:grid-cols-2 grid-cols-1 gap-3.5 ${(()=>handleNavBar('Education'))()}`}>
      <div className="h-fit p-2.5 shadow-xs shadow-amber-50/70 bg-gray-900/60 rounded-[10px]">
          <div className="m-[8px] flex flex-nowrap justify-start items-center-safe">
            <Image src={highschoolImg} alt="reactjs" width={50} height={50} />
            <h2 className="ml-[50px]"> ~ {data[language=="ENG"?1:2].item9} 2020</h2>
          </div>
          <h3 className="ml-[35px] mt-2.5 text-2xl font-extrabold"> § {data[language=="ENG"?1:2].item10}</h3>
          <p className="ml-[35px] mt-1.5 text-gray-400"><i className="underline">{data[language=="ENG"?1:2].item11}</i>: IEF ACEEM</p>
          <p className="ml-[35px] mt-1.5 text-gray-400"><i className="underline">{data[language=="ENG"?1:2].item12}</i>: Antananarivo, Madagascar</p>
          <p className="ml-[35px] mt-1.5 text-sky-800 italic"> {data[language=="ENG"?1:2].item13}</p>
          <p className="ml-[35px] mt-2.5 md:text-[16px] text-[14px] italic">"{data[language=="ENG"?1:2].item14}"</p>
      </div>
      <div className="h-fit p-2.5 shadow-xs shadow-amber-50/70 bg-gray-900/60 rounded-[10px]">
          <div className="m-[8px] flex flex-nowrap justify-start items-center-safe">
            <Image src={bachelor} alt="reactjs" width={50} height={50} />
            <h2 className="ml-[50px]"> ~ {data[language=="ENG"?1:2].item15} 2025</h2>
          </div>
          <h3 className="ml-[35px] mt-2.5 text-2xl font-extrabold"> § {data[language=="ENG"?1:2].item16}</h3>
          <p className="ml-[35px] mt-1.5 text-gray-400"><i className="underline">{data[language=="ENG"?1:2].item11}</i>: {data[language=="ENG"?1:2].item19}</p>
          <p className="ml-[35px] mt-1.5 text-gray-400"><i className="underline">{data[language=="ENG"?1:2].item12}</i>: Antsobolo, Madagascar</p>
          <Link href={my_link[2]} target="_blank" className="ml-[35px] mt-1.5 text-sky-400 underline">{data[language=="ENG"?1:2].item25}</Link>
          <p className="ml-[35px] mt-1.5 text-sky-800 italic"> {data[language=="ENG"?1:2].item17}</p>
          <p className="ml-[35px] mt-2.5 md:text-[16px] text-[14px] italic">"{data[language=="ENG"?1:2].item18}"</p>
      </div>
    </div>
    <div className={`absolute w-[100vw] h-[100vh] bg-black/60 pt-[100px] px-[10%] ${(()=>handleNavBar('Project'))()}`}>
      <div className="h-fit p-2.5 shadow-xs shadow-amber-50/70 bg-gray-900/60 rounded-[10px]">
          <div className="m-[10px] flex items-center-safe">
            <span className="py-[5px] px-[8px] rounded-[4px] bg-amber-50 text-gray-800">2022</span>
            <h1 className="pl-[10px] text-3xl"> -- MUSDOC --</h1>
          </div>
          <p className="mt-[10px] p-2.5">
            {data[language=="ENG"?1:2].item20}
          </p>
          <span className="px-[8px] py-[5px] bg-sky-800 text-white font-bold rounded-[8px] ml-[17px]">{data[language=="ENG"?1:2].item21}</span>
          <div className="mt-[18px] px-[8px] flex justify-between items-center-safe">
            <div className="w-fit flex">
              <Image src={kotlin} alt="kotlin" width={50} height={50} />
              <Image src={android} alt="android" width={50} height={50} />
            </div>
            <Link href={my_link[0]} download className="p-[5px] bg-amber-50/85 rounded-full mr-[10%] animate-bounce cursor-pointer">
              <Image src={download} alt="download" width={30} height={30} />
            </Link>
          </div>
      </div>
      <div className="h-fit p-2.5 shadow-xs shadow-amber-50/70 bg-gray-900/60 rounded-[10px] mt-[20px]">
          <div className="m-[10px] flex items-center-safe">
            <span className="py-[5px] px-[8px] rounded-[4px] bg-amber-50 text-gray-800">2023</span>
            <h1 className="pl-[10px] text-3xl"> -- POINT-GAME --</h1>
          </div>
          <p className="mt-[10px] p-2.5">
            {data[language=="ENG"?1:2].item22}
          </p>
          <span className="px-[8px] py-[5px] bg-sky-800 text-white font-bold rounded-[8px] ml-[17px]">{data[language=="ENG"?1:2].item23}</span>
          <div className="mt-[18px] px-[8px] flex justify-between items-center-safe">
            <div className="w-fit flex">
              <Image src={htmlLogo} alt="html" width={50} height={50} />
              <Image src={cssLogo} alt="css" width={50} height={50} />
              <Image src={jsLogo} alt="javascript" width={50} height={50} />
            </div>
            <div className="mr-[10%] flex items-center-safe">
              <Link href={my_link[4]} target="_blank" className="mr-[15px] cursor-pointer hover:bg-amber-900 bg-amber-700 text-amber-50 text-xl font-bold px-[10px] py-[5px] rounded-xl">Demo</Link>
              <Link href={my_link[3]} target="_blank"><Image className="p-[5px] bg-amber-50/85 rounded-full cursor-pointer" src={githubLogo} alt="github link" width={50} height={50} /></Link>
            </div>
          </div>
      </div>
      <div className="h-fit p-2.5 shadow-xs shadow-amber-50/70 bg-gray-900/60 rounded-[10px] mt-[20px]">
          <div className="m-[10px] flex items-center-safe">
            <span className="py-[5px] px-[8px] rounded-[4px] bg-amber-50 text-gray-800">2024</span>
            <h1 className="pl-[10px] text-3xl"> -- Gestionnaire d'entreprise --</h1>
          </div>
          <p className="mt-[10px] p-2.5">
            {data[language=="ENG"?1:2].item24}
          </p>
          <span className="px-[8px] py-[5px] bg-sky-800 text-white font-bold rounded-[8px] ml-[17px]">{data[language=="ENG"?1:2].item23}</span>
          <div className="mt-[18px] px-[8px] flex justify-between items-center-safe">
            <div className="w-fit flex">
              <Image src={javaLogo} alt="java" width={50} height={50} />
            </div>
            <div className="mr-[10%] flex items-center-safe">
              <Link href={my_link[5]} target="_blank"><Image className="p-[5px] bg-amber-50/85 rounded-full cursor-pointer" src={githubLogo} alt="github link" width={50} height={50} /></Link>
            </div>
          </div>
      </div>
    </div>
    <div className={`absolute w-[100vw] h-[100vh] bg-black/60 pt-[100px] px-[10%] ${(()=>handleNavBar('Contact'))()}`}>
      <div className="h-fit px-3.5 py-2.5 border-[1px] border-green-500 bg-gray-900/80 rounded-[10px]">
        <h1 className="text-green-500 font-bold md:text-[18px] text-[15px]">$ Contact --info</h1>
        <p className="md:text-[16px] text-14px ml-[10px] mt-1"> Let's get in touch <br/> Telefon: +49 176 674 808663</p>
        <h1 className="text-green-500 font-bold md:text-[18px] text-[15px] mt-2.5">$ location --current</h1>
        <p className="md:text-[16px] text-14px ml-[10px] mt-1">Germany, Zaucher Weg 7, 15938 Kasel-Golzig</p>
        <h1 className="text-green-500 font-bold md:text-[18px] text-[15px] mt-2.5 mb-[8px]">$ Contact --email</h1>
        <Link href={`mailto:nalitiana.rivontsoa@outlook.com`} className="rounded-[8px] bg-green-700/80 text-green-400 md:text-[18px] text-[16px] px-[12px] py-[8px] ml-[10px]">nalitiana.rivontsoa@outlook.com</Link>
        <h1 className="text-green-500 font-bold md:text-[18px] text-[15px] mt-2.5 mb-[8px]">$ cat resume.pdf</h1>
        <Link href={my_link[1]} download className="rounded-[8px] bg-green-700/80 text-green-400 md:text-[18px] text-[16px] px-[12px] py-[8px] ml-[10px]">resume.pdf</Link>
        <h1 className="text-green-500 font-bold md:text-[18px] text-[15px] mt-2.5 mb-[8px]">$ ls ./social-links</h1>
        <div className="flex flex-wrap">
          <div className="rounded-[8px] bg-amber-50/80 text-gray-700 md:text-[18px] text-[16px] px-[12px] py-[8px] ml-[10px] w-fit">
            <h2 className="md:text-xl text-[18px]">Github</h2>
            <Link href={`https://github.com/nalitianaFiderana`} target="_target" rel="noopener noreferrer">@nalitianaFiderana</Link>
          </div>
          <div className="rounded-[8px] bg-sky-600/80 text-amber-50 md:text-[18px] text-[16px] px-[12px] py-[8px] ml-[10px] w-fit md:mt-0 mt-2">
            <h2 className="md:text-xl text-[18px]">Facebook</h2>
            <Link href={``}>@FideranaNalitiana</Link>
          </div>
        </div>
      </div>
    </div>
    
   </div>
  );
}
