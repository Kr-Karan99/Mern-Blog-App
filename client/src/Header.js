import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from './UserContext';

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);

  const logout = async () => {
    try {
      await fetch('http://localhost:4000/logout', {
        credentials: 'include',
        method: 'POST',
      });
      setUserInfo(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:4000/profile', {
          credentials: 'include',
        });
        if (response.ok) {
          const userInfo = await response.json();
          setUserInfo(userInfo);
        } else {
          console.error("Failed to fetch profile:", response.statusText);
        }
      } catch (error) {
        console.error("Profile fetch error:", error);
      }
    };

    fetchProfile();
  }, [setUserInfo]);

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">MyBlog</Link>
      <nav>
        {username ? (
          <>
            <Link to="/create">Create new Post</Link>
            <a href="#" onClick={logout}>LogOut</a>
          </>
        ) : (
          <>
            <Link to="/login" className="login">Login</Link>
            <Link to="/register" className="register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
