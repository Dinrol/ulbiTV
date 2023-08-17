import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm';

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
      <LoginForm />
    </Modal>
  );
};
