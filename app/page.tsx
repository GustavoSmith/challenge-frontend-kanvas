import Image from "next/image";
import poolImage from "@/public/images/pool.jpg";

export default function Home() {
  return (
    <main className="relative overflow-x-clip 2xl:flex 2xl:gap-32">
      <section className="mt-6 font-serif text-black/85 sm:mt-16">
        <header className="mb-12 ml-8 h-6 w-28 shrink-0 md:mb-28 md:ml-20 md:h-9 md:w-36">
          <Image
            src="/images/kanvas-icon.png"
            alt="Kanvas logo"
            width={150}
            height={37}
          />
        </header>
        <div className="flex flex-col pl-[11%] text-[54px]/[48.6px] md:text-8xl/[90px] lg:pl-28">
          <span>Research.</span>
          <span>Reach.</span>
          <span>Realize.</span>
          <h1 className="relative text-kanvas-blue">
            <Image
              src="/images/blue-line.png"
              alt="A blue line, used for decorative purposes."
              width={500}
              height={50}
              className="absolute -left-4 top-6 w-72"
            />
            Properties <span className="absolute text-[18px]/[24px]">TM</span>
          </h1>
        </div>
        <div className="flex gap-7 pl-[11%] pt-6 font-sans text-xl/6 max-md:flex-col md:gap-10 md:text-2xl/[30px] lg:pl-28">
          <p className="w-[270px] md:w-72">
            Kanvas is a{" "}
            <span className="font-semibold text-kanvas-blue">
              real estate technology platform
            </span>{" "}
            that simplifies the process of buying and selling residential
            properties.
          </p>
          <p className="w-[291px] max-md:pl-[30px] md:pt-16">
            Our mission is to provide an{" "}
            <span className="font-semibold text-kanvas-blue"> efficient </span>
            and
            <span className="font-semibold text-kanvas-blue">
              {" "}
              transparent{" "}
            </span>{" "}
            real estate experience for everyone.
          </p>
        </div>
        <form className="mx-auto mb-[26px] mt-[30px] flex w-fit min-w-80 gap-2.5 rounded-lg border border-transparent bg-white py-2 pl-4 pr-2 font-sans text-base drop-shadow-md has-[:focus]:border-kanvas-blue max-sm:flex-col sm:max-w-[624px] sm:items-center md:mb-9">
          <label className="text-kanvas-blue" htmlFor="userEmail">
            Redefine real estate, join the waitlist:
          </label>
          <div className="flex justify-between gap-4">
            <input
              name="userEmail"
              id="userEmail"
              type="email"
              placeholder="Enter your email"
              className="peer max-w-52 grow text-start text-black caret-kanvas-blue focus:outline-none"
            />
            <button
              className="size-7 rounded bg-kanvas-blue/20 text-white peer-focus:bg-kanvas-blue"
              type="submit"
              aria-label="Submit email address"
            >
              {/* Button icon */}
              <svg
                viewBox="0 0 15 16"
                fill="currentColor"
                className="mx-auto size-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_1_98" fill="white">
                  <path d="M14.3257 7.32644C14.8442 7.6258 14.8442 8.37422 14.3257 8.67359L1.84037 15.882C1.32186 16.1814 0.673706 15.8072 0.673706 15.2084L0.673707 0.791611C0.673707 0.192877 1.32185 -0.181333 1.84037 0.118033L14.3257 7.32644Z" />
                </mask>
                <path
                  d="M1.84037 15.882L2.42371 16.8924L1.84037 15.882ZM14.3257 8.67359L13.7424 7.66323L14.3257 8.67359ZM14.3257 7.32644L14.909 6.31608L14.3257 7.32644ZM13.7424 7.66323L1.25704 14.8716L2.42371 16.8924L14.909 9.68395L13.7424 7.66323ZM1.84037 15.2084L1.84037 0.791611H-0.49296L-0.492961 15.2084H1.84037ZM1.25704 1.1284L13.7424 8.3368L14.909 6.31608L2.42371 -0.892329L1.25704 1.1284ZM1.84037 0.791611C1.84037 1.09097 1.5163 1.27808 1.25704 1.1284L2.42371 -0.892329C1.12741 -1.64075 -0.49296 -0.705219 -0.49296 0.791611H1.84037ZM1.25704 14.8716C1.5163 14.722 1.84037 14.909 1.84037 15.2084H-0.492961C-0.492961 16.7053 1.12742 17.6408 2.42371 16.8924L1.25704 14.8716ZM14.909 9.68395C16.2053 8.93553 16.2053 7.06449 14.909 6.31608L13.7424 8.3368C13.4831 8.18712 13.4831 7.81291 13.7424 7.66323L14.909 9.68395Z"
                  fill="white"
                  mask="url(#path-1-inside-1_1_98)"
                />
              </svg>
            </button>
          </div>
        </form>
        <footer className="flex flex-col justify-between gap-20 md:max-xl:gap-48">
          <p className="pl-[11%] font-sans text-lg/6 font-bold md:text-2xl/7 lg:pl-28">
            +1-855-<span className="text-kanvas-blue">KANVAS</span>
          </p>
          <p className="mb-0 mt-auto pl-[11%] font-sans text-sm text-[#B3B3B3] md:pb-[35px]">
            © 2024 Kanvas.co
          </p>
        </footer>
      </section>
      <div className="w-full  2xl:flex 2xl:max-h-screen 2xl:grow  2xl:py-5 2xl:pr-5">
        <Image
          src={poolImage}
          alt="A photo of a pool, view from above."
          className="-top-10 h-auto rounded-xl max-2xl:absolute max-2xl:-right-16 max-2xl:w-[40%] max-2xl:-rotate-[6deg] min-[450px]:max-2xl:-top-[12%] 2xl:hidden 2xl:max-h-fit 2xl:grow"
          priority
        />
        <div className="w-full rounded-lg bg-pool bg-cover bg-center bg-no-repeat max-2xl:hidden" />
      </div>
    </main>
  );
}
