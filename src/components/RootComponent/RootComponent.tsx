import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function RootComponent() {
  return (
    <section className="App">
      <Header />
      <main><Outlet /></main>
      <Footer />
    </section>
  );
}
export default RootComponent;
