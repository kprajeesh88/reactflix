function Pagination ({ page, setPage, totalPages}){

    
    const handleNextpage = () => {
        setPage((prevPage)=> prevPage + 1 )
    }
    const handlePrevpage = () => {
        setPage((prevPage)=> prevPage -1)
    }
    return(
        <div className="pagination">
             <button disabled={page <= 1} onClick={handlePrevpage}>Prev</button>
             <p>Page {page} of {totalPages}</p>
             <button onClick={handleNextpage}>Next</button>
        </div>
    )
}

export default Pagination