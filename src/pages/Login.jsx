import React, { use } from "react";
import { AuthContext } from "../context/AuthProvider";
import { LeafyGreen } from "lucide-react";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const { loginEmail, setUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const email = formData.get("email");
    const password = formData.get("password");

    loginEmail(email, password)
      .then((res) => {
        setUser(res.user);
        navigate("/add-coffee");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm mx-auto mt-50 shrink-0 shadow-2xl">
        <h1 className="m-5 font-bold text-2xl">Login</h1>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <p>
            Don't have any account{" "}
            <Link className="underline text-blue-500" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
