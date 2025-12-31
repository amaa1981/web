import {
  FallbackIconSolid,
  iconMapSolid,
  IconNameSolid,
} from "@/components/IconLibrary";

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
    <section className="bg-gray-900 py-24 sm:py-32 relative isolate overflow-hidden">
      {/* Decorative gradient circle */}
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
      >
        <circle
          r={512}
          cx={512}
          cy={512}
          fill="url(#cta-gradient)"
          fillOpacity="0.4"
        />
        <defs>
          <radialGradient id="cta-gradient">
            <stop stopColor="#29928F" />
            <stop offset={1} stopColor="#29928F" />
          </radialGradient>
        </defs>
      </svg>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:text-left">
          <h2 className="text-base/7 font-semibold text-[#29928F]">
            {subheading}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
            {heading}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {useCase.map((useCase) => {
              const Icon = useCase.icon
                ? iconMapSolid[useCase.icon as keyof typeof iconMapSolid]
  : FallbackIconSolid;
              return (
                <div
                  key={useCase.title}
                  className="rounded-2xl border border-gray-800 bg-gray-800/50 p-6 shadow-sm"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold text-white">
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6 text-[#29928F]"
                    />
                    {useCase.title}
                  </dt>
                  <dd className="mt-3 text-base text-gray-100">
                    {useCase.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
