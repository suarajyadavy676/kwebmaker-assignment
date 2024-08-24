// app/layout.jsx
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import client from "../data/apolloClient";
import Head from 'next/head';
import { GET_HOME_PAGE_AND_SEO_DATA } from "@/data/seoAndHomePageData";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  // Fetch the data from the API
  const { data } = await client.query({
    query: GET_HOME_PAGE_AND_SEO_DATA,
  });

  // Destructure the data correctly
  const { seo, homepage } = data.pages.nodes[0];
  // console.log("seo in layout : ",seo)

  return (
    <html lang="en">
      <Head>
        <title>{seo.title || "Default Title"}</title>
        <meta name="description" content={seo.metaDesc || "Default description"} />
        <meta name="keywords" content={seo.metaKeywords || "Default keywords"} />
        <link rel="canonical" href={seo.canonical || "https://defaulturl.com"} />
        
        {/* Open Graph meta tags */}
        <meta property="og:type" content={seo.opengraphType || "website"} />
        <meta property="og:title" content={seo.opengraphTitle || "Default Open Graph Title"} />
        <meta property="og:description" content={seo.opengraphDescription || "Default Open Graph Description"} />
        <meta property="og:url" content={seo.opengraphUrl || "https://defaulturl.com"} />
        <meta property="og:image" content={seo.opengraphImage.mediaItemUrl || "https://defaultimageurl.com"} />
        <meta property="og:site_name" content={seo.opengraphSiteName || "Default Site Name"} />

        {/* Schema.org */}
        <script type="application/ld+json">
          {seo.schema.raw || "{}"}
        </script>
      </Head>
      <body className={inter.className}>
        <Navbar homepageData={homepage} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
