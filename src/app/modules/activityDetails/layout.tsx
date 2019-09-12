import React from 'react';
import styled from 'styled-components';

// Model
import { ActivityDetailModel } from './model';

// Components
import { Grid, Typography, Box, Hidden, Container } from '@material-ui/core';
import { InPageNavigation } from 'app/components/navigation/InPageNavigation';
import { List } from 'app/components/datadisplay/Lists';
import Table from 'app/components/datadisplay/Table';
import { ActivityHeaderLayout } from './common/activityHeader';

// Mock Data
import { mockData as inPageNavMockData } from 'app/components/navigation/InPageNavigation/mock';
import { TableCard } from '../../components/datadisplay/Lists/variants/TableCard';

const ContentTypographyLG = styled(props => <Typography {...props} />)`
  column-count: 2;
  column-gap: 6rem;
`;

export const ActivityDetailsLayout = (props: ActivityDetailModel) => {
  return (
    <Container maxWidth="lg">
      {/** --------------------------------------------------------------------------- */}
      {/** Header Section */}
      <ActivityHeaderLayout
        activity={props.header.activity}
        organisation={props.header.organisation}
      />

      <Box width="100%" height="91px" />
      {/** --------------------------------------------------------------------------- */}
      {/** Section1 */}
      <Grid container lg={7} md={12}>
        <Typography variant="subtitle1">{props.sections[0].title}</Typography>
        <Box width="100%" height="25px" />
        <Typography variant="body1">{props.sections[0].content}</Typography>
      </Grid>

      <Box width="100%" height="91px" />

      {/** --------------------------------------------------------------------------- */}
      {/** Tables */}
      <Grid container lg={12} md={12}>
        {/*TODO: where is the black total sum up bar?*/}
        {/*TODO: Tables need to be horizontally scrollable and may not exceed parent width*/}
        <Table
          title={props.incomingTransactionsTableData.title}
          data={props.incomingTransactionsTableData.data}
          columns={props.incomingTransactionsTableData.columns}
          options={props.incomingTransactionsTableData.options}
          columnsCell={props.incomingTransactionsTableData.columnsCell}
        />

        <Box height="80px" width="100%" />

        <Table
          title={props.outgoingTransactionsTableData.title}
          data={props.outgoingTransactionsTableData.data}
          columns={props.outgoingTransactionsTableData.columns}
          options={props.outgoingTransactionsTableData.options}
          columnsCell={props.outgoingTransactionsTableData.columnsCell}
        />
      </Grid>

      <Box height="112px" width="100%" />

      {/** --------------------------------------------------------------------------- */}
      {/** List */}
      <Grid container spacing={4}>
        <Hidden only="md">
          <Grid item lg={3}>
            <InPageNavigation locations={inPageNavMockData.locations} />
          </Grid>
        </Hidden>
        <Grid item lg={8} md={12}>
          {props.lists.map(list => (
            <>
              <List title={list.title} items={list.items} />
              <Box width="100%" height="32px" />
            </>
          ))}
        </Grid>
      </Grid>

      <Box height="144px" width="100%" />

      {/** --------------------------------------------------------------------------- */}
      {/** Section2 */}
      <Grid container xs={12} style={{ paddingLeft: '16px' }}>
        <Typography variant="h4">{props.sections[1].title}</Typography>
        <Box width="100%" height="25px" />
        <TableCard
          title={props.tableCard ? props.tableCard.title : ''}
          items={props.tableCard ? props.tableCard.items : []}
        />
        <Box width="100%" height="32px" />
      </Grid>

      <Box height="50px" />
    </Container>
  );
};
