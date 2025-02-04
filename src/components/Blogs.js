import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader2 from "./Loader2";
import { Helmet } from "react-helmet";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state for better user experience

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://fluencerblogbackend.azurewebsites.net/api/blogs"
        );
        console.log("Fetched Blogs:", response.data); // Debugging log
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Stop loading once the fetch is complete
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Blogs - Fluencer Digital</title>
        <meta name="description" content="Stay updated with Fluencer Digital&apos;s blogs on technology, MVP development, and startup success. Get expert insights and innovative ideas to fuel your growth." />
      </Helmet>
      <div className="flex flex-col items-center gap-3 self-stretch max-w-4xl mx-auto mt-[14%] mb-[8%]">
        <span className="font-bold text-[20px] md:text-[24px] md:leading-[34px] text-center text-[#d6696d]">
          BLOGS
        </span>
        <span className="font-bold text-[32px] md:text-[64px] leading-[35px] md:leading-[72px] text-center capitalize text-white">
          Ideas & insights from Fluencer Digital
        </span>
      </div>

      <div className="blogs grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {loading ? (
          // Show loader while data is being fetched
          <div className="text-white text-center text-xl mt-10 relative left-[37%] md:left-[91%] lg:left-[93%]">
            <Loader2 />
          </div>
        ) : blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="flex flex-col items-center gap-6 bg-[#131313] p-4 md:p-10 rounded-2xl border-2 border-solid"
            >
              {blog.image ? (
                <img
                  src={blog.image} // Use the correct image URL directly
                  className="w-full h-2/3 max-h-[300px] rounded-md"
                  alt={`${blog.blog_title} - Fluencer Blogs`}
                />
              ) : (
                <div className="w-full h-2/3 max-h-[300px] bg-gray-700 rounded-md flex items-center justify-center">
                  <span className="text-gray-400">No Image Available</span>
                </div>
              )}

              <div className="flex flex-col gap-6 self-stretch grow">
                <div className="flex flex-col gap-2 self-stretch">
                  <span className="font-bold text-[28px] leading-[34px] text-white">
                    {blog.blog_title}
                  </span>
                  <span
                    className="text-[#bebebe]"
                    dangerouslySetInnerHTML={{
                      __html: blog.blog_content.slice(0, 150) + "...",
                    }}
                  ></span>
                </div>
                <div className="flex items-center gap-2.5 rounded-lg">
                  <Link
                    to={`/blog/${blog._id}`} // Navigate to the blog page with the ID
                    className="font-semibold text-[24px] leading-[28px] text-[#ed1c24]"
                  >
                    Read Full Blog →
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          // Show a message if no blogs are available
          <div className="text-white text-center text-xl w-full">
            <Loader2 />
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
