'use client'

import AddPostForm from "@/components/AddPostForm"
import { fetchPosts } from "@/lib/features/posts/postSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { useEffect, useState } from "react"

export default function Home() {
  const dispatch = useAppDispatch()
  const { posts, loading, error } = useAppSelector((state) => state.posts)
  const [isClient, setIsClient] = useState(false)

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient) {
      dispatch(fetchPosts())
    }
  }, [dispatch, isClient])

  // Show loading during hydration
  if (!isClient) {
    return <div className="p-4">Loading...</div>
  }

  if (loading) {
    return <div className="p-4">Loading posts....</div>
  }

  if (error) {
    return <div className="p-4 text-red-600">Error : {error}</div>
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <AddPostForm />

      <div className="mt-8">
        {posts.length === 0 ? (<p>No posts available</p>) : (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post._id} className="border p-4 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold">{post.title}</h2>
                <p className="mt-2 text-gray-700">{post.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}