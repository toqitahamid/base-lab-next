"use client";

import React, { useEffect, useState, ReactNode } from 'react';

interface DataFetcherProps {
  url: string;
  children: (data: any) => ReactNode;
}

const DataFetcher: React.FC<DataFetcherProps> = ({ url, children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [url]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <>{children(data)}</>;
};

export default DataFetcher;