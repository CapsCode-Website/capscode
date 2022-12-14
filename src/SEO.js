import React from "react";
import { Helmet } from "react-helmet-async";
export default function SEO({ title, description, name, type }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      {/*og:type (Use article for articles and website for the rest of your pages.) The type of object you’re sharing. (e.g., article, website, etc.) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* og:url - This should be the URL of the current page. */}
      <meta property="og:url" content="" />
      <meta property="og:image" content="./components/Assets/capscode.png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="640" />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:url" content="" />
      <meta
        property="twitter:image"
        content="./components/Assets/capscode.png"
      />
      {/* End Twitter tags */}
    </Helmet>
  );
}
