import ReactMarkdown from "react-markdown";

type FAQ = {
  question: string;
  answer: string;
};

export default function Faqs({ data }: { data: FAQ[] }) {


  return (
    <section className="relative overflow-hidden">
      {/* Background pattern */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_bottom_left,white,transparent)]"
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

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-base/7 text-gray-600">
            Have a different question and can’t find the answer you’re looking
            for? Reach out to our support team by{" "}
            <a
              href="mailto:info@opencode.sa"
              className="font-semibold text-[#29928F] hover:text-[#13787F]"
            >
              sending us an email
            </a>{" "}
            and we’ll get back to you as soon as we can.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 sm:gap-y-16 lg:grid-cols-2 lg:gap-x-10">
            {data.map((faq, idx) => (
              <div key={idx}>
                <dt className="text-base/7 font-semibold text-gray-900">
                   {faq.question}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                <ReactMarkdown >
            {faq.answer}
          </ReactMarkdown>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
