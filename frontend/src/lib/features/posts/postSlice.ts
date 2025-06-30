import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post{
    _id?: string;
    title:string;
    content:string;
    createdAt?:string;
    updatedAt?:string;
}

interface PostsState{
    posts:Post[];
    loading: boolean;
    error: string | null;
}

const initialState: PostsState = {
    posts: [],
    loading: false,
    error: null
}

const API_URL = 'http://localhost:5000/api/posts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async(_,{
    rejectWithValue
})=>{
    try {
        const response = await fetch(API_URL)
        if(!response.ok){
            throw new Error('Failed to fetch posts')
        }
        const responseData = await response.json();
        return responseData.data as Post[]
    } catch (error: any) {
        return rejectWithValue(error.message)
    }
})

export const addPost = createAsyncThunk('posts/addPost', async(
    newPost:{
        title: string; content: string
    }, {rejectWithValue}
)=>{
    try {
        const response = await fetch(API_URL,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(newPost),
        })
        if(!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to add post');
        }
        const responseData = await response.json();
        return responseData.data as Post
    } catch (error: any) {
        return rejectWithValue(error.message)
    }
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchPosts.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>)=>{
            state.loading = false
            state.posts=action.payload
        })
        .addCase(fetchPosts.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload as string
        })
        .addCase(addPost.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        .addCase(addPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.loading = false
        state.posts.push(action.payload) // Add the new post to the array
      })
      .addCase(addPost.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
    }
})

export default postSlice.reducer