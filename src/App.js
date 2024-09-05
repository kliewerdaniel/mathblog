import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Post from './pages/Post';
import Admin from './pages/Admin';
import './App.css';

const stripePromise = loadStripe('your_stripe_publishable_key');

function App() {
  return (
    <Router>
      <Elements stripe={stripePromise}>
        <div className='App flex flex-col min-h-screen'>
          <Header />
          <main className='container mx-auto px-4 py-8 flex-grow'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/post/:id' component={Post} />
              <Route path='/admin' component={Admin} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Elements>
    </Router>
  );
}

export default App;
