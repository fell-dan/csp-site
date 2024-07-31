import Navbar from "../components/navbar";

export default function Services() {
  return (
    <>
      <Navbar />
      <section className="section pt-0">
        <div className="box content">
          <h1 className="title">Services</h1>
          <p>
            <ul>
                <li>Cloud infrastructure management</li>
                <li>Monitoring and alerting</li>
                <li>Backup and disaster recovery</li>
                <li>Security and compliance</li>
                <li>Performance optimization</li>
                <li>Cost optimization</li>
                <li>24/7 technical support</li>
            </ul>
          </p>
        </div>
      </section>
    </>
  );
}
