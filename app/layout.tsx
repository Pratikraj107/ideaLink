import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';

export const metadata: Metadata = {
  title: 'Mobile Command Center - Track Your Campaigns',
  description: 'An all-in-one tool for tracking how well your campaigns are performing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ fontFamily: 'Open Sans, sans-serif' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <footer className="w-full mt-16 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/80 py-8 px-4 text-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-[#85A67B] to-[#FFCBA4] bg-clip-text text-transparent">IdeaLink</span>
              <span className="text-gray-500 dark:text-gray-300 text-sm">Connecting makers, dreamers, and doers. Find your team, build what matters.</span>
              <span className="text-gray-400 dark:text-gray-500 text-xs mt-2">&copy; {new Date().getFullYear()} IdeaLink. All rights reserved.</span>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}