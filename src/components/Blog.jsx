import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the blog ID
import axios from "axios";

const Blog = () => {
    const { id } = useParams(); // Extract the ID from the URL
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://https://admin-fluencer-blogs-b6ewhacwgdeyh8fw.eastasia-01.azurewebsites.net/api/blogs/${id}`);
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
        <div className="px-[4%] md:px-[12%] py-[8%] m-auto">
            <div className="flex flex-col items-center gap-3 self-stretch">
                <span className="font-bold text-[24px] leading-[34px] text-center text-[#ed1c24]">
                    BLOG
                </span>
                <span className="font-bold text-[34px] md:text-[64px] leading-[55px] md:leading-[72px] text-center capitalize text-white">
                    {blog.blog_title}
                </span>
            </div>

            <img src={`http://https://admin-fluencer-blogs-b6ewhacwgdeyh8fw.eastasia-01.azurewebsites.net/${blog.image}`} alt="Fluencer Blogs" className="w-full md:h-[80vh] m-auto py-10 rounded-lg" />

            {/* Blog Content */}
            {/* <div className="text-white px-10 py-6">{blog.blog_content}</div> */}
            <div
                className="text-white"
                dangerouslySetInnerHTML={{ __html: blog.blog_content }}
            ></div>


            {/* Footer Section */}
            <div className="md:flex items-center gap-20 bg-[#060606] p-10 rounded-[20px] mt-[8%] border border-solid border-neutral-800">
                <div className="flex flex-col gap-2 md:gap-6 grow">
                    <span className="text-[#a6a6a6]">
                        Need help turning your idea into a successful MVP?
                    </span>
                    <span className="text-3xl text-white">Let Fluencer
                        Digital guide you through the process!</span>
                </div>
                <div className="flex gap-4">
                    <div className="flex justify-center items-center gap-2.5 bg-[#ed1c24] px-[3%] md:px-[25px] py-[2%] md:py-[15px] rounded-lg my-[4%] md:m-0">
                        <span className="font-semibold text-xl md:text-lg text-white">
                            Contact Us Today
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
