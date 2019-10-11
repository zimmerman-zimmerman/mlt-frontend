import get from 'lodash/get';
import { percentage } from 'app/utils/percentage';
import { getTooltipContent } from 'app/utils/generic';
import { ListModel } from 'app/components/datadisplay/Lists/model';

export const getIncPledgesListData = (rawData, tooltipsData): ListModel => {
  const allHumActCount = get(rawData, 'count', 0);
  const incPledgeValue1 = get(rawData, 'incPledgeBar.count', 0);
  const incPledgeValue2 = get(rawData, 'incPledge_2.count', 0);
  const incPledgeValue3 = get(rawData, 'incPledge_3.count', 0);
  return {
    title: 'Incoming pledges',
    elName: 'incPledge',
    items: [
      {
        label: 'Total no. of activities',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Incoming - Pledges',
          'Total no. of activities'
        ),
        values: [
          {
            ptc: percentage(incPledgeValue1, allHumActCount),
            qtc: incPledgeValue1,
          },
        ],
      },
      {
        label: 'Funding provider details',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Incoming - Pledges',
          'Funding provider details'
        ),
        values: [
          {
            ptc: percentage(incPledgeValue2, allHumActCount),
            qtc: incPledgeValue2,
          },
        ],
      },
      {
        label: 'Organisation type provided',
        tooltip: getTooltipContent(
          tooltipsData,
          'Signatory Data - Incoming - Pledges',
          'Organisation type provided'
        ),
        values: [
          {
            ptc: percentage(incPledgeValue3, allHumActCount),
            qtc: incPledgeValue3,
          },
        ],
      },
    ],
  };
};
