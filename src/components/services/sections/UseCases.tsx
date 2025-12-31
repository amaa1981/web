import UsecaseVariant1 from "./usecases/UsecaseVariant1";
import UsecaseVariant2 from "./usecases/UsecaseVariant2";
import UsecaseVariant3 from "./usecases/UsecaseVariant3";
import UsecaseVariant4 from "./usecases/UsecaseVariant4";
import { UseCasesData } from "@/lib/servicesData";

export default function UseCase({ data }: { data: UseCasesData }) {
  switch (data.variant) {
    case 1:
      return <UsecaseVariant1 {...data} />;
    case 2:
      return <UsecaseVariant2 {...data} />;
    case 3:
      return <UsecaseVariant3 {...data} />;
    case 4:
      return <UsecaseVariant4 {...data} />;
    default:
      return null;
  }
}
