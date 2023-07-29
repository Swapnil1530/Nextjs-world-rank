import { API_URL } from "@/config";

export async function getCountry (alphaCode:string) {
    try{
      const res = await fetch (`${API_URL}/alpha/${alphaCode}`);
      if(!res.ok) throw new Error(`Failed to Fetch country : ${alphaCode}`);
      const countryData = await res.json();
      return countryData[0];
    }catch(error){
   return null;
    }
}