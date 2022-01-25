import * as React from 'react';
import useMounted from '@/hooks/useMounted';

export default function SSRSafeSuspense(props: React.SuspenseProps) {
  const isMounted = useMounted();

  if (isMounted) {
    return <React.Suspense {...props} />;
  }
  // eslint-disable-next-line react/destructuring-assignment
  return <>{props.fallback}</>;
}
