import PageWrapper from "../components/PageWrapper";
import Image from "next/image";
import styles from "../styles/Proyectos.module.css";
import Link from "next/link";
import Head from "next/head";

const Proyectos = () => {
  return (
    <PageWrapper title="Proyectos">
      <Head>
        <title>Proyectos</title>
      </Head>
      <div className="bg-[#131313] h-screen pt-48 flex sm:justify-around flex-col sm:flex-row font-sans">
        <div className="sm:w-5/12 h-[30rem]">
          <Link href={"https://tropicalwhy.vercel.app/"}>
            <a
              target="_blank"
              className={
                "w-full bg-[#0A0A0A] sm:h-[25rem] h-[24rem] justify-center items-center flex text-4xl font-extrabold sm:rounded-xl bg-center hover:shadow-2xl hover:shadow-gray-600 transition duration-300 mb-10 " +
                styles.animation
              }
            >
              <div className="w-12/12 h-[20rem] sm:h-[25rem] flex">
                <Image
                  alt="tropical"
                  width={"800px"}
                  height={"800px"}
                  src={"/img/tropi.png"}
                  className={"sm:rounded-xl " + styles.op}
                />
              </div>
              <p className={"text-white absolute"}>Tropical Why</p>
            </a>
          </Link>
          <Link href={"https://github.com/Andyflow28/tropicalwhy"}>
            <a
              target="_blank"
              className="flex items-center bg-[#0A0A0A] h-14 justify-center sm:justify-start hover:shadow-2xl hover:shadow-gray-600 transition duration-300"
            >
              <div className="flex w-8 ml-5">
                <Image
                  alt="github icon"
                  height={"56px"}
                  width={"56px"}
                  src={"/img/github.png"}
                />
              </div>
              <p className="text-white text-xl mx-5 underline">
                Git Hub: Tropical Why
              </p>
              <div className="flex w-8">
                <Image
                  alt="Link icon"
                  height={"56px"}
                  width={"56px"}
                  src={"/img/enlace.png"}
                />
              </div>
            </a>
          </Link>
        </div>
        <div className="sm:w-5/12 h-[30rem]">
          <Link href={"https://comercev2-andyflow28.vercel.app/"}>
            <a
              target="_blank"
              className={
                "w-full bg-[#0A0A0A] sm:h-[25rem] h-[24rem] justify-center items-center flex text-4xl font-extrabold sm:rounded-xl bg-center hover:shadow-2xl hover:shadow-gray-600 transition duration-300 mb-10 " +
                styles.animation
              }
            >
              <div className="w-12/12 h-[20rem] sm:h-[25rem] flex">
                <Image
                  alt="tropical"
                  width={"800px"}
                  height={"800px"}
                  src={"/img/ind.png"}
                  className={"sm:rounded-xl " + styles.op}
                />
              </div>
              <p className={"text-white absolute"}>E-Commerce</p>
            </a>
          </Link>
          <Link href={"https://github.com/Andyflow28/comercev2"}>
            <a
              target="_blank"
              className="flex items-center bg-[#0A0A0A] h-14 justify-center sm:justify-start hover:shadow-2xl hover:shadow-gray-600 transition duration-300"
            >
              <div className="flex w-8 ml-5">
                <Image
                  alt="github icon"
                  height={"56px"}
                  width={"56px"}
                  src={"/img/github.png"}
                />
              </div>
              <p className="text-white text-xl mx-5 underline">
                Git Hub: E-Commerce
              </p>
              <div className="flex w-8">
                <Image
                  alt="Link icon"
                  height={"56px"}
                  width={"56px"}
                  src={"/img/enlace.png"}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Proyectos;
