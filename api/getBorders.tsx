import { API_URL } from "@/config";

export default async function getBorders(alphaCodes: string[]) {
  try {
    const res = await fetch(`${API_URL}/alpha?codes=${alphaCodes.join(",")}`);
    if (!res.ok) throw new Error(`Failed to fetch countries : ${alphaCodes}`);
    return res.json();
  } catch (error: any) {
    throw new Error(error);
  }
}
