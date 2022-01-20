import React, { useState, useEffect } from "react";
import { withTranslation } from "react-i18next";
import UserActions from "../../actions/userActions";
import SelectInput from "../selectInput/SelectInput";

const SelectCountry = (props) => {

  const { onSelect, value, className, label, t } = props;
  
  const [options, setOptions] = useState([]);

  useEffect(() => {
    let list = UserActions.getSelectOptions;
    setOptions(
      list.map((item) => {
        return { ...item, label: t(item.label) };
      })
    );
  }, [t]);
  
  return (
    <SelectInput
      label={label}
      className={className}
      options={options}
      onSelect={onSelect}
      value={value}
    />
  );
};

export default withTranslation()(SelectCountry);
