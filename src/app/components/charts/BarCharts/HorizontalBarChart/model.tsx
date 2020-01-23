import React from 'react';
import {
  colorScheme,
  ColorSchemeType,
} from 'app/components/charts/BarCharts/common/colorUtil';
import colors from 'app/theme/color';
import { useMediaQuery, useTheme } from '@material-ui/core';

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
  margin: { top: 0, right: 0, bottom: 0, left: 140 },
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
    renderTick: function Tick({ textX, value, x, y }) {
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
            textAnchor="end"
            css={`
              @media (min-width: 320px) {
                transform: translate(30px, -5px);
              }
              @media (min-width: 600px) {
                transform: translate(100px, -5px);
              }
              @media (min-width: 960px) {
                transform: translate(175px, -5px);
              }
            `}
            // transform={`translate(${get()}, -5)`}
          >
            {value}
          </text>
          <line
            x1="0"
            x2="-140"
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
