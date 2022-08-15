import Image from "next/image";
import me from "../public/IMG_1193.jpg";

function About() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl lg:text-6xl text-center py-4">About Me</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center p-4 gap-10 lg:gap-20">
        <div className="max-h-[800px] items-center justify-center p-4">
          <Image
            src={me}
            className="rounded-t-full shadow-2xl shadow-blue-700 lg:p-4"
            width={400}
            height={400}
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="max-w-3xl p-4 mr-5 text-xl text-center leading-normal">
            <p>I'm Anubhav Kumar Singh, a front end developer. Even after having a physical handicap of hearing loss, I have not allowed it to become a barrier in achieving my goals.</p><br />
            <p>I have completed Master of Computer Application (MCA) from Sikkim Manipal Univsersity and presently striving hard to achieve expertise in my endeavours.</p><br />
            <p>I truely believe that discipline, hardwork and dedication to the commitment can turn any dream into reality.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
