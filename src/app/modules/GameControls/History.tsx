'use client';

import { FC, useMemo } from 'react';
import Table, { Column } from '../../components/Table';
import { IHistoryEntry } from '../../types';
import { StyledResultText } from '../../gameStyles';
import { text } from '../../utils/text';

interface IGameResults {
  history: IHistoryEntry[];
}

const History: FC<IGameResults> = ({ history }) => {
  const columns: Column<IHistoryEntry>[] = useMemo(
    () => [
      { title: text.time, accessor: 'time' },
      { title: text.guess, accessor: 'guess' },
      {
        title: text.result,
        render: (row) => (
          <StyledResultText $success={row.success}>
            {row.result}
          </StyledResultText>
        ),
      },
    ],
    []
  );

  return <Table columns={columns} data={history} />;
};

export default History;
