import { createRoot } from 'react-dom/client';
import CountUp from './components/CountUp';

const mount = document.getElementById('dogs-adopted-counter');

if (mount) {
  createRoot(mount).render(
    <CountUp
      from={0}
      to={2131}
      separator=","
      direction="up"
      duration={2}
      className="count-up-text"
    />
  );
}
