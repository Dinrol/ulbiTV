import { useState } from 'react';

import { classNames } from 'shared/lib/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false)

  const onToogle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(
      cls.sidebar,
      {[cls.collapsed]: collapsed},
      [className]
    )}
    >
      <button onClick={onToogle}>
        toggle
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}