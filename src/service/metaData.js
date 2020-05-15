import React from "react";
import Helmet from "react-helmet";

function MyCustomMeta(d){
    return(
        <Helmet>
            <title>{d.title}</title>
            <link rel="canonical" href={d.url}></link>
            {/* <link type="text/plain" rel="author" href="humans.txt" /> */}
            {/* <meta http-equiv="content-language" content="en-us" /> */}
            {/* <meta charset="UTF-8"></meta> */}
            <meta content="text/html;charset=utf-8" http-equiv="Content-Type" />
            <meta content="utf-8" http-equiv="encoding" />
            <meta name="theme-color" content={d.theme} />

            
            <meta name="description" content={d.description} />
            <meta name="keywords" content={d.keyWords} />
            <meta name="robots" content="index , follow " />
            <meta property="og:image" content={d.og.imgUrl} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="300" />
            <meta property="og:description" content={d.description}/>
            <meta property="og:title" content={d.title}/>
            <meta property="og:url" content={d.url} />
            <meta property="og:type" content={d.og.type} />
            {/* <meta property="fb:app_id" content=/> */}
            {/* <meta property="fb:pages" content= /> */}
            {/* <meta name="google-site-verification" content= /> */}
        </Helmet>
        )
}

export default MyCustomMeta;