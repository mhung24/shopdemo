import React, { useEffect, useState } from "react";
import ApiService from "../Api/ApiService";
import "./NextDataProduct.css";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const NextDataProduct = (props) => {
  const { onChoosenData } = props;

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const [renderPage, setRenderPage] = useState({
    limit: 1,
    total: 0,
  });

  const number = Math.round(renderPage?.total / renderPage?.limit);

  const loadData = async () => {
    const res = await ApiService.ApiProduct();
    const { limit, total } = res.data;
    if (res.status === 200) {
      setRenderPage({
        limit,
        total,
      });
    }
  };

  let array = [
    {
      number: 1,
      skip: 0,
    },
  ];

  let a = 0;

  for (let i = 2; i <= number; i++) {
    array = [...array, { number: i, skip: (a += 10) }];
  }

  const loadNumberPage = (i) => {
    array.forEach((item) => {
      if (item.number === i) {
        onChoosenData(item.skip);
      }
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  loadNumberPage(page);

  return (
    <>
      <Stack spacing={2}>
        <Pagination
          count={number}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Stack>
    </>
  );
};
