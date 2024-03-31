import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FQ from "./FQ.json";
import { Helmet } from "react-helmet";

export default function FAQ() {

  const data = FQ.data;

  return (
    <div>
      <Helmet>
        <title>FAQ</title>
        <meta
          name="description"
          content="Frequently Asked Questions (FAQ) for Sociwave."
        />
      </Helmet>
      <Navbar />
      <section style={{ margin: "105px 20px 20px 20px" }}>
        <center>
          <h2>Frequently Asked Questions (FAQ)</h2>
        </center>

        <div className="accordion" id="accordionExample">
          {data.map((item, index) => {
            const isFirstAccordion = index === 0;

            return (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${item.collapse}`}
                    aria-expanded={isFirstAccordion ? "true" : "false"}
                    aria-controls={item.collapse}
                  >
                    {item.heading}
                  </button>
                </h2>
                <div
                  id={item.collapse}
                  className={`accordion-collapse collapse ${
                    isFirstAccordion ? "show" : ""
                  }`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}
