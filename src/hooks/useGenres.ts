import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Genre>('/genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, //24Hrs
        cacheTime: 24 * 60 * 60 * 1000, //24Hrs
})

export default useGenres;