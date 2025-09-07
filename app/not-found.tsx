import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/" className="flex items-center justify-center">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <Button variant="outline" asChild className="w-full">
            <Link href="/research" className="flex items-center justify-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              View Our Research
            </Link>
          </Button>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>If you believe this is an error, please contact us.</p>
        </div>
      </div>
    </div>
  );
}