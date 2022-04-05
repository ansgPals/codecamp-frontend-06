import { getDate } from "../libraries/util";
import * as M from "./BestBoard.styles";
import { IBestBoardUIProps } from "./BestBoard.types";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function BestBoardUI(props: IBestBoardUIProps) {
  return (
    <div>
      <M.BackGround>
        <M.BestTitle>베스트 게시글</M.BestTitle>
        <M.BestContents>
          {props.data?.fetchBoardsOfTheBest.map((el: any) => (
            <M.Card key={el._id}>
              <Card
                sx={{
                  maxWidth: 300,
                  minWidth: 300,
                  maxHeight: 300,
                  minHeight: 300,
                  margin: 2,
                }}
              >
                <CardActionArea onClick={props.onClickBest} id={el._id}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/freeboard/호그.jpeg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      minHeight={25}
                      maxHeight={25}
                    >
                      {el.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      minHeight={38}
                      maxHeight={38}
                    >
                      {el.contents.slice(1, 30) + "...."}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <M.Profile></M.Profile>
                  <M.profileBox>
                    <M.Writer>{el.writer}</M.Writer>
                    <M.Create>{getDate(el.createdAt)}</M.Create>
                  </M.profileBox>
                  <Button
                    size="small"
                    color="primary"
                    id={el._id}
                    onClick={props.onClickJoahyo}
                  >
                    <M.Good />
                    {el.likeCount}
                  </Button>
                </CardActions>
              </Card>
            </M.Card>
          ))}
        </M.BestContents>
        <M.CatEnglish>
          <M.EnglishTitle>
            영어로 고양이에대해 하루한문장씩 알아봐요!!
          </M.EnglishTitle>
          <M.Fect>{props.catFect}</M.Fect>
        </M.CatEnglish>
      </M.BackGround>
    </div>
  );
}
