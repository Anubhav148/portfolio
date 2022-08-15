import { BsFacebook, BsDribbble } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { ImBehance2, ImGithub } from 'react-icons/im'
import Link from 'next/link';

function Footer() {
    return (
        <footer className="container mx-auto my-24">
            <div className="flex justify-between items-center px-2 md:px-4">
              <h1 className="text-xl md:text-5xl">A<span className='blur-[0.5px]'>K</span><span className="blur-[1px]">S...</span></h1>
              <div className='flex justify-center items-center space-x-5 md:space-x-10'>
                <Link href='https://www.facebook.com/anubhav.k.singh.3'><a><BsFacebook size={20} className='text-blue-600 md:h-10 md:w-10 cursor-pointer'  /></a></Link>
                <Link href='https://www.instagram.com/anubhav.singhk/'><a><FiInstagram size={20} className='instagram text-white h-6 w-6 cursor-pointer md:h-10 md:w-10 p-1 rounded-full' /></a></Link>
                <Link href='https://twitter.com/AnubhavKumarSi3'><a><AiOutlineTwitter size={20} className='text-[#1DA1F2] md:h-10 cursor-pointer md:w-10'  /></a></Link>
                <Link href='https://www.behance.net/anubhavsingh16'><a><ImBehance2  size={20} className='md:h-10 md:w-10 cursor-pointer' /></a></Link>
                <Link href='https://dribbble.com/Anubhav_93deveoper' ><BsDribbble size={20} className='text-pink-500 cursor-pointer md:h-10 md:w-10' /></Link>
                <Link href='https://github.com/Anubhav148'><a><ImGithub size={20} className='md:h-10 md:w-10 cursor-pointer' /></a></Link>
              </div>
            </div>
            <p className='my-10 text-center text-2xl md:text-3xl lg:text-5xl'>Thank you for visiting my portfolio.</p>
            <p className='text-sm text-gray-400 text-center'>&copy; 2022 Anubhav Kumar Singh. All rights reserved.</p>
        </footer>
    );
}

export default Footer;