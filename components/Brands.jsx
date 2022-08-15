import Image from 'next/image';
import html from '../public/html.png'
import css from '../public/css logo.png'
import react from '../public/React logo.png'
import Next from '../public/next logo.webp'
import tailwind from '../public/tailwind.png'
import javascript from '../public/javascript logo.png'
import typecript from '../public/typescript logo.png'

function Brands() {
    return (
        <div className="container mx-auto my-24">
            <div className="flex flex-col  md:flex-row gap-11 lg:gap-24 justify-center items-center px-4">
                <Image src={html} width='100' height='100' alt='/' />
                <Image src={javascript} width='100' height='100' alt='' />
                <Image src={css} width='100' height='100' alt='/' />
                <Image src={typecript} width='100' height='100' alt='/' />
                <Image src={react} width='100' height='100' alt='/' />
                <Image src={Next} width='100' height='100' alt='/' />
                <Image src={tailwind} width='100' height='100' alt='/' />
            </div>
        </div>
    );
}

export default Brands;