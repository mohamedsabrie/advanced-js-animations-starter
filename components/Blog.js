function Blog() {
  return (
    <article className="blog section max-width-container">
      <section className="blog">
        <h2 className="chapter">
          <span>001</span> Blog
        </h2>
        <div className="blog__post with-parallax">
          <div className="blog__image-container">
            <div className="blog__image-mask"></div>
            <img className="blog__image" src="/images/7.jpg" alt="" />
          </div>
          <div className="blog__text">
            <p className="blog__date">
                  30.12.2021
            </p>
            <h3>
              We Hope Beautiful Moments Never End
            </h3>

          </div>
        </div>
      </section>
    </article>
  );
}

export default Blog;
