import { FaLocationArrow } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'
import Image from 'next/image';
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import KevinAIpfp from '@/public/kevinAIpfp.jpeg'

function Hero() {
  return (
    <div className='pb-[6rem] pt-2 sm:pt-16'>
        <div className=''>
            <Spotlight className='-top-40 -left-10 md:-left-32
            md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>

    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] 
        bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
       bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className='flex justify-center relative my-20 lg:mt-8 xl:my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex 
        flex-col items-center justify-center'>
            <figure>
              <Image 
                id="personal-img"
                src={KevinAIpfp}
                alt="Personal Image"
                className="w-28 h-28 rounded-full border-2 animate-fadeIn transition transition-300 ease-in-out hover:scale-110"
              />
            </figure>

            <TextGenerateEffect 
                className='text-center text-[40px] md:text-5xl lg:text-6xl'
                words='Transforming Concepts Into Seamless Experiences'
            />

            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl'>
                Hi! I&apos;m Kevin, a software developer based in Florida, USA
                <span className="animate-animateWave inline-block">👋</span>
            </p>

            <a href="#projects">
              <MagicButton 
                title="Show my work"
                icon={<FaLocationArrow />}
                position='right'
              />
            </a>
        </div>
      </div>
    </div>
  )
}

export default Hero