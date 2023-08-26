import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import { LoginFormAsync } from '../LoginForm/LoginFormAsync';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const {
    className,
    isOpen,
    onClose,
  } = props;

  return (
    <Modal
      lazy
      isOpen={isOpen}
      onClose={onClose}
      className={classNames('', {}, [className])}
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
