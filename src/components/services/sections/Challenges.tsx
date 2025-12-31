import {
  FallbackIconOutline,
  iconMapOutline,
  IconNameOutline,
} from "@/components/IconLibrary";

type ChallengesProps = {
  data: {
    heading: string;
    subheading: string;
    challenges: { title: string; description: string; icon: IconNameOutline }[];
  };
};

export default function Challenges({ data }: ChallengesProps) {
  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {/* Heading */}
          <h2 className="col-span-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {data.heading}
          </h2>

          {/* Grid of challenges */}
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {data.challenges.map((challenge) => {
              const Icon =
                iconMapOutline[challenge.icon] || FallbackIconOutline;

              return (
                <div
                  key={challenge.title}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
                >
                  <dt className="text-base font-semibold text-gray-900">
                    <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-[#13787F]">
                      <Icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    {challenge.title}
                  </dt>
                  <dd className="mt-1 text-base text-gray-700">
                    {challenge.description}
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
