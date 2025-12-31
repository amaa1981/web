import { IconNameSolid } from "@/components/IconLibrary";

type UseCasesData = {
  variant: 1 | 2 | 3 | 4;
  heading: string;
  subheading: string;
  useCase: {
    title: string;
    description: string;
    image?: string;
    accent?: string;
    icon?:string;
  }[];
};
export default function UseCases({
  variant,
  heading,
  subheading,
  useCase,
}: UseCasesData) {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 text-center">
        <h2 className="text-base/7 font-semibold text-[#29928F]">{heading}</h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl mx-auto">
          {subheading}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {useCase?.[0] && (
            <div className="flex p-px lg:col-span-4">
              <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                <div className="relative h-80">
                  <img
                    alt={useCase[0].title}
                    src={useCase[0].image}
                    className="h-full w-full object-cover object-top-left"
                  />
                  <div className="absolute inset-px rounded-lg bg-gray-800/10 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-800 to-transparent" />
                </div>
                <div className="p-10 flex flex-col items-center text-center">
                  <h3 className="text-sm/4 font-semibold text-[#29928F]">
                    {useCase[0].accent}
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">
                    {useCase[0].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                    {useCase[0].description}
                  </p>
                </div>
              </div>
            </div>
          )}
          {useCase?.[1] && (
            <div className="flex p-px lg:col-span-2">
              <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-tr-[2rem]">
                <div className="relative h-80">
                  <img
                    alt={useCase[1].title}
                    src={useCase[1].image}
                    className="h-full w-full object-cover object-top-left"
                  />
                  <div className="absolute inset-px rounded-lg bg-gray-800/10 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-800 to-transparent" />
                </div>
                <div className="p-10 flex flex-col items-center text-center">
                  <h3 className="text-sm/4 font-semibold text-[#29928F]">
                    {useCase[1].accent}
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">
                    {useCase[1].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                    {useCase[1].description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {useCase?.[2] && (
            <div className="flex p-px lg:col-span-2">
              <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-bl-[2rem]">
                <div className="relative h-80">
                  <img
                    alt={useCase[2].title}
                    src={useCase[2].image}
                    className="h-full w-full object-cover object-top-left"
                  />
                  <div className="absolute inset-px rounded-lg bg-gray-800/10 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-800 to-transparent" />
                </div>
                <div className="p-10 flex flex-col items-center text-center">
                  <h3 className="text-sm/4 font-semibold text-[#29928F]">
                    {useCase[2].accent}
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">
                    {useCase[2].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                    {useCase[2].description}
                  </p>
                </div>
              </div>
            </div>
          )}
          {useCase?.[3] && (
            <div className="flex p-px lg:col-span-4">
              <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                <div className="relative h-80">
                  <img
                    alt={useCase[3].title}
                    src={useCase[3].image}
                    className="h-full w-full object-cover object-top-left"
                  />
                  <div className="absolute inset-px rounded-lg bg-gray-800/10 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-800 to-transparent" />
                </div>
                <div className="p-10 flex flex-col items-center text-center">
                  <h3 className="text-sm/4 font-semibold text-[#29928F]">
                    {useCase[3].accent}
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">
                    {useCase[3].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                    {useCase[3].description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

