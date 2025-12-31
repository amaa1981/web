import { services } from "@/lib/servicesData";
import Hero from "@/components/services/sections/Hero";
import Overview from "@/components/services/sections/Overview";
import Challenges from "@/components/services/sections/Challenges";
import WhyItMatters from "@/components/services/sections/WhyItMatters";
import UseCases from "@/components/services/sections/UseCases";
import TechStack from "@/components/services/sections/TechStack";
import Faqs from "@/components/services/sections/Faqs";
import Cta from "@/components/services/sections/Cta";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.meta.title,
    description: service.meta.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <>
      {service.hero && (
        <>
          <Hero data={service.hero} />
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </>
      )}

      {service.overview && (
        <>
          <Overview data={service.overview} />
        </>
      )}

      {service.challenges && (
        <>
          <Challenges data={service.challenges} />
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </>
      )}

      {service.whyItMatters && (
        <>
          <WhyItMatters data={service.whyItMatters} />
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </>
      )}

      {service.useCases && (
        <>
          <UseCases data={service.useCases} />
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </>
      )}

      {service.techStack && (
        <>
          <TechStack data={service.techStack} />
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </>
      )}

      {service.faqs && (
        <>
          <Faqs data={service.faqs} />
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </>
      )}

      {service.cta && <Cta data={service.cta} />}
    </>
  );
}
