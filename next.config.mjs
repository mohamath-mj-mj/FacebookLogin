/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Facebook profile pictures can come from these hosts.
    domains: [
      "platform-lookaside.fbsbx.com",
      "scontent.xx.fbcdn.net", // generic CDN pattern (may vary by region)
      "scontent.fcss1-1.fna.fbcdn.net", // example regional variant; add more if needed
    ],
  },
};

export default nextConfig;
