import { makeInstaller } from '@kxz-element/utils';
import compoens from './componens';
import '@kxz-element/theme/index.css';

const installer = makeInstaller(compoens);
export * from '@kxz-element/components';
export default installer;
