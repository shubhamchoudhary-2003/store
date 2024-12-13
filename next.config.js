const checkEnvVariables = require("./check-env-variables")

checkEnvVariables()

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "fashion-starter-demo.s3.eu-central-1.amazonaws.com",
      },{
        protocol: "https",
        hostname: "bucket-production-6257.up.railway.app",
        pathname: '/medusa/**',
      },{
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "http",
        hostname: "bucket-production-6257.up.railway.app",
       
      },{
        protocol: "https",
        hostname: "bucket-production-6257.up.railway.app",
     
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      }
    ],
  },
}

module.exports = nextConfig
