import { TableCell, TableRow } from '@/components/ui/table';
import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


interface Props{
    rowPerPage?: number;
}

function DataTableSkeletonWrapper({rowPerPage = 5}: Props) {
  return (
    Array.from({ length: rowPerPage }).map((_, index) => (
      <TableRow key={index}>
        <TableCell><Skeleton width={75} height={20} /></TableCell>
        <TableCell><Skeleton width={140} height={20} /></TableCell>
        <TableCell><Skeleton width={250} height={20} /></TableCell>
        <TableCell><Skeleton width={200} height={20} /></TableCell>
        <TableCell><Skeleton width={210} height={20} /></TableCell>
      </TableRow>
    ))
  );
}

export default DataTableSkeletonWrapper