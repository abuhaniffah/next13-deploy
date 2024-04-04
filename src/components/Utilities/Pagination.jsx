const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1);
        scrollTop();
    }

    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prevState) => prevState - 1);
            scrollTop();
        }
    }

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
        scrollTop();
    }

    // Membuat array nomor halaman yang akan ditampilkan dalam navigasi
    const displayPages = [];
    const totalPagesToShow = 5; // Menampilkan 5 nomor halaman
    const minPage = Math.max(1, page - Math.floor(totalPagesToShow / 2));
    const maxPage = Math.min(lastPage, minPage + totalPagesToShow - 1);

    for (let i = minPage; i <= maxPage; i++) {
        displayPages.push(i);
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-pretty text-purple-700 text-2xl">
            <button onClick={handlePrevPage} className="transition-all hover:text-color-primary" disabled={page === 1}>Prev</button>
            {displayPages.map((pageNumber) => (
                <button key={pageNumber} onClick={() => handlePageChange(pageNumber)} className={`transition-all hover:text-color-accent ${pageNumber === page ? 'font-bold bg-yellow-200 rounded-full p-2' : ''}`} style={{ fontSize: pageNumber === page ? '1.5rem' : '1rem' }}>
                    {pageNumber}
                </button>
            ))}
            <button onClick={handleNextPage} className="transition-all hover:text-blue-500" disabled={page === lastPage}>Next</button>
        </div>
    )
}

export default Pagination;
