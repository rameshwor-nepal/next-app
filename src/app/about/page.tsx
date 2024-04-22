"use client";
import Experience from "@/components/about/Experience";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="text-6xl text-[#2a1c43] font-extrabold my-10">
          Commitment Ignites Ambition!
        </h1>
        <div className="flex flex-col lg:flex-row gap-12 mx-16 items-center justify-center">
          <div className="w-4/6 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase text-gray-900">
              Biography
            </h2>
            <p className="font-medium mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nemo nihil natus sapiente aut
              deleniti alias ad repudiandae quaerat aperiam dolorem delectus a eaque ab enim repellendus, nostrum temporibus consequuntur?
            </p>
            <p className="font-medium mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nemo nihil natus sapiente aut
              deleniti alias ad repudiandae quaerat aperiam dolorem delectus a eaque ab enim repellendus, nostrum temporibus consequuntur?
              deleniti alias ad repudiandae quaerat aperiam dolorem delectus a eaque ab enim repellendus, nostrum temporibus consequuntur?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nemo nihil natus sapiente aut
            </p>
            <p className="font-medium mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nemo nihil natus sapiente aut
              deleniti alias ad repudiandae quaerat aperiam dolorem delectus a eaque ab enim repellendus, nostrum temporibus consequuntur?
            </p>
          </div>

          <div className="w-2/6 relative rounded-2xl border-solid border-[#2a1c43] bg-white border-2 p-8">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black" />
            <Image src={'/myPhoto.jpg'} alt="my photo" width={0} height={0} className="w-full h-auto rounded-2xl" />
          </div>

        </div>

        <Experience />
      </div>

    </motion.div>
  );
};

export default AboutPage;
