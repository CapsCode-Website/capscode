import React from "react";
import { Helmet } from "react-helmet-async";
export default function SEO({ title, description, name, type, link }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="title" content={title}></meta>
      <meta name="description" content={description} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      {/*og:type (Use article for articles and website for the rest of your pages.) The type of object you’re sharing. (e.g., article, website, etc.) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* og:url - This should be the URL of the current page. */}
      <meta property="og:url" content={window.location.href} />

      {/* if og:image url is https, then use :secure_url else dont */}
      <meta
        property="og:image:url"
        content={`https://capscode-website.github.io/${link?.replaceAll(
          "/index.md",
          ""
        )}/og_image.png`}
      />
      <meta
        property="og:image:secure_url"
        content={`https://capscode-website.github.io/${link?.replaceAll(
          "/index.md",
          ""
        )}/og_image.png`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content="CapsCode" />
      <meta name="publish_date" property="og:publish_date" content="" />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:url" content={window.location.href} />
      <meta
        property="twitter:image"
        content={`https://capscode-website.github.io/${link?.replaceAll(
          "/index.md",
          ""
        )}/og_image.png`}
      />
      {/* End Twitter tags */}
    </Helmet>
  );
}
