import { BsChatDots } from "react-icons/bs";
import { Gpts } from "@/app/types/gpts";
import Preview from "./Preview";
import { getGptsTools } from "@/app/services/gpts";
import moment from "moment";

interface Props {
  gpts: Gpts;
}

export default ({ gpts }: Props) => {
  const tools = getGptsTools(gpts);

  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center rounded-md bg-[#c4c4c4] px-3 py-1">
              <div className="mr-1 h-2 w-2 rounded-full bg-black"></div>
              <p className="text-sm">
                Created at {moment(gpts.updated_at).fromNow()}
              </p>
            </div>
            <p className="text-sm text-[#808080] sm:text-xl">
              Created by {gpts.author_name}
            </p>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:mb-8">
              {gpts.name}
            </h1>
            <p className="text-sm text-[#808080] sm:text-xl">
              {gpts.description}
            </p>
            <div className="mb-8 mt-8 h-px w-full bg-black"></div>
            <div className="mb-6 flex flex-col gap-2 text-sm text-[#808080] sm:text-base lg:mb-8">
              <p className="font-medium">Capabilities</p>
            </div>

            <div className="flex flex-col gap-4 font-semibold sm:flex-row">
              <a
                href={gpts.short_url}
                target="_blank"
                className="flex items-center gap-2 rounded-md border border-solid border-black bg-primary text-white px-6 py-3 truncate"
              >
                <BsChatDots />
                <p>访问官方网站 👉</p>
              </a>
            </div>
          </div>
          <div className="min-h-[530px] overflow-hidden rounded-md bg-[#f2f2f7]">
            <Preview gpts={gpts} />
          </div>
        </div>
      </div>
    </section>
  );
};
