import './globals.css'

export const metadata = {
  title: 'Vanilla',
  description: 'Vanilla Website',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
