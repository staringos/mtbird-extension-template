import { IExtensionContext } from '@mtbird/shared';
import Example from './components/Example';

const activity = (context: IExtensionContext) => {
  context.registerFeature('example.tab', Example);
};

export default activity;
