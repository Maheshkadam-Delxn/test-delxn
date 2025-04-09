'use client';

import Image from 'next/image';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business Process Automation",
      excerpt: "Explore how artificial intelligence is revolutionizing business workflows and creating new opportunities for efficiency and innovation.",
      image: "/placeholder/800/500",
      date: "Feb 15, 2025",
      author: "Alex Johnson",
      category: "Artificial Intelligence",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Securing Your Cloud Infrastructure: Best Practices for 2025",
      excerpt: "Learn the latest security measures to protect your cloud-based systems and data from emerging threats in today's complex digital landscape.",
      image: "/placeholder/800/500",
      date: "Feb 8, 2025",
      author: "Maria Chen",
      category: "Cloud Security",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Mobile App Development Trends That Will Dominate This Year",
      excerpt: "Stay ahead of the curve with these cutting-edge mobile development approaches that are reshaping how users interact with their devices.",
      image: "/placeholder/800/500",
      date: "Jan 29, 2025",
      author: "David Kumar",
      category: "Mobile Development",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "How Digital Transformation Is Reshaping Customer Experiences",
      excerpt: "Discover how businesses are leveraging technology to create meaningful, personalized customer journeys in the digital age.",
      image: "/placeholder/800/500",
      date: "Jan 18, 2025",
      author: "Sarah Williams",
      category: "Digital Strategy",
      readTime: "8 min read"
    }
  ];

  const featuredPost = {
    id: 5,
    title: "The Comprehensive Guide to Choosing the Right IT Solutions for Your Business",
    excerpt: "Navigating the complex landscape of IT solutions can be overwhelming. In this comprehensive guide, we break down the key considerations for selecting technology that aligns with your business objectives, budget constraints, and future growth plans. From cloud infrastructure to custom software development, learn how to make informed decisions that drive long-term success.",
    image: "/placeholder/1200/800",
    date: "Feb 22, 2025",
    author: "Robert Zhang",
    category: "IT Strategy",
    readTime: "12 min read"
  };

  const categories = [
    "Artificial Intelligence",
    "Cloud Computing",
    "Cybersecurity",
    "Digital Transformation",
    "Software Development"
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block rounded-full bg-indigo-100 dark:bg-indigo-900 px-4 py-2 mb-4">
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Our Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Latest From Our Blog</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Stay updated with the latest trends, best practices, and insights from our technology experts to help your business thrive in the digital era.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <User className="w-4 h-4 mr-1" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-1" />
                    <span>{featuredPost.category}</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xs mr-2">
                      {post.author.split(' ').map(name => name[0]).join('')}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{post.author}</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Categories and Newsletter */}
        {/* <div className="grid md:grid-cols-2 gap-8 mb-8"> */}
          {/* Categories */}
          {/* <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Popular Categories</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 text-sm hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {category}
                </a>
              ))}
            </div>
          </div> */}

          {/* Newsletter */}
          {/* <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl p-8 text-white shadow-md">
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="mb-6 opacity-90">Get the latest industry insights and our exclusive content delivered to your inbox.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none"
              />
              <button type="submit" className="bg-indigo-800 hover:bg-indigo-900 px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      {/* </div> */}
    </section>
  );
};

export default BlogSection;