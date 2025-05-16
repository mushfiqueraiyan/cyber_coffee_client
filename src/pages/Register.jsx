import React, { use } from "react";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.init";

const Register = () => {
  const { setUser, createWithEmail } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    createWithEmail(email, password)
      .then((res) => {
        // console.log(res.user);

        const userProfile = {
          email,
          ...restFormData,
          creationTime: res.user?.metadata?.creationTime,
          lastSignInTime: res.user?.metadata?.lastSignInTime,
        };

        const profileInfo = {
          displayName: formData.get("name"),
          photoURL: formData.get("photo"),
        };

        updateProfile(auth.currentUser, profileInfo)
          .then(() => {})
          .catch((error) => {
            console.error("Error updating profile:", error);
          });

        // save profile info in the database

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast("Profile Created Successfully");
            }
          });

        setUser(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm mx-auto mt-50 shrink-0 shadow-2xl">
        <h1 className="m-5 font-bold text-2xl">Register</h1>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />
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
            <label className="label">Address</label>
            <input
              name="address"
              type="text"
              className="input"
              placeholder="Address"
            />
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
            />

            <button className="btn btn-neutral mt-4">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
