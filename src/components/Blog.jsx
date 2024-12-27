import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the blog ID
import axios from "axios";

const Blog = () => {
  const { id } = useParams(); // Extract the ID from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div className="text-white text-center text-xl mt-10">Loading...</div>;
  }

  return (
    <div className="my-[14%]">
      <div className="flex flex-col items-center gap-3 self-stretch">
        <span className="font-bold text-[24px] leading-[34px] text-center text-[#ed1c24]">
          BLOG
        </span>
        <span className="font-bold text-[64px] leading-[72px] text-center capitalize text-white">
          {blog.blog_title}
        </span>
      </div>

      {/* Blog Content */}
      <div className="text-white px-10 py-6">{blog.blog_content}</div>

      {/* Footer Section */}
      <div className="flex items-center gap-20 bg-[#060606] p-10 rounded-[20px] border border-solid border-neutral-800">
        <div className="flex flex-col gap-6 grow">
          <span>
            Need help turning your idea into a successful MVP?
          </span>
          <span className="text-3xl text-white">Let Fluencer
          Digital guide you through the process!</span>
        </div>
        <div className="flex gap-4">
          <div className="flex justify-center items-center gap-2.5 bg-[#ed1c24] px-[25px] py-[15px] rounded-lg">
            <span className="font-semibold text-xl text-white">
              Contact Us Today
            </span>
            <svg className="w-5 h-2.5 text-white"></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
