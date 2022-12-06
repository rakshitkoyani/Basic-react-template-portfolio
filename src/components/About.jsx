

function About() {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
    <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
        <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
        </div>
        <div className="row">
            <div className="col-lg-4 ms-auto"><p className="lead">I'm Creative Web Developer. I would like to learn cutting edge technologies, building small projects, I enjoy turning complex problems into simple, beautiful and intuitive designs.</p></div>
            <div className="col-lg-4 me-auto"><p className="lead">My goal is to convey your message and identity in the most creative way possible.</p></div>
        </div>
        <div className="text-center mt-4">
            <a className="btn btn-xl btn-outline-light">
                <i className="fas fa-download me-2"></i>
                Free Download!
            </a>
        </div>
    </div>
</section>
    )
}

export default About