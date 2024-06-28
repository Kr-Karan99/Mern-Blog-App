import './App.css';
import Post from './post';
import Header from './Header';
import Layout from './Layout';
import { Route, Routes } from "react-router-dom";
import IndexPage from './pages/Indexpages';
import LoginPage from './pages/LoginPage';
import CreatePost from './pages/createPost'
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './UserContext'; // Import UserContextProvider
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/create' element={<CreatePost/>}/>
          <Route path='/post/:id' element={<PostPage/>}/>
          <Route path='/edit/:id' element={<EditPost/>}></Route>
          </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
