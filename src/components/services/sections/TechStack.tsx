import { TechCategory } from "@/lib/servicesData";

export interface TechStackSection {
  heading: string;
  subheading: string;
  categories: TechCategory[];
}

export default function TechStack({ data }: { data: TechStackSection }) {
  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {data.heading}
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600 max-w-3xl mx-auto">
          {data.subheading}
        </p>

        {/* Grid of categories */}
        <ul
          role="list"
          className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-3 xl:gap-x-8"
        >
          {data.categories.map((category) => (
            <li
              key={category.category}
              className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-gray-50 flex flex-col"
            >
              {/* Header: category logo + name */}
              <div className="flex items-center gap-x-4 border-b border-gray-200 bg-gray-100 p-6">
                <img
                  alt={category.category}
                  src={category.logo}
                  className="h-10 w-10 flex-none object-contain"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.category}
                </h3>
              </div>

              {/* Tools logo cloud */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-6 sm:grid-cols-3">
                  {category.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center justify-center"
                    >
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="max-h-12 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
                <p className="sr-only">Tools under {category.category}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
