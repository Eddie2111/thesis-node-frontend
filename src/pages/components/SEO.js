import {Helmet} from "react-helmet";

export default function SEO({ title, value }) {
    const title1 = title;
return (
    <Helmet>
    <meta charSet="utf-8" />
    <title>BDSLP</title>
    <link rel="canonical" href="https://www.BDSLP.vercel.app" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Sign language to bangla transformation thesis development." />
    <meta name="keywords" content="Technology, Education, Research" />
    <meta name="author" content="Team Error404" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#000000" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <meta name="apple-mobile-web-app-title" content="BDSLP" />
    <meta name="application-name" content="BDSLP" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="theme-color" content="#000000" />
    <meta property="og:title" content="BDSLP" />
    <meta property="og:type" content="Thesis" />
    <meta property="og:image" content="/metaCover.png" />
    <meta property="og:url" content="http://BSLDP.vercel.app" />
    <meta name="twitter:card" content="BSLDP" />
    <meta property="og:site_name" content="BSLDP, APP." />
    <meta name="twitter:image:alt" content="BSLDP" />
</Helmet>
)
}
