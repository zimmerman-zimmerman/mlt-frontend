import React from 'react';
import { ResponsiveLine, LineProps, LineSvgProps } from '@nivo/line';
import styled from 'styled-components';
import { LineChartModel, lineModel } from './model';
import { colorScheme } from 'app/components/charts/BarCharts/common/colorUtil';
// import { CustomSymbolShape } from '../common/CustomSymbolShape';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

//TODO: Discuss value skipping on x-axis.
// - It is possible to skip values => axisBottom => tickValues
// - It is not possible to "jump" from value to value, as in design. According to nivo docs.
//TODO: Discuss only showing first and last points in the line

const Linechart = styled(props => <ResponsiveLine {...props} />)`
  && {
  }
`;

const ChartContainer = styled.div`
  height: 320px;
`;

export const LineChart = (props: LineChartModel) => {
  return (
    <ChartContainer>
      <Linechart
        {...lineModel}
        data={props.values}
        colors={colorScheme(props.colors)}
      />
    </ChartContainer>
  );
};
