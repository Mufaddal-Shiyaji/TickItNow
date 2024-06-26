import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Lottie from "lottie-react";
import animationData from "../../assets/animations/login-animation.json";
import styles from "./Login.module.css";
import ServerUrl from "../../constants";
import { useAuth } from "../../store/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [user, setUser] = useState({ email: "", password: "" });
  const handleDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginUser = async () => {
      let response;
      if (user.type === "organizer") {
        response = await fetch(`${ServerUrl}/api/organizer/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            password: user.password,
          }),
        });
      } else {
        response = await fetch(`${ServerUrl}/api/user/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            password: user.password,
          }),
        });
      }
      if (!response.ok) {
        const data = await response.json();
        console.log(data.message)
        alert(data.message);
        window.location.reload();
      }
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        login(data.token, data.result);
        navigate("/");
      }
    }
    loginUser();
  }
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome to TickItNow!</h1>
        </div>
        <form className={styles.loginForm} method="POST" onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="type"
            placeholder="Enter your role"
            onChange={handleDataChange}
            required
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleDataChange}
            required
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleDataChange}
            required
          />
          <div className={styles.or}>
            <hr className={styles.divider} />
            <div style={{ margin: "0.25rem 1rem" }}>or</div>
            <hr className={styles.divider} />
          </div>
          <p>
            Don't have an account?{" "}
            <span
              style={{
                color: "#F9A826",
                fontWeight: "700",
                cursor: "pointer",
              }}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
          <Button
            variant="contained"
            type="submit"
            // onClick={() => navigate("/home")}
            sx={{
              backgroundColor: "#F9A826",
              color: "white",
              width: "100%",
              height: "3rem",
              fontSize: "1.25rem",
              fontWeight: "700",
              borderRadius: "0.5rem",
              marginTop: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "0.2s ease-in-out",
              "&:hover": {
                backgroundColor: "#F9A826",
                opacity: "0.8",
                gap: "1.5rem",
              },
            }}
          >
            Login
            <EastIcon />
          </Button>
        </form>
      </div>
      <div className="login-animation w-72 md:w-[25rem]">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default Login;