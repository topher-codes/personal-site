import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center w-full h-full p-4 overflow-y-auto bg-white">
      <Image
        src="/images/resume-1.png"
        width={800}
        height={1000}
        alt="my resume"
      />
      <Image
        src="/images/resume-2.png"
        width={800}
        height={1000}
        alt="my resume"
      />
      <Image
        src="/images/resume-3.png"
        width={800}
        height={1000}
        alt="my resume"
      />
    </div>
  );
};

export default AboutPage;
