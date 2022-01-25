import React from 'react';

type RenderFallbackProps<ErrorType extends Error = Error> = {
  error: ErrorType;
  reset: (...args: unknown[]) => void;
};

type RenderFallbackType = <ErrorType extends Error>(props: RenderFallbackProps<ErrorType>) => React.ReactNode;

interface ErrorBoundaryProps {
  renderFallback: RenderFallbackType;
  resetKeys?: unknown[];
  onReset?: (...args: Array<unknown>) => void;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}

const isDifferentArray = (a: unknown[] = [], b: unknown[] = []) =>
  a.length !== b.length || a.some((item, index) => !Object.is(item, b[index]));

const initialState: ErrorBoundaryState = { error: null };

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error) {
    return { error, hasError: true };
  }

  // eslint-disable-next-line consistent-return
  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.error == null) return null;
    if (isDifferentArray(prevProps.resetKeys, this.props.resetKeys)) this.resetErrorBoundary();
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo);
  }

  resetErrorBoundary = (...args: Array<unknown>) => {
    this.setState(initialState);
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onReset?.(...args);
  };

  render() {
    const { children, renderFallback } = this.props;
    const { error } = this.state;

    if (error !== null) {
      return renderFallback({
        error,
        reset: this.resetErrorBoundary,
      });
    }
    return children;
  }
}

export default ErrorBoundary;
