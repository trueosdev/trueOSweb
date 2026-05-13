import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const NAV_PIXEL_POOL_KERNEL = Array.from({ length: 12 * 12 }, () => '1').join(' ')

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'trueOS',
  description: 'Contract-based software engineering for custom business platforms',

  icons: {
    icon: [{ url: '/t-logo.svg', type: 'image/svg+xml' }],
    apple: '/t-logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {/* SVG filter: pool backdrop into blocks + quantize (mosaic “pixel glass”, not a CSS grid) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none fixed h-0 w-0 overflow-hidden"
          aria-hidden="true"
        >
          <defs>
            <filter
              id="trueos-nav-pixelate"
              x="-5%"
              y="-5%"
              width="110%"
              height="110%"
              colorInterpolationFilters="sRGB"
            >
              {/* 12×12 box average = harsh spatial downsample / superpixels */}
              <feConvolveMatrix
                in="SourceGraphic"
                order="12"
                divisor="144"
                edgeMode="duplicate"
                preserveAlpha="true"
                kernelMatrix={NAV_PIXEL_POOL_KERNEL}
                result="pooled"
              />
              <feComponentTransfer in="pooled" result="quantized">
                <feFuncR type="discrete" tableValues="0 0.5 1" />
                <feFuncG type="discrete" tableValues="0 0.5 1" />
                <feFuncB type="discrete" tableValues="0 0.5 1" />
              </feComponentTransfer>
              {/* Crush luminance so scrolled content is not legible through the bar */}
              <feColorMatrix
                in="quantized"
                type="matrix"
                values="0.12 0 0 0 0  0 0.12 0 0 0  0 0 0.12 0 0  0 0 0 1 0"
                result="obscured"
              />
            </filter>
          </defs>
        </svg>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
