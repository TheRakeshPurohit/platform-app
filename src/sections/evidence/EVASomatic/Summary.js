import React from 'react';
import { loader } from 'graphql.macro';
import usePlatformApi from '../../../hooks/usePlatformApi';
import SummaryItem from '../../../components/Summary/SummaryItem';

const EVA_SOMATIC_SUMMARY = loader('./EvaSomaticSummary.gql');

function Summary({ definition }) {
  const request = usePlatformApi(EVA_SOMATIC_SUMMARY);
  return (
    <SummaryItem
      definition={definition}
      request={request}
      renderSummary={({ evaSomaticSummary }) => {
        const { count } = evaSomaticSummary;
        return `${count} ${count === 1 ? 'entry' : 'entries'}`;
      }}
      chipText="Somatic mutations"
    />
  );
}

Summary.fragments = {
  evaSomaticSummary: EVA_SOMATIC_SUMMARY,
};

export default Summary;
