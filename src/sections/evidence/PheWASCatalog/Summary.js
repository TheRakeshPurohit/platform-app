import React from 'react';
import { loader } from 'graphql.macro';
import usePlatformApi from '../../../hooks/usePlatformApi';
import SummaryItem from '../../../components/Summary/SummaryItem';

const PHEWAS_CATALOG_SUMMARY = loader('./PheWASCatalogSummaryQuery.gql');

function Summary({ definition }) {
  const request = usePlatformApi(PHEWAS_CATALOG_SUMMARY);
  return (
    <SummaryItem
      definition={definition}
      request={request}
      renderSummary={({ phewasCatalogSummary }) => {
        const { count } = phewasCatalogSummary;
        return `${count} ${count === 1 ? 'entry' : 'entries'}`;
      }}
      chipText="Genetic Associations"
    />
  );
}

Summary.fragments = {
  PheWASCatalogSummary: PHEWAS_CATALOG_SUMMARY,
};

export default Summary;
