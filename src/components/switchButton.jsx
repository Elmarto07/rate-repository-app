import React, { useState } from 'react';
import { Switch, StyleSheet } from 'react-native';

const SwitchButton = ({ onValueChange, value }) => {
  const [isEnabled, setIsEnabled] = useState(value);

  const handleValueChange = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    onValueChange && onValueChange(newValue);
  };

  return (
    <Switch
      style={styles.switch}
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={handleValueChange}
      value={isEnabled}
    />
  );
};

const styles = StyleSheet.create({
  switch: {
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default SwitchButton;
