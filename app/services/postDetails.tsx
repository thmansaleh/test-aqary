
// export const postDetails = async(postId:string )=>{
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     const details= await response.json()
//     return details
// }

export const postDetails = async (postId: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post details');
    }
    const post = await response.json();
    return post;
  };
  