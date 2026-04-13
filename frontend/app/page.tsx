export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Learn Without Limits
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover thousands of courses from expert instructors. Start learning today and unlock your potential.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Explore Courses
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all">
              Become Instructor
            </button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
          <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-4xl font-bold text-blue-400 mb-2">10,000+</div>
            <div className="text-gray-300">Active Students</div>
          </div>
          <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-gray-300">Expert Instructors</div>
          </div>
          <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-4xl font-bold text-emerald-400 mb-2">1,200+</div>
            <div className="text-gray-300">Quality Courses</div>
          </div>
        </section>

        {/* Featured Courses Preview */}
        <section className="py-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all group">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    Course Title {i}
                  </h3>
                  <p className="text-gray-400 mb-4">Learn the fundamentals and advanced concepts</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">$49</span>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
