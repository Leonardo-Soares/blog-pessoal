import React from 'react'

const Analytics = () => (
  <>

    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P9V9XQFQJ3', {
              page_path: window.location.pathname,
            });
          `
      }}
    />
  </>
)

export default Analytics