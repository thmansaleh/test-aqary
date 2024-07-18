import { Typography, CardActions, Card, CardActionArea, CardContent, Button } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

type SinglePostProps = {
  id: number;
  title: string;
  body: string;
};

const SinglePost: FC<SinglePostProps> = ({ title, id, body }) => {
  const href = `/posts/${id}`;

  return (
    <Card sx={{ width: '200px' , height:'auto'}}>
      <CardActionArea>
        <CardContent>
          <Typography
            sx={{
              fontSize: '0.9rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              lineClamp: 2,
            }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {title}
          </Typography>
      
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={href} passHref>
          <Button size="small" color="primary" sx={{ textDecoration: 'none' }}>
            Show
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default SinglePost;
