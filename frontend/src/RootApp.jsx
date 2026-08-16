import './style/app.css';

import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import store from '@/redux/store';
import PageLoader from '@/components/PageLoader';

const BizflowOs = lazy(() => import('./apps/IdurarOs'));

const bizflowTheme = {
  token: {
    colorPrimary: '#4F46E5',
    colorLink: '#4F46E5',
    colorInfo: '#4F46E5',
    colorSuccess: '#16A34A',
    colorWarning: '#F59E0B',
    colorError: '#DC2626',
    borderRadius: 8,
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  components: {
    Menu: {
      itemSelectedBg: '#EEF2FF',
      itemSelectedColor: '#4F46E5',
      itemHoverBg: '#F5F5FF',
    },
    Button: { borderRadius: 8 },
    Card: { borderRadiusLG: 12 },
  },
};

export default function RoutApp() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ConfigProvider theme={bizflowTheme}>
          <Suspense fallback={<PageLoader />}>
            <BizflowOs />
          </Suspense>
        </ConfigProvider>
      </Provider>
    </BrowserRouter>
  );
}
