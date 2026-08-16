const useDate = ({ settings }) => {
  const { bizflow_app_date_format } = settings;

  const dateFormat = bizflow_app_date_format;

  return {
    dateFormat,
  };
};

module.exports = useDate;
