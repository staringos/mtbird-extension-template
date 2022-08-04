import React from 'react';
import { IExtensionContext } from '@mtbird/shared';
import Example from './components/Example';

const activity = (context: IExtensionContext) => {
  context.registerComponent('example.tab', Example);
};

export default activity;
