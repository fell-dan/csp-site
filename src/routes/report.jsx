import Navbar from "../components/navbar";

export default function Report() {
  return (
    <>
      <Navbar />
      <section className="section pt-0">
        <div className="box content">
          <h1 className="title">Report an issue</h1>
          <p>
            To report an issue, please use the form below or contact us at{" "}
            <a href="mailto:" className="has-text-primary">Email Here Please Fix Tom</a>.
          </p>
        </div>
      </section>
    </>
  );
}
