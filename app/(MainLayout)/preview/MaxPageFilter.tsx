"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React, {  useContext,  } from 'react'
import { SelectedItemsContext } from './SelectedItemsPageProvider';


const MaxPageFilter = () => {

  const { changeMaxPerPage } = useContext(SelectedItemsContext)!;

  return (
    <Select onValueChange={(e) => changeMaxPerPage(parseInt(e))} >
      <SelectTrigger className="tw-[180px]">
        <SelectValue placeholder="select a page" />
      </SelectTrigger>
      <SelectContent >
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="15">15</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default MaxPageFilter;