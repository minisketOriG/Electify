
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//pages
import Landingpage from './Landingpage'
import SignUpPage from './authpage/signuppage'
import SignInPage from './authpage/signinpage'
import About from './accesspage/About'
import Blogs from './accesspage/Blogs'
import Services from './accesspage/Services'
import Terms from './accesspage/Terms'
import Privacy from './accesspage/Privacy'
import Dashboard from './clientpage/Dashboard'
import VotingEvent from './clientpage/VotingEvent'
import AccountSettings from './clientpage/AccountSettings'
import Transactions from './clientpage/Transactions'
import VotingEventCategories from './clientpage/VotingEventCategories'
import VotingCategoryContenders from './clientpage/VotingCategoryContenders'
import NotFound from './errorpage/NotFound'
import DepositPage from './clientpage/DepositPage'
import WithdrawalPage from './clientpage/WithdrawalPage'
import ReportIssue from './clientpage/ReportIssue'


function App() {
  return (
    <Router basename={import.meta.env.DEV ? '/' : '/Electify/'}>
      <Routes>
        <Route path='/' element={<Landingpage />} />

        <Route path="auth">
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>

        <Route path="clientpage">
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="votingevents" element={<VotingEvent />} />
          <Route path="eventcategory/:id" element={<VotingEventCategories />} />
          <Route path="eventcontenders/:id" element={<VotingCategoryContenders />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="accountsettings" element={<AccountSettings />} />
          <Route path="reportissue" element={<ReportIssue />} />
        </Route>

        <Route path="accesspage">
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="terms" element={<Terms />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>

        <Route path="fundspage">
          <Route path="depositfunds" element={<DepositPage />} />
          <Route path="withdrawfunds" element={<WithdrawalPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
