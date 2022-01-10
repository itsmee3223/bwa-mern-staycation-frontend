import React from "react";

import ReactHtmlParser from "react-html-parser";
export default function PageDetailDescription({ data }) {
  return (
    <main>
      {ReactHtmlParser(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.featureId.length === 0
          ? "Tidak Ada Feture"
          : data.featureId.map((feature, index) => {
              return (
                <div
                  className="col-3"
                  key={`feture-${index}`}
                  style={{ marginBottom: 20 }}
                >
                  <img
                    src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
                    alt={feature.name}
                    className="d-block mb-2"
                    width="38"
                  />
                  <span>{feature.qty}</span>{" "}
                  <span className="text-gray-500 font-weight-light">
                    {feature.name}
                  </span>
                </div>
              );
            })}
      </div>
    </main>
  );
}
