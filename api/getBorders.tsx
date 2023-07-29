import { API_URL } from "@/config";

export default async function getBorders (alphacodes:string[]) {
     try {
        const res = await fetch(`${API_URL}/alpha?codes=${alphacodes.join(', ')}`);
        if(!res.ok) throw new Error(`Failed to fetch countries : ${alphacodes}`);
        return res.json();
     } catch (error:any) {
        throw new Error(error);
     }
        
    
    
}