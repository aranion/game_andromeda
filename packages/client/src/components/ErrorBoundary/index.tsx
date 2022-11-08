import cls from './errorBoundary.module.css';
import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

export class ErrorBoundary extends Component<Props, State> {
  private messageError?: string = undefined;

  constructor(props: Props) {
    super(props);

    this.state = { hasError: false };
    this.messageError = this.props.messageError;
  }

  static getDerivedStateFromError(error: string) {
    console.error(error);

    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  resetPage = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      const title = this.messageError
        ? this.messageError
        : 'Извините, произошла ошибка в работе приложения. Мы уже приступили к ее устранению.';
      const message = 'Попробуйте обновить страницу и повторить действия.';

      return (
        <div className={cls.errorBoundary}>
          <div className={cls.errorBoundary__content}>
            <h1>App-Error</h1>
            <p>{title}</p>

            <div className={cls.errorBoundary__message}>
              <span>{message}</span>
              <button
                className={cls.errorBoundary__message_button}
                onClick={this.resetPage}>
                Обновить страницу
              </button>
              <span>Подробная информация в console.</span>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

type Props = {
  children: ReactNode;
  messageError?: string;
};

type State = {
  hasError: boolean;
};