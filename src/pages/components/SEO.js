import {Helmet} from "react-helmet";

const SEO = ({title, description, image, article}) => {
return (
    <Helmet>
    <meta charSet="utf-8" />
    <title>Bangla Sign Language Development</title>
    <link rel="canonical" href="https://www.BSLDP.vercel.app" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Sign language to bangla transformation thesis development." />
    <meta name="keywords" content="Technology, Education, Research" />
    <meta name="author" content="Team Error404" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#000000" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <meta name="apple-mobile-web-app-title" content="BSLDP" />
    <meta name="application-name" content="BSLDP" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="theme-color" content="#000000" />
    <meta property="og:title" content="BSLDP" />
    <meta property="og:type" content="Thesis" />
    <meta property="og:image" content="/metaCover.png" />
    <meta property="og:url" content="http://BSLDP.vercel.app" />
    <meta name="twitter:card" content="BSLDP" />
    <meta property="og:site_name" content="BSLDP, APP." />
    <meta name="twitter:image:alt" content="BSLDP" />
</Helmet>
)
}

export default SEO;