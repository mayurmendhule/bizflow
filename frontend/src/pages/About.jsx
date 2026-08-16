import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'BizFlow'}
      subTitle={translate('CRM & Business Management Platform')}
      extra={
        <>
          <p>Version 1.0.0</p>
        </>
      }
    />
  );
};

export default About;
