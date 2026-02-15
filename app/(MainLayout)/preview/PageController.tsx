"use client"
import {  useContext } from 'react'
import { SelectedItemsContext } from './SelectedItemsPageProvider';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';


const PageController = () => {

  const { maxPerPage, totalPages, changeMaxPerPage } = useContext(SelectedItemsContext)!;
  const totalPagesValue = totalPages || 0;
  const maxPerPageValue = maxPerPage.limit;

  // console.log("PageController totalPages:", totalPages, maxPerPage.limit);
  
  return (
    <div className='tw-mt-1 tw-flex tw-justify-center'>
     <Pagination>
        <PaginationContent>
          {/* Dynamically generate page numbers */}
          {Array.from({ length: totalPagesValue }, (_, i) => {
            const pageNumber = i + 1;
            const isActive = 0 === i * maxPerPageValue;
            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  href="#"
                  className={isActive ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    changeMaxPerPage(maxPerPageValue, pageNumber);
                  }}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          })}

        </PaginationContent>
      </Pagination>

    </div>
  );
   
}

export default PageController;