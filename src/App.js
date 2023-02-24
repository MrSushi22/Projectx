import './App.css';

import { About, Header, Project } from './container';
import { Navbar, Footer } from './components';

const App = () => (
  <div>
    <Header />
    <Navbar />
    <About />
    <Project />
    <Footer />
  </div>
);

export default App;
