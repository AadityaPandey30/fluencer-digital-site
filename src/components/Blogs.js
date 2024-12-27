import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center gap-3 self-stretch max-w-4xl mx-auto mt-[14%] mb-[8%]">
        <span className="font-bold text-[20px] md:text-[24px] md:leading-[34px] text-center text-[#ed1c24]">
          BLOGS
        </span>
        <span className="font-bold text-[32px] md:text-[64px] leading-[35px] md:leading-[72px] text-center capitalize text-white">
          Ideas & insights from Fluencer Digital
        </span>
      </div>

      <div className="blogs grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="flex flex-col items-center gap-6 bg-[#131313] p-4 md:p-10 rounded-2xl border-2 border-solid"
            >
              <div className="bg-[#d9d9d9] w-full h-48"></div>
              <div className="flex flex-col gap-6 self-stretch grow">
                <div className="flex flex-col gap-2 self-stretch">
                  <span className="font-bold text-[28px] leading-[34px] text-white">
                    {blog.blog_title}
                  </span>
                  <span className="font-normal text-[24px] leading-[34px] text-[#bebebe]">
                    {blog.blog_content.slice(0, 100)}...
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-lg">
                  <Link
                    to={`/blog/${blog._id}`} // Navigate to the blog page with the ID
                    className="font-semibold text-[24px] leading-[28px] text-[#ed1c24]"
                  >
                    Read Full Blog
                  </Link>
                  <svg
                    className="w-6 h-3 text-[#ed1c24]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-white text-center text-xl mt-10">
            No blogs found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
