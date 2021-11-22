import './App.css';
import 'minireset.css';
import { OutfitProvider, useOutfit } from '@outfit.io/react';
import Shapes from './Shapes';
import Icon from './Icon';

declare global {
  interface Window {
    payload: any;
  }
}

function Page() {
  const { inputs } = useOutfit();

  return (
    <div className="App">
      <Icon />
      <div className="container">
        {inputs.photo && <img alt="avatar" src={inputs.photo} />}
      </div>
      <Shapes />
    </div>
  );
}

export default function App ({ templateProps = window.payload }){
  return (
    <OutfitProvider templateProps={templateProps}>
      <Page />
    </OutfitProvider>
  );
};