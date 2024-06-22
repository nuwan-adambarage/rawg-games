import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

export interface Platform {
    id: number;
    name: string;
    slug: string
}

const usePlatform = () => useQuery({ 
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
        staleTime:  ms('24h')
    
}) 

export default usePlatform;