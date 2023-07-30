import { getCountry } from "@/api/getCountryDetails";
import CountryDetails from "@/components/CountryDetails/CountryDetails";
import { API_URL } from "@/config";
import Image from "next/image";
interface PageProps {
    params: { id: string };
  }

  export async function generateStaticParams(): Promise<{ id: string }[]> {
    const res = await fetch(`${API_URL}/all`);
    const countries = await res.json();
    return countries.map((country:any) => ({
      id: country.cca3,
    }));
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