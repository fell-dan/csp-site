import Navbar from "../components/navbar";

export default function Root() {
    return (
        <>
        <Navbar />
        <section className="section pt-0">
          <section className="hero is-primary">
            <div className="hero-body">
              <h1 className="title">Welcome to TinyCSP</h1>
              <h3 className="subtitle">Your Friendly Cloud Service Provider</h3>
            </div>
          </section>
        </section>
        <section className="section py-0">
          <div className="box">
            <h3 className="title">About Us</h3>
            <p>
              TinyCSP is a leading cloud service provider that specializes in
              managing the cloud infrastructure for its clients. With our
              state-of-the-art technology and expertise, we ensure that your cloud
              resources are optimized, secure, and scalable. Whether you are a
              small startup or a large enterprise, we offer a range of services
              tailored to meet your specific needs. From provisioning and
              monitoring to data backup and disaster recovery, we take care of all
              aspects of cloud management so that you can focus on your core
              business. Trust TinyCSP to handle your cloud infrastructure and
              experience the benefits of a reliable and efficient cloud service
              provider.
            </p>
            <br />
            <p>
              <a href="/about" className="button is-primary">
                Learn More
              </a>
            </p>
          </div>
        </section>
        <section className="section">
          <section className="hero is-info">
            <div className="hero-body">
              <h4 className="title">Our Services</h4>
              <h6 className="subtitle">What We Offer</h6>
            </div>
          </section>
        </section>
        <section className="section pt-0">
          <div className="grid">
            <div className="cell">
              <div className="box">
                <h5 className="title">Cloud Provisioning</h5>
                <p>
                  We offer cloud provisioning services to help you set up and
                  configure your cloud resources. Our experts will ensure that
                  your cloud infrastructure is deployed efficiently and according
                  to your requirements.
                </p>
              </div>
            </div>
            <div className="cell">
              <div className="box">
                <h5 className="title">Cloud Monitoring</h5>
                <p>
                  Our cloud monitoring services allow you to keep track of your
                  cloud resources in real-time. We provide detailed insights and
                  analytics to help you optimize your cloud infrastructure and
                  improve performance.
                </p>
              </div>
            </div>
            <div className="cell">
              <div className="box">
                <h5 className="title">Data Backup</h5>
                <p>
                  We offer data backup services to ensure that your critical data
                  is protected and recoverable in case of any disaster. Our
                  automated backup solutions provide peace of mind and data
                  security.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>TinyCSP</strong>
              <br />
              Copyright 2024
            </p>
          </div>
        </footer>
      </>
    );
  }