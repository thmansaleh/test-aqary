

import { Box, Typography } from "@mui/material";
import CommentsSection from "@/app/components/Comments";
import PostDetails from "@/app/components/PostDetails";
import { postComments } from "@/app/services/postComments";
import { postDetails } from "@/app/services/postDetails";
import { Metadata } from "next";

type postType = {
  id: string;
  title: string;
  content: string;
  body: string;
};

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

type PageProps = {
  params: {
    postId: string;
  };
};


export async function generateMetadata(
  { params }: PageProps,
): Promise<Metadata> {
  const postId = params.postId
  const post: postType = await postDetails(postId);
 
  return {
    title: post.title,
  
  }
}

export default async function Page({ params }: PageProps) {
  const { postId } = params;

  try {
    const post: postType = await postDetails(postId);
    const comments: Comment[] = await postComments(postId);

    return (
      <Box maxWidth="600px" mx="auto" p={4}>
        <PostDetails post={post} />
        <CommentsSection comments={comments} />
      </Box>
    );
  } catch (error) {
    return (
      <Box maxWidth="600px" mx="auto" p={4}>
        <Typography variant="h6" color="error">
          Failed to fetch data. Please try again later.
        </Typography>
      </Box>
    );
  }
}

