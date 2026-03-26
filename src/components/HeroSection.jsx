import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function HeroSection() {
    const profilePicture = "images/portrait_transparent.png";

    return (
        <div
            className="mt-32 flex flex-wrap items-start px-4 py-0 max-[1650px]:flex-col max-[1650px]:items-center max-[1650px]:justify-center max-[435px]:-ml-3 max-[425px]:-ml-5 max-[410px]:-ml-6 max-[400px]:-ml-7"
        >
            <div
                id="IMG__DIV"
                className="hidden h-max max-w-96 overflow-hidden rounded-l-[350px] rounded-r-[100px] bg-slate-300 max-[1650px]:relative max-[1650px]:ml-6 max-[1650px]:flex max-[1650px]:h-[22.5rem] max-[1650px]:w-[22.5rem] max-[1650px]:rounded-full"
            >
                <img
                    className="-mt-18 mb-4 ml-9 mr-8 h-auto w-96 pb-4 pl-4 pr-3 pt-3 max-[1650px]:absolute max-[1650px]:-bottom-32 max-[1650px]:-left-12 max-[1650px]:object-cover transition-all
         duration-200 ease-in-out hover:scale-[1.2]"
                    src={profilePicture}
                    alt="Portrait of Julian Schaefers"
                    width=""
                    height=""
                />
            </div>

            <div
                id="IMG__DIV"
                className="-mt-16 mb-4 ml-0 mr-8 relative flex items-center justify-center h-auto w-80 overflow-hidden rounded-l-[350px] rounded-r-[100px] bg-slate-300 max-[1650px]:hidden"
            >
                <img
                    className="object-cover transition-all duration-200 ease-in-out hover:scale-[1.2] h-auto w-80 rounded-l-[350px] rounded-r-[100px] bg-slate-300 p-4"
                    src={profilePicture}
                    alt="Portrait of Julian Schaefers"
                />
            </div>


            <div
                id="PERSONAL__INFO"
                className="-mt-5 ml-5 max-[1650px]:mt-6 max-[1650px]:flex max-[1650px]:flex-col max-[1650px]:items-center max-[1650px]:justify-center"
            >
                <h1
                    className="mt-0 font-bold transition-colors duration-0 max-[1650px]:flex max-[1650px]:flex-col max-[1650px]:items-center max-[1650px]:justify-center max-[1650px]:text-justify"
                >
                    <span className="">Julian </span>
                    <span className="">Schaefers</span>
                </h1>
                <h2>20 Jahre alt</h2>
                <p className="mt-10">
                    <Typewriter
                        words={[
                            'Ich suche eine Ausbildung als Fachinformatiker',
                            'Schwerpunkt: Anwendungsentwicklung',
                            'Motiviert, lernbereit & kreativ',
                        ]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={60}
                        deleteSpeed={40}
                        delaySpeed={1500}
                    />
                </p>
            </div>
        </div>
    );
}
