const useAppSettings = () => {
  let settings = {};
  settings['bizflow_app_email'] = 'noreply@bizflowapp.com';
  settings['bizflow_base_url'] = 'https://cloud.bizflowapp.com';
  return settings;
};

module.exports = useAppSettings;
