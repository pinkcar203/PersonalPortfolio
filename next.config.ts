import type { NextConfig } from 'next'

/** GitHub Pages project sites live under /<repo>; dev uses "/" so localhost works. */
const repoBase = '/PersonalPortfolio'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  ...(process.env.NODE_ENV === 'production'
    ? { basePath: repoBase, assetPrefix: repoBase }
    : {}),
}

export default nextConfig