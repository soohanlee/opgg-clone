import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { ErrorBoundary as ErrorBoundaryComponent } from "react-error-boundary";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundaryComponent
      onError={(error) => {
        // 조건에 맞는 에러인 경우 해당 ErrorBonudary에서 처리하지 않고 상위로 throw 합니다.
        if (
          isAxiosError(error) &&
          error?.response?.status === 500 &&
          error?.response?.data === "CRITICAL_ERROR"
        ) {
          throw error;
        }
      }}
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
        reset();
      }}
    >
      {children}
    </ErrorBoundaryComponent>
  );
};
