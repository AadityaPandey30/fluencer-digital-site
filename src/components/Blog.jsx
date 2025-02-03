import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; // Import useParams to get the blog ID
import axios from "axios";
import Loader2 from "./Loader2";
import { Helmet } from "react-helmet";

const Blog = () => {
    const { id } = useParams(); // Extract the ID from the URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`https://fluencerblogbackend.azurewebsites.net/api/blogs/${id}`);
                setBlog(response.data);
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false); // Stop loading after fetch
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) {
        return (
            <div className="text-white text-center text-xl mt-10 relative pt-24">
                <Loader2 />
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="text-white text-center text-xl mt-10">
                <Loader2 />
            </div>
        );
    }

    return (
        <>
        <Helmet>
        <title>Detailed Blog</title>
        <meta name="description" content={blog.blog_title} />
      </Helmet>
        <div className="px-[4%] md:px-[12%] py-[8%] m-auto">
            {/* Blog Header */}
            <div className="flex flex-col items-center gap-3 self-stretch">
                <span className="font-bold text-[24px] leading-[34px] text-center text-[#ed1c24]">
                    BLOG
                </span>
                <span className="font-bold text-[34px] md:text-[64px] leading-[55px] md:leading-[72px] text-center capitalize text-white">
                    {blog.blog_title}
                </span>
            </div>

            {/* Blog Image */}
            {blog.image ? (
                <img
                    src={blog.image} // Use the correct URL directly
                    alt={`${blog.blog_title} - Fluencer Blogs`}
                    className="w-full md:h-[80vh] m-auto py-10 rounded-lg object-cover"
                />
            ) : (
                <div className="w-full md:h-[80vh] m-auto py-10 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">No Image Available</span>
                </div>
            )}

            {/* Blog Content */}
            <div
                className="text-white r-content"
                dangerouslySetInnerHTML={{ __html: blog.blog_content }}
            ></div>

            {/* Footer Section */}
            <div className="md:flex items-center gap-20 bg-[#060606] p-10 rounded-[20px] mt-[8%] border border-solid border-neutral-800">
                <div className="flex flex-col gap-2 md:gap-6 grow">
                    <span className="text-[#a6a6a6]">
                        Need help turning your idea into a successful MVP?
                    </span>
                    <span className="text-3xl text-white">
                        Let Fluencer Digital guide you through the process!
                    </span>
                </div>
                <div className="flex gap-4">
                    <Link to="/mainContact"><div className="flex justify-center items-center gap-2.5 bg-[#ed1c24] px-[3%] md:px-[25px] py-[2%] md:py-[15px] rounded-lg my-[4%] md:m-0 cursor-pointer">
                        <span className="font-semibold text-xl md:text-lg text-white">
                            Contact Us Today
                        </span>
                    </div></Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default Blog;
