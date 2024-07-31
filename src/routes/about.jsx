import Navbar from "../components/navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="section pt-0">
        <div className="box content">
          <h1 className="title">About</h1>
          <p>
            TinyCSP is a cloud service provider that offers a wide range of
            services to help you manage your cloud infrastructure. Our services
            include cloud infrastructure management, monitoring and alerting,
            backup and disaster recovery, security and compliance, performance
            optimization, cost optimization, and 24/7 technical support.
          </p>
        </div>
      </section>
    </>
  );
}
