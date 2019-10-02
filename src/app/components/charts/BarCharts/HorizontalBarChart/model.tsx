import React from 'react';
import { ColorSchemeType } from '../common/colorUtil';
import colors from 'app/theme/color';

export type HorizontalBarChartValueModel = {
  name: string;
  value: number | null;
  percentage: number | null;
};

export type HorizontalBarChartModel = {
  values: HorizontalBarChartValueModel[];
  colors?: ColorSchemeType;
};

// todo: add BarSvgProps when axis/renderTick function declaration is included
export const barModel: any = {
  data: [],
  keys: ['percentage'],
  indexBy: 'name',
  margin: { top: 40, right: 50, bottom: 0, left: 200 },
  padding: 0.4,
  layout: 'horizontal',
  axisTop: {
    tickValues: 5,
    tickSize: 15,
    tickPadding: 10,
    tickRotation: 0,
    legend: '',
    legendOffset: 36,
    format: v => `${v}%`,
  },
  axisRight: null,
  axisBottom: null,
  axisLeft: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: '',
    legendPosition: 'middle',
    legendOffset: -40,
    renderTick: ({ textX, value, x, y }) => {
      return (
        <g transform={`translate(${x},${y})`}>
          <text
            style={{
              fontWeight: 500,
              fontFamily: 'Inter',
              fontSize: 12,
              dominantBaseline: 'auto',
            }}
            x="-16%"
            textAnchor="start"
            transform={`translate(${textX}, -5)`}
          >
            {value}
          </text>
          <line
            x1="0"
            x2="-200"
            y1="0"
            y2="0"
            style={{
              stroke: colors.greylight30OrFontdisablet,
              strokeWidth: 1,
            }}
          />
        </g>
      );
    },
  },
  labelSkipWidth: 9,
  labelSkipHeight: 17,
  legends: [],
  motionStiffness: 90,
  motionDamping: 15,
  colors: [],

  enableGridX: true,
  enableGridY: true,
  maxValue: 100,

  theme: {
    axis: {
      ticks: {
        text: {
          fontWeight: 500,
          fontFamily: 'Inter',
          fontSize: 12,
          dominantBaseline: 'auto',
        },
        line: {
          strokeWidth: 0,
        },
      },
    },
    legends: {
      text: {
        fontWeight: 500,
        fontFamily: 'Inter',
        fontSize: 12,
      },
    },
  },
};
