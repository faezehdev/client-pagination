import _ from 'lodash'
export default function Pagination({Pages,setPage,activePage}) {
  const PrevPageHandler = ()=>{
    setPage((oldPage)=>{
      let prevpage = oldPage - 1
      if( prevpage < 1 ){
        prevpage = Pages
      }
      return prevpage
    })
   
  }
  const NextPageHandler = ()=>{
    setPage((oldPage)=>{
      let nextPage = oldPage + 1
      if( nextPage > Pages ){
        nextPage = 1
      }
      return nextPage
    })
   
  }
  return (
    <nav>
        <ul className="pagination flex justify-center items-center gap-2">
            <li className="page-item hover:cursor-pointer" onClick={PrevPageHandler}> 
              Prev
            </li>
            {
                _.times(Pages, (index)=>(
                    <li key={`pagination-${index}`} 
                    className={`page-item ${index + 1 === activePage ? 'active' : '' }
                     [&.active]:bg-orange-500 px-[1em] py-[1em] rounded-[5px]
                    [&.active]:text-white duration-300 hover:cursor-pointer`} 
                    onClick={()=> setPage(index + 1)}> 
                       {index + 1}
                  </li>   
                ))
            }
            <li className="page-item hover:cursor-pointer"  onClick={NextPageHandler}> 
              Next
            </li>
        </ul>
    </nav>
  )
}
