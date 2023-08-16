import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm';
import cls from './LoginModal.module.scss';

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
      className={classNames(cls.loginModal, {}, [className])}
    >
      <LoginForm />
    </Modal>
  );
};
