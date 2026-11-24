import './globals.css';import type {Metadata} from 'next';
export const metadata:Metadata={title:{default:'মৌলিক — খাবারকে জানুন, জীবনকে ভালো রাখুন।',template:'%s | মৌলিক'},description:'বাংলাদেশের খাবার, পুষ্টি ও খাদ্যনিরাপত্তা নিয়ে নির্ভরযোগ্য ও সহজবোধ্য জ্ঞান।',metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'https://moulik.ciphertextlabs.com'),openGraph:{siteName:'মৌলিক',type:'website',locale:'bn_BD'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="bn"><body>{children}</body></html>}
