import { API_URL } from "@/config";

export async function getCountries () {
    const res = await fetch(`${API_URL}/all`);
    if(!res.ok) throw new Error('Failed to fetch countries');

    return res.json();
}