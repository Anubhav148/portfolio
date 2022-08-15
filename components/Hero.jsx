import Image from 'next/image';


function Hero() {
    return (
        <div className="container mx-auto mt-2">
            <div className="justify-center items-center relative">
                <video src="video.mp4" autoPlay loop infinite muted className='rounded-xl'></video>
                <div className='absolute text-center -top-6 lg:top-0 text-gray-200 left-0 right-0 bottom-0 mt-32 lg:mt-64 text-2xl lg:text-5xl font-extrabold opacity-90'>
                    <h1 className='lg:pb-10 pb-2'>Namaste, My Name's Anubhav</h1>
                    <p>I'm a Front End Developer</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;