import { SignatoryDataModel } from 'app/modules/signatory-data/model';
import { mockDataVar2 } from 'app/components/datadisplay/Table/mock';

export const signatoryDataMock: SignatoryDataModel = {
  loading: false,
  title: 'Grand Bargin signatories',
  description:
    "<p>This page provides an overview of the IATI ('open') data currently published by individual Grand Bargain signatories and/or their affiliated organisations. Its primary purpose is to enable signatories to monitor their own progress in relation to meeting the data publication commitment of the Grand Bargain.</p>" +
    "<p>Each column in the table relates to a specific IATI publishing indicator as defined within the workstream <a href='http://gbtransparency.org/dashboard/datapubindicators.html' target='_blank'>core commitment target results and indicators (CCTRIs)</a>.</p>",
  sigTable: mockDataVar2,
};

export const iatigbsignatoriesCallValues = {
  values: {
    q: '*:*',
    rows: 0,
    'json.facet': `{
      iati_orgs: {
        type: 'terms',
        limit: -1,
        field: 'reporting_org_ref',
        facet: {
          latest_iati_version: 'max(dataset_iati_version)',
          pubHumData: {
            type: 'query',
            q: 'humanitarian:1 OR transaction_humanitarian:1 
              OR (-(-sector_vocabulary:1 OR sector_vocabulary:*)
              AND (sector_code:[70000 TO 79999] OR sector_code:[93010 TO 93018]))
              OR (-(-transaction_sector_vocabulary:1 OR transaction_sector_vocabulary:*)
              AND (transaction_sector_code:[70000 TO 79999] OR transaction_sector_code:[93010 TO 93018]))',
            facet: {
              v202: {
                type: 'query',
                q:
                  '(humanitarian_scope_vocabulary:"2-1" AND humanitarian_scope_code:*) 
                  OR (sector:* AND sector_vocabulary:10) OR (transaction_sector_code:* 
                  AND transaction_sector_vocabulary:10) 
                  OR (humanitarian_scope_vocabulary:"1-2" AND humanitarian_scope_code:*)',
              },
              v203: {
                type: 'query',
                q:
                  'transaction_type:(12 13) OR default_aid_type_vocabulary:(2 3 4) 
                  OR ((participating_org_type:24 AND participating_org_role:4) 
                  OR transaction_receiver_org_type_code:24)',
              },
            },
          },
          traec: {
            type: 'query',
            q: 'transaction_provider_org_provider_activity_id: *',
          },
        },
      },
    }`,
  },
};

export const OrgNarrative = {
  values: {
    q: '*:*',
    rows: 500000,
    group: 'on',
    'group.field': 'reporting_org_ref',
    fl: 'reporting_org_narrative',
  },
};
