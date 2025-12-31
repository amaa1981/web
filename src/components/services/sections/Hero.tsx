// import HeroVariant1 from "./heroes/HeroVariant1";
import HeroVariant2 from "./heroes/HeroVariant2";
import HeroVariant3 from "./heroes/HeroVariant3";
import HeroVariant4 from "./heroes/HeroVariant4";
import { HeroData } from "@/lib/servicesData";

export default function Hero({ data }: { data: HeroData }) {
  switch (data.variant) {
    // case 1:
    //   return <HeroVariant1 {...data} />;
    case 2:
      return <HeroVariant2 {...data} />;
    case 3:
      return <HeroVariant3 {...data} />;
    case 4:
      return <HeroVariant4 {...data} />;
    default:
      return null;
  }
}
