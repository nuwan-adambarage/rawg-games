import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient<Genre>('/genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
        staleTime: ms('24h'),
        cacheTime: ms('24h')
})

export default useGenres;