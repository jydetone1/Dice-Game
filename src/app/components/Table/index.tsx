'use client';

import { Typography, Grid } from '@mui/material';
import {
  StyledTableContainer,
  StyledGridRow,
  StyledGridColumn,
  StyledEmptyText,
} from '../../gameStyles';

export type Column<T> = {
  title: React.ReactNode;
  render?: (row: T, rowIndex: number) => React.ReactNode;
  accessor?: keyof T;
};

interface ITable<T> {
  columns: Column<T>[];
  data: T[];
  emptyText?: string;
}

export default function Table<T>({
  columns,
  data,
  emptyText = 'No  guess results',
}: ITable<T>) {
  return (
    <StyledTableContainer>
      {data.length === 0 ? (
        <StyledEmptyText>{emptyText}</StyledEmptyText>
      ) : (
        <>
          <StyledGridColumn container spacing={2}>
            {columns.map((col, idx) => (
              <Grid key={idx} size={4}>
                <Typography fontWeight='bold'>{col.title}</Typography>
              </Grid>
            ))}
          </StyledGridColumn>

          {data.map((row, rowIdx) => (
            <StyledGridRow container spacing={2} key={rowIdx}>
              {columns.map((col, colIdx) => (
                <Grid key={colIdx} size={4}>
                  {col.render ? (
                    col.render(row, rowIdx)
                  ) : col.accessor ? (
                    <Typography>{String(row[col.accessor])}</Typography>
                  ) : null}
                </Grid>
              ))}
            </StyledGridRow>
          ))}
        </>
      )}
    </StyledTableContainer>
  );
}
