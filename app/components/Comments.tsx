import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

function CommentsSection({ comments }: { comments: Comment[] }) {
  if (!comments || comments.length === 0) {
    return <Typography variant="h6">No comments available</Typography>;
  }

  return (
    <>
      <Typography sx={{marginTop:'20px',fontWeight:'500'}} variant="h6" gutterBottom>
        {`Comments (${comments.length})`}
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {comments.map((comment) => (
          <ListItem key={comment.id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={comment.name} src={`/static/images/avatar/${comment.id}.jpg`} />
            </ListItemAvatar>
            <ListItemText 
              primary={
                <Typography
                  sx={{ display: 'block' , fontWeight:'500'}}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  
                >
                  {comment.name}
                </Typography>
              }
              secondary={
                <>
                  <Typography
                    sx={{ display: 'block' ,fontWeight:'400'}}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {comment.email}
                  </Typography>
                  {comment.body}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default CommentsSection;
