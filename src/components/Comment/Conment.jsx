import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiService from "../Api/ApiService";
import avata from "../../assets/images/no_avata.png";
import "./Comment.css";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";

export const Conment = () => {
  const { id: idProduct } = useParams();
  const [comments, setComments] = useState({
    reviews: [],
  });

  const [searchComments, setSearchComments] = useState({
    reviews: [],
  });
  const [mediumComment, setMediumComment] = useState(0);
  const [lengthCommnet, setLengthComment] = useState(1);
  const [activeSearchComment, setActiveSearchComment] = useState(0);

  const loadData = async () => {
    const dataProduct = await ApiService.InforDataProduct(idProduct);
    const { id, reviews } = dataProduct.data;

    setMediumComment(reviews.length);
    if (dataProduct.status === 200) {
      setComments({
        reviews,
      });

      setSearchComments({
        reviews,
      });
    }

    let a = 0;
    dataProduct.data.reviews.forEach((element) => {
      a += element.rating;
    });

    setLengthComment(Math.ceil(dataProduct.data.reviews.length / 3));

    setMediumComment(parseFloat((a / reviews.length).toFixed(1)));
  };

  useEffect(() => {
    if (idProduct) {
      loadData();
    }
  }, []);

  const selectStar = (key) => {
    if (key !== "all") {
      const reviews = searchComments.reviews.filter((i) => i.rating === key);

      setComments({ reviews });
    } else {
      const reviews = searchComments.reviews;

      setComments({ reviews });
    }
  };

  const setId = (index) => {
    setActiveSearchComment(index);
  };

  const star = [
    {
      key: "all",
      title: "Tất cả",
    },

    {
      key: 5,
      title: "5 sao",
    },

    {
      key: 4,
      title: "4 sao",
    },

    {
      key: 3,
      title: "3 sao",
    },

    {
      key: 2,
      title: "2 sao",
    },
    {
      key: 1,
      title: "1 sao",
    },
  ];

  const test = (item) => {
    console.log(item);
  };
  return (
    <>
      <div className="search_comment">
        <div className="tbl_star">
          <p>{mediumComment} trên 5</p>

          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={3.0}
              precision={0.5}
              readOnly
              className="star"
              size="small"
            />
          </Stack>
        </div>

        <div className="flex star_wrap">
          {star.map((item, index) => (
            <p
              className={
                index === activeSearchComment ? "active_search-comment" : ""
              }
              key={index}
              onClick={() => {
                selectStar(item.key);
                setId(index);
              }}
              // key={index}
            >
              {item.title}
            </p>
          ))}
        </div>
      </div>
      <div className="comment_ct">
        {comments.reviews.length !== 0 ? (
          comments.reviews?.map((item, index) => (
            <div className="flex items-start comment_wrap ">
              <div key={index} className="mr-2">
                <img src={avata} alt="" className="comments_avata" />
              </div>

              <div>
                <p className="commenter_name">{item.reviewerName}</p>
                <Box sx={{ "& > legend": { mt: 2 } }}>
                  <Rating
                    name="read-only"
                    value={item.rating}
                    readOnly
                    size="small"
                    defaultChecked
                  />
                </Box>

                <p className="comment_date">{item.date.slice(0, 19)}</p>

                <p className="is_comment">{item.comment}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no_comment">Không có comment nào !!</p>
        )}
      </div>

      <div className="flex justify-center mt-4">
        <Stack spacing={2}>
          <Pagination count={lengthCommnet} color="primary" />
        </Stack>
      </div>
    </>
  );
};
