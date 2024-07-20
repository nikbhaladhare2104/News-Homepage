import React from 'react'

const Blogs = () => {
  return (
      <div className="blogs">
          <div className="blog">
              <img src="/image-retro-pcs.jpg" alt="Retro-PC" />
              <div className="blog-right">
                  <p className="blog-right-title">01</p>
                  <p className="blog-right-desc">Reviving Retro PCs</p>
                  <p className="blog-right-info">What happens when old PCs are given modern upgrades?</p>
              </div>
          </div>
          <div className="blog">
              <img src="/image-top-laptops.jpg" alt="Laptop" />
              <div className="blog-right">
                  <p className="blog-right-title">02</p>
                  <p className="blog-right-desc">Top 10 Laptops of 2022</p>
                  <p className="blog-right-info">Our best picks for various needs and budgets.</p>

              </div>
          </div>

          <div className="blog">
              <img src="/image-gaming-growth.jpg" alt="Gaming" />

              <div className="blog-right">
                  <p className="blog-right-title">03</p>
                  <p className="blog-right-desc">The Growth of Gaming</p>
                  <p className="blog-right-info">How the pandemic has sparked fresh opportunities.</p>
              </div>
          </div>
          <div className="blog">
              <img src="/image-gaming-growth.jpg" alt="Gaming" />

              <div className="blog-right">
                  <p className="blog-right-title">03</p>
                  <p className="blog-right-desc">The Growth of Gaming</p>
                  <p className="blog-right-info">How the pandemic has sparked fresh opportunities.</p>
              </div>
          </div>
        
    </div>
  )
}

export default Blogs