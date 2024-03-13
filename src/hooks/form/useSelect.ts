"use client";

import { useState } from "react";

const useSelect = (initialValue: string) => {
  const [currentValue, setCurrentValue] = useState(initialValue);

  const onChange = (value: string) => {
    setCurrentValue(value);
  };

  return {
    currentValue,
    onChange,
  };
};

export { useSelect };
