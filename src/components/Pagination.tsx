import React, { useState } from 'react';
import styles from '../styles/Pagination.module.css';

interface PaginationProps {
    setPageNumber: React.Dispatch<React.SetStateAction<any>>;
    pageNumber: number;
    searchTerm: string;
}

const Pagination: React.FC<PaginationProps> = ({ setPageNumber, pageNumber, searchTerm }) => {

    const handleNextPage = () => {
        if (pageNumber === 4) {
            return;
        }
        else {
            setPageNumber((prev: number) => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (pageNumber === 1) {
            return;
        }
        else {
            setPageNumber((prev: number) => prev - 1);
        }
    };

    return (
        <>
            {/* only display pagination if search term is vehicles or starships (films only has one page) */}
            {(searchTerm.includes('ve') || searchTerm.includes('st')) && (
                <div className={styles.pagination__container}>
                    <button
                        onClick={handlePrevPage}
                        disabled={pageNumber === 1}
                        className={styles.pagination__button}
                    >
                        Previous
                </button>
                    <span>Page {pageNumber} of 4</span>
                    <button
                        onClick={handleNextPage}
                        disabled={pageNumber === 4}
                        className={styles.pagination__button}
                    >
                        Next
                </button>
                </div>
            )}
        </>
    );

};

export default Pagination;
