type WhyItMattersProps = {
  data: {
    heading: string;
    description: string;
    stats: { value: string; label: string; detail: string; height: string }[];
  };
};

export default function WhyItMatters({
  data,
}: {
  data: WhyItMattersProps["data"];
}) {
  const bgColors = ["bg-gray-50", "bg-gray-900", "bg-[#29928F]"];
  const textColors = ["text-gray-900", "text-white", "text-white"];
  const detailColors = ["text-gray-600", "text-gray-400", "text-green-100"];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background pattern */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            id="hero-pattern"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#hero-pattern)"
          strokeWidth={0}
        />
      </svg>

      {/* Section Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {data.heading}
          </h2>
          <p className="mt-6 text-base text-gray-600">{data.description}</p>
        </div>

        {/* Stats */}
        <div
          className="mx-auto mt-16 grid max-w-2xl gap-8 lg:mx-0 lg:mt-20 
                    lg:max-w-none lg:grid-cols-3 items-end"
        >
          {data.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`
            flex flex-col justify-between rounded-2xl p-8
            ${bgColors[idx % bgColors.length]} 
            ${stat.height ?? "h-auto"}
          `}
            >
              <p
                className={`text-3xl font-bold tracking-tight ${textColors[idx % textColors.length]}`}
              >
                {stat.value}
              </p>
              <div className="mt-auto">
                <p
                  className={`text-lg font-semibold tracking-tight ${textColors[idx % textColors.length]}`}
                >
                  {stat.label}
                </p>
                <p
                  className={`mt-2 text-base ${detailColors[idx % detailColors.length]}`}
                >
                  {stat.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
