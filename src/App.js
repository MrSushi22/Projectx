import './App.css';

import { About, Header, Project } from './container';
import { Navbar, Footer } from './components';

const App = () => (
  <div>
    <About />
    <Project />
    <Navbar />
    <Header />
    <Footer />
  </div>
);

export default App;
