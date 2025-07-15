import React, { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { fn } from 'storybook/test';

export default {
  title: "Utilities/LanguageSelector",
  component: LanguageSelector,
    parameters: {
    layout: 'centered',
  
  },
  tags: ['autodocs'],
 argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    onClick: fn(),
  },
};

export const Default = () => {
  const [lang, setLang] = useState("en");

  return (
    <div style={{ maxWidth: "300px" }}>
      <p>Selected language: {lang}</p>
      <LanguageSelector currentLang={lang} onChange={setLang} />
    </div>
  );
};
