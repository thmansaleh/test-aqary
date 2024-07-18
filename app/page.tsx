import { posts } from '@/app/services/posts';
import SinglePost from './components/SinglePost';
import { Container, Box } from '@mui/material';

export default async function Home() {
  const data = await posts();

  type BlogTypes = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  return (
    <Container>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center',alignItems:'center'}}>
        {data.map((blog: BlogTypes) => (
          <Box key={blog.id} sx={{   boxSizing: 'border-box', padding: '8px' }}>
            <SinglePost title={blog.title} id={blog.id} body={blog.body}/>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
