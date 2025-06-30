import { addPost } from "@/lib/features/posts/postSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useState } from "react";

export default function AddPostForm(){
    const dispatch = useAppDispatch();
    const {loading, error} = useAppSelector((state)=>state.posts);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault();
        if(!title || !content){
            alert('Please fill all fields');
            return;
        }
        await dispatch(addPost({title, content}));
        setTitle('');
        setContent('');
    };
    return (
        <form onSubmit={handleSubmit} className="mb-8 p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4">Add New Post</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
          Title:
        </label>
        <input
          type="text"
          id="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
          Content:
        </label>
        <textarea
          id="content"
          rows={5}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={loading}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add Post'}
      </button>
      {error && <p className="text-red-500 text-sm mt-2">Error: {error}</p>}
    </form>
    );
}