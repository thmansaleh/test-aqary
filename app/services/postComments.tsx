

export const postComments = async(postId:string)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    const comments= await response.json()
    return comments
}

