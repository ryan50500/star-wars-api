// useDataFetching.ts
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

interface DataFetchingOptions {
    pageNumber: number;
    searchTerm: string;
    setSorting: React.Dispatch<React.SetStateAction<boolean>>;
    setPageNumber: React.Dispatch<React.SetStateAction<any>>;
}

export function useDataFetching({ pageNumber, setPageNumber, searchTerm, setSorting }: DataFetchingOptions) {


    const queryClient = useQueryClient();

    // when user search term matches one of the keywords, set it to matchedKeyword
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


    const fetchUrl = matchedKeyword === 'films'
        ? `https://swapi.dev/api/${matchedKeyword}/`
        : `https://swapi.dev/api/${matchedKeyword}/?page=${pageNumber}`;


    // Enable users to perform partial searches for retrieval from the API
    const { data, isLoading, error } = useQuery(['products', matchedKeyword, pageNumber], async () => {
        // Set sorting to false so the data (without being sorted) is passed to the components initially
        setSorting(false);
        if (!matchedKeyword) return []; // Handle the case when matchedKeyword is empty
        const response = await fetch(fetchUrl);
        return response.json();
    });

    return { data, isLoading, error, matchedKeyword };
}
