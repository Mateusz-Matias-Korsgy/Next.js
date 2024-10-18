import React from "react";
// import MetaTags from "react-meta-tags";

const MetaTag = ({ pageTitle, description }) => {
  return (
    <>
      <>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
      </>
    </>
  );
};

export default MetaTag;
