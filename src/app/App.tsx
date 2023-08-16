import { classNames } from 'shared/lib/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

export const App = () => (
  <div className={classNames('app', {}, [])}>
    <Suspense fallback="">
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </Suspense>
  </div>
);
