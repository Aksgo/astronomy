'use client'

import React, { useEffect, useState } from 'react';
import blogs_data from './data';
import BlogCard from '@/app/Components/BlogCard';
import Image from 'next/image';
import { motion } from 'framer-motion';
import star from '../../../../public/star.png';

const BlogPage = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom Star Cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          zIndex: 1000,
        }}
      >
        <Image src={star} alt="Star Cursor" width={30} height={30} />
      </div>

      <motion.h1
        className="text-4xl font-bold mb-6 mt-20 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Our Blogs
      </motion.h1>

      <div className="mx-4 sm:mx-8 lg:mx-24">
        <div className="flex flex-wrap justify-center gap-6">
          {blogs_data.map((blog, index) => (
            <motion.div
              key={blog.title}
              className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <BlogCard
                title={blog.title}
                image={blog.img}
                disc={blog.desc}
                link={blog.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
