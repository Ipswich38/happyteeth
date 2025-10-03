export function BlogPage() {
  const blogPosts = [
    {
      title: '5 Tips for Better Oral Hygiene',
      excerpt: 'Learn the essential habits that will keep your teeth and gums healthy for life.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Prevention'
    },
    {
      title: 'Understanding Dental Implants',
      excerpt: 'Everything you need to know about dental implants and how they can restore your smile.',
      date: 'March 10, 2024',
      readTime: '8 min read',
      category: 'Treatment'
    },
    {
      title: 'The Importance of Regular Checkups',
      excerpt: 'Why regular dental visits are crucial for maintaining optimal oral health.',
      date: 'March 5, 2024',
      readTime: '4 min read',
      category: 'Prevention'
    },
    {
      title: 'Teeth Whitening: What You Should Know',
      excerpt: 'A comprehensive guide to professional teeth whitening options and what to expect.',
      date: 'February 28, 2024',
      readTime: '6 min read',
      category: 'Cosmetic'
    },
    {
      title: 'Caring for Your Child\'s Teeth',
      excerpt: 'Essential tips for parents to ensure their children develop healthy dental habits.',
      date: 'February 20, 2024',
      readTime: '7 min read',
      category: 'Pediatric'
    },
    {
      title: 'Modern Orthodontic Options',
      excerpt: 'Explore the latest in orthodontic treatments, from traditional braces to Invisalign.',
      date: 'February 15, 2024',
      readTime: '9 min read',
      category: 'Orthodontics'
    }
  ];

  const categories = ['All', 'Prevention', 'Treatment', 'Cosmetic', 'Pediatric', 'Orthodontics'];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dental Health Blog</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest tips, treatments, and insights for optimal oral health
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-4xl">📝</div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest dental health tips and news
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}