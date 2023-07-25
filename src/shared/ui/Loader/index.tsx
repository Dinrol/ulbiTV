import { classNames } from 'shared/lib/classNames';
import './styled.scss';

interface indexProps {
  className?: string;
}

export const Loader = (props: indexProps) => {
  const { className } = props;

  return (
    <div className={classNames('lds-spinner', {}, [className])}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
