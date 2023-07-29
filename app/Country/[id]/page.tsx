import { getCountry } from "@/api/getCountryDetails";
import CountryDetails from "@/components/CountryDetails/CountryDetails";
import Image from "next/image";
interface PageProps {
    params: { id: string };
  }
const Country = async ({params:{id}}:PageProps) => {
 const country = await getCountry(id);
 if(!country) return null;

    return (
        <div>
             
         <CountryDetails country={country} />
        </div>
    )
}
export default Country;