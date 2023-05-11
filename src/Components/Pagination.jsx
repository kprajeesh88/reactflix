import { useContext } from "react"
import { AppContext } from "../Contexts/appContext"
function Pagination ({ page, setPage, totalPages}){

    const {dispatch} = useContext(AppContext)
    
    const handleNextpage = () => {
        // setPage((prevPage)=> prevPage + 1 )
        dispatch({
            type:"NEXT_PAGE",
        })
    }
    const handlePrevpage = () => {
        // setPage((prevPage)=> prevPage -1)
        dispatch({
            type:"PREV_PAGE",
        })
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