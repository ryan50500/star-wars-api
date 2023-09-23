// useDataFetching.ts
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

export function useDataFetching(searchTerm: string, setSorting: React.Dispatch<React.SetStateAction<boolean>>) {
    const queryClient = useQueryClient();
    const [matchedKeyword, setMatchedKeyword] = useState<string>(''); // Include matchedKeyword state

    // Keywords for fetching specific data ('films', 'starships', 'vehicles')
    const keywords = ['films', 'starships', 'vehicles'];

    // Prefetch data on page load so users can search and retrieve data quickly
    useEffect(() => {
        const prefetchData = async () => {
            for (const keyword of keywords) {
                try {
                    const response = await fetch(`https://swapi.dev/api/${keyword}/`);
                    const data = await response.json();
                    const queryFn = () => data;
                    // Prefetch data for future use
                    queryClient.prefetchQuery(['products', keyword], queryFn);
                } catch (error) {
                    // Handle any errors that occur during prefetching
                    console.error(error);
                }
            }
        };
        // Trigger prefetching when the component mounts
        prefetchData();
    }, []);


    useEffect(() => {
        // Set matchedKeyword based on searchTerm
        const matchedKeyword = keywords.find((keyword) => keyword.includes(searchTerm)) || '';
        setMatchedKeyword(matchedKeyword);
    }, [searchTerm]);

    // Enable users to perform partial searches for retrieval from the API
    const { data, isLoading, error } = useQuery(['products', matchedKeyword], async () => {
        // Set sorting to false so the data (without being sorted) is passed to the components initially
        setSorting(false);
        if (!matchedKeyword) return []; // Handle the case when matchedKeyword is empty
        const response = await fetch(`https://swapi.dev/api/${matchedKeyword}/`);
        return response.json();
    });

    return { data, isLoading, error, matchedKeyword }; // Include matchedKeyword in the return
}
