import { RecoilRoot } from 'recoil';

export default function Provider({ children }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
