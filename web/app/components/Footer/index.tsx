"use client";

export default () => {
  return (
    <footer className="block">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="flex flex-row justify-between max-[767px]:flex-col max-[767px]:items-start">
          <div className="max-[767px]: w-full max-w-[560px] max-[991px]:mr-4 max-[991px]:flex-initial">
            <h2 className="text-3xl font-bold md:text-5xl">
              Find AI tools all over the world.
            </h2>
          </div>
          <div className="max-[767px]: max-[991px]:ml-4 max-[991px]:flex-none max-[767px]:mt-8">
            <div className="mb-4 flex max-w-[272px] items-start justify-start">
              <p className="text-[#636262] max-[479px]:text-sm">
                Contact me email to
              </p>
            </div>
            <div className="mb-4 flex max-w-[272px] items-start justify-start">
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f6e24e55dd49a541fd06_EnvelopeSimple-3.svg"
                alt="image"
                className="mr-3 inline-block"
              />
              <p className="text-[#636262] max-[479px]:text-sm">seekme_niu@163.com</p>
            </div>
          </div>
        </div>
        <div className="mb-14 mt-16 w-full [border-bottom:1.7px_solid_rgb(0,_0,_0)]"></div>
        <div className="flex flex-row justify-between max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse">
          <div className="max-[991px]: text-center font-semibold max-[991px]:py-1 max-[479px]:mb-4 sm:text-center">
            Credit to
            <a
              href="http://seeaix.com"
              className="inline-block mx-2 py-1.5 pr-6 font-normal text-[#276EF1] transition hover:text-[#276EF1] sm:py-2 sm:pr-6 lg:pr-12"
              target="_blank"
            >
              SeeAI
            </a>
          </div>
          <div className="max-[991px]:flex-none">
            <p className="text-[#636262] max-[479px]:text-sm">
              {" "}
              © Copyright 2023. All rights reserved.{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
