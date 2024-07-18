import { Typography, Box, Divider } from "@mui/material";

type Post = {
  id: string;
  title: string;
  body: string;
};

function PostDetails({ post }: { post: Post }) {
  if (!post) {
    return <Typography variant="h6">Post not found</Typography>;
  }

  return <>
    <Box sx={{ textAlign: 'center', margin: 2 }}>
      <Typography variant="h6" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {post.body}
      </Typography>
    </Box>
    <Divider  />

  
  </>
}

export default PostDetails;
