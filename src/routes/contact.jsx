import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="section pt-0">
        <div className="box content">
          <h1 className="title">Contact</h1>
          <p>
            For inquiries, please contact us at{" "}
            <a href="mailto:" className="has-text-primary">Email Here Please Fix Tom</a>.
          </p>
        </div>
      </section>
    </>
  );
}
