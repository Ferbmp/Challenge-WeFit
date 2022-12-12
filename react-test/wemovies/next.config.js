/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   swcMinify: true,
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "www.imagemhost.com.br",
            port: "",
            pathname: "/images/**",
         },
      ],
   },
};
module.exports = nextConfig;
