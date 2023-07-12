import './Loading.css';
import { LineWobble } from '@uiball/loaders';

export default function Loading() {
  return (
    <div className='loading--container'>
      <h3>Uploading...</h3>
      <LineWobble size={300} lineWeight={5} speed={1.75} color='#2F80ED' />
    </div>
  );
}
