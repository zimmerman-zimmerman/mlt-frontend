/* utils */
import find from 'lodash/find';
import get from 'lodash/get';

/* consts */
import { shortMonthNames } from 'app/__consts__/dates';

// util function made for
// solr responses to get
// english text narratives from JSONString
// variables, which do contain
// the 'lang' variable
export function getEngText(jsonStrTitle: string) {
  const engTxt = JSON.parse(jsonStrTitle);
  const engFound = find(engTxt, ['lang', 'en']);
  if (engFound) {
    return engFound.narrative;
  }

  if (engTxt[0] && engTxt[0].narrative) {
    return engTxt[0].narrative;
  }

  return 'Not Found';
}

interface ActualDateInterface {
  actualStart: string;
  actualEnd: string;
}

// accepts string data of various formats
// and reforamts it to 'Day shortMName Year'
export function formatDate(strDate: string) {
  const tempDate = new Date(strDate);
  return `${tempDate.getDate()} ${
    shortMonthNames[tempDate.getMonth()]
  } ${tempDate.getFullYear()}`;
}

// util function to get actual start
// and end dates according to the iati standard
// http://reference.iatistandard.org/203/codelists/ActivityDateType/
// when provided with date and date type arrays
// where the indexes correspond to each other.
// The actual start date is of type code 2
// and the actual end is of type code 4
// ALSO this formats the dates
export function getActualDates(
  dates: string[],
  dateTypes: string[]
): ActualDateInterface {
  let actualStart = '';
  let actualEnd = '';

  const actualStartIndex = dateTypes.indexOf('2');
  const actualEndIndex = dateTypes.indexOf('4');
  if (actualStartIndex !== -1) {
    // and here we format the date
    actualStart = formatDate(dates[actualStartIndex]);
  }
  if (actualEndIndex !== -1) {
    // and here we format the date
    actualEnd = formatDate(dates[actualEndIndex]);
  }

  return {
    actualStart,
    actualEnd,
  };
}

// helper function to get the english narrative from
// narrative arrays
export function getNarrativeText(narArray, doubleArray?: boolean) {
  let engNarr = find(narArray, ['lang', 'en']);

  if (doubleArray) {
    // ye so because the response structure is bad
    // it uses double arrays for no reason
    // we need to use the first arrays items key
    engNarr = find(narArray, ['[0]lang', 'en']);

    engNarr = engNarr && engNarr[0];
  }

  if (engNarr) {
    return engNarr.narrative || engNarr.text || 'No Data';
  } else if (doubleArray) {
    // ye so because the response structure is bad
    // it uses double arrays for no reason
    // we need to use the first arrays items key
    return (
      get(narArray, '[0][0].narrative', 'No Data') ||
      get(narArray, '[0][0].text', 'No Data')
    );
  }

  return (
    get(narArray, '[0].narrative', 'No Data') ||
    get(narArray, '[0].text', 'No Data')
  );
}
