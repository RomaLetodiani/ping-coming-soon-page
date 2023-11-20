import './index.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

const App = () => (
  <div className="content">
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  </div>
);

export default App;
