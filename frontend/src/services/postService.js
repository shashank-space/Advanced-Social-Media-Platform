import api from "./api";


// Get all posts
export const getPosts = async () => {

  const res = await api.get("/posts");

  return res.data;

};



// Create new post
export const createPost = async (postData) => {

  const res = await api.post(
    "/posts",
    postData
  );

  return res.data;

};



// Delete post
export const deletePost = async (id) => {

  const res = await api.delete(
    `/posts/${id}`
  );

  return res.data;

};



// Like / Unlike post
export const likePost = async (id) => {

  const res = await api.patch(
    `/posts/${id}/like`
  );

  return res.data;

};



// Add comment
export const addComment = async (
  postId,
  comment
)=>{

  const res = await api.post(
    `/posts/${postId}/comments`,
    {
      text: comment
    }
  );

  return res.data;

};



// Get comments
export const getComments = async (
  postId
)=>{

  const res = await api.get(
    `/posts/${postId}/comments`
  );

  return res.data;

};



// Upload media post
export const uploadPostMedia = async(
  formData
)=>{

  const res = await api.post(
    "/posts/upload",
    formData,
    {
      headers:{
        "Content-Type":
        "multipart/form-data"
      }
    }
  );


  return res.data;

};