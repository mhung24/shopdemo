import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "./Star.css";

export const Star = () => {
  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        readOnly
        className="star"
      />
    </Stack>
  );
};
