import React from 'react';
import SSRSafeSuspense from '@/components/boundaries/SSRSafeSuspense';
import ErrorBoundary from './ErrorBoundary';

type ErrorBoundaryProps = React.ComponentProps<typeof ErrorBoundary>;

interface AsyncBoundaryProps extends Omit<ErrorBoundaryProps, 'renderFallback'> {
  pendingFallback: React.ComponentProps<typeof SSRSafeSuspense>['fallback'];
  rejectedFallback: ErrorBoundaryProps['renderFallback'];
}

function AsyncBoundary({ pendingFallback, rejectedFallback, children, ...errorBoundaryProps }: AsyncBoundaryProps) {
  return (
    <ErrorBoundary renderFallback={rejectedFallback} {...errorBoundaryProps}>
      <SSRSafeSuspense fallback={pendingFallback}>{children}</SSRSafeSuspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;
