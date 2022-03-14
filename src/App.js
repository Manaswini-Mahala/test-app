import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './cmp/Home';
import About from './cmp/About';
import Protected from './cmp/Protected';
import Auth from './cmp/Auth';
import Nav from './cmp/Nav';
import Box from './cmp/Box';
import Savings from './cmp/Savings';
import Expenses from './cmp/Expenses';
import Investments from './cmp/Investments';
import Account from './cmp/Account';
import ChangeAccountDetails from './cmp/ChangeAccountDetails';
import DeactivateAccount from './cmp/DeactivateAccount';
import DeleteAccount from './cmp/DeleteAccount';
import AccountDeactivated from './cmp/AccountDeactivated';
import AccountDeleted from './cmp/AccountDeleted';
import ChangeName from './cmp/ChangeName';
import ChangePassword from './cmp/ChangePassword';
import ChangeEmail from './cmp/ChangeEmail';
import NameChanged from './cmp/NameChanged';
import PasswordChanged from './cmp/PasswordChanged';
import EmailChanged from './cmp/EmailChanged';
import Error from './Error';

import {
  BrowserRouter as Router,
  //Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";





function App() {
  return (
    <div className="App">

      <div className='a1'>

        <Router>

          <Nav />

          <Routes>

            <Route exact path="/" element={<Auth />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/savings" element={<Savings />} />
            <Route exact path="/expenses" element={<Expenses />} />
            <Route exact path="/investments" element={<Investments />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/changeaccountdetails" element={<ChangeAccountDetails />} />
            <Route exact path="/deactivateaccount" element={<DeactivateAccount />} />
            <Route exact path="/deleteaccount" element={<DeleteAccount />} />
            <Route exact path="/accountdeactivated" element={<AccountDeactivated />} />
            <Route exact path="/accountdeleted" element={<AccountDeleted />} />
            <Route exact path="/changename" element={<ChangeName />} />
            <Route exact path="/changepassword" element={<ChangePassword />} />
            <Route exact path="/changeemail" element={<ChangeEmail />} />
            <Route exact path="/namechanged" element={<NameChanged />} />
            <Route exact path="/passwordchanged" element={<PasswordChanged />} />
            <Route exact path="/emailchanged" element={<EmailChanged />} />
            
            
            
            
            <Route element={<Error />} />
            
           
          </Routes>

        </Router>

      </div>


    </div>
  );
}

export default App;
