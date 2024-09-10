import React, { useEffect, useState } from "react";
import ApiService from "../Api/ApiService";
import "./NextDataProduct.css";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const NextDataProduct = () => {
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

  useEffect(() => {
    loadData();
  }, []);
  return (
    <Stack spacing={2}>
      <Pagination count={number} color="primary" />
    </Stack>
  );
};
