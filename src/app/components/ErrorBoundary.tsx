import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error('Garden Time App Error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#f7f8f6] p-8">
          <div className="max-w-md text-center">
            <div className="w-16 h-16 bg-[#003f2e] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-[#bcff83] text-2xl">🌿</span>
            </div>
            <h1 className="text-[#003f2e] font-black text-2xl mb-3">
              Ein Fehler ist aufgetreten
            </h1>
            <p className="text-gray-600 text-sm mb-6">
              Die Seite konnte nicht geladen werden. Bitte laden Sie die Seite neu.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#003f2e] text-[#bcff83] px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#2d746d] transition-colors"
            >
              Seite neu laden
            </button>
            {this.state.error && (
              <details className="mt-4 text-left text-xs text-gray-400">
                <summary className="cursor-pointer">Fehlerdetails</summary>
                <pre className="mt-2 bg-gray-100 p-3 rounded-lg overflow-auto">
                  {this.state.error.message}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
