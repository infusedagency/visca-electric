// components/GoogleTagManager.js
const GoogleTagManager = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        <!-- Google Tag Manager -->
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','AW-16534147036');
        <!-- End Google Tag Manager -->
      `,
    }}
  />
);

export default GoogleTagManager;
