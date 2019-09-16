import React from 'react';

/* components */
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { SimpleListItem } from '../../common/SimpleListItem';

/* models */
import { TableCardModel } from './model';

/* styles */
import {
  ArrowContainer,
  ArrowStyleDown,
  ArrowStyleUp,
  CardContainer,
  CardHead,
} from './style';
import { TableTitle } from '../../index';

export const TableCard = (props: TableCardModel) => {
  const [open, setOpen] = React.useState(false);

  const isOpen = (props.expandable && open) || !props.expandable;

  const items = props.items || [];

  return (
    <CardContainer open={isOpen} fullWidth={props.fullWidth}>
      <CardHead
        border={isOpen}
        expandable={props.expandable}
        onClick={() => setOpen(!open)}
      >
        <TableTitle variant="h6">{props.title}</TableTitle>
        {props.expandable && (
          <ArrowContainer>
            {open ? <ArrowStyleUp /> : <ArrowStyleDown />}
          </ArrowContainer>
        )}
      </CardHead>
      <Table>
        {isOpen && (
          <TableBody>
            {items.map((item, index) => (
              <SimpleListItem
                key={`simple-row-${index}`}
                items={item}
                index={index}
              />
            ))}
          </TableBody>
        )}
      </Table>
    </CardContainer>
  );
};
