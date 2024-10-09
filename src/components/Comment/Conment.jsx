import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiService from "../Api/ApiService";
import avata from "../../assets/images/no_avata.png";
import "./Comment.css";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

export const Conment = () => {
  const { id: idProduct } = useParams();
  const [comments, setComments] = useState({
    id: null,
    reviews: [],
  });

  const [mediumComment, setMediumComment] = useState(0);
  const loadData = async () => {
    const dataProduct = await ApiService.InforDataProduct(idProduct);
    const { id, reviews } = dataProduct.data;
    setMediumComment(reviews.length);
    if (dataProduct.status === 200) {
      setComments({
        id,
        reviews,
      });
    }
    let a = 0;
    dataProduct.data.reviews.forEach((element) => {
      a += element.rating;
    });

    setMediumComment(parseFloat((a / reviews.length).toFixed(1)));
  };

  console.log(typeof mediumComment);

  useEffect(() => {
    if (idProduct) {
      loadData();
    }
  }, []);
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
          <p>Tất cả</p>
          <p>5 sao</p>
          <p>4 sao</p>
          <p>3 sao</p>
          <p>2 sao</p>
          <p>1 sao</p>
        </div>
      </div>
      {comments.reviews?.map((item, index) => (
        <div className="flex items-start comment_wrap">
          <div key={index} className="mr-2">
            <img src={avata} alt="" className="comments_avata" />
          </div>

          <div>
            <p className="commenter_name">{item.reviewerName}</p>
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={item.rating}
                precision={0.5}
                readOnly
                className="star"
                size="small"
              />
            </Stack>

            <p className="comment_date">{item.date.slice(0, 19)}</p>

            <p className="is_comment">{item.comment}</p>
          </div>
        </div>
      ))}
    </>
  );
};
