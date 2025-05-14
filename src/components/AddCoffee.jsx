import React from "react";
import { toast } from "react-toastify";

const AddCoffee = () => {
  const addCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const fromData = new FormData(form);

    const newCoffee = Object.fromEntries(fromData.entries());
    // console.log(newCoffee);

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Coffee added successfully");
        }
      });
  };

  return (
    <div>
      <div className="bg-yellow-50 rounded-2xl p-20">
        <div className="text-center">
          <h1 className="font-bold text-2xl mb-4">Add New Coffee Buddy!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            dolor rem eos a itaque at tenetur doloremque accusamus neque in.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            ipsum.
          </p>
        </div>

        <div>
          <form onSubmit={addCoffee}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <fieldset className="fieldset p-4">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Coffee Name"
                  name="name"
                />
              </fieldset>
              <fieldset className="fieldset   p-4">
                <label className="label">Quantity</label>
                <input
                  type="text"
                  className="input w-full"
                  name="quantity"
                  placeholder="Quantity"
                />
              </fieldset>
              <fieldset className="fieldset   p-4">
                <label className="label">Price</label>
                <input
                  type="number"
                  className="input w-full"
                  name="price"
                  placeholder="price"
                />
              </fieldset>
              <fieldset className="fieldset   p-4">
                <label className="label">Category</label>
                <input
                  type="text"
                  className="input w-full"
                  name="category"
                  placeholder="Category Name"
                />
              </fieldset>
              <fieldset className="fieldset   p-4">
                <label className="label">Taste</label>
                <input
                  type="text"
                  className="input w-full"
                  name="taste"
                  placeholder="Taste"
                />
              </fieldset>
              <fieldset className="fieldset   p-4">
                <label className="label">Details</label>
                <input
                  type="text"
                  className="input w-full"
                  name="detail"
                  placeholder="Details"
                />
              </fieldset>
            </div>

            <fieldset className="fieldset   p-4">
              <label className="label">Photo</label>
              <input
                type="text"
                className="input w-full"
                name="photo"
                placeholder="Photo URL"
              />
            </fieldset>
            <input type="submit" className="btn w-full" value="ADD COFFEE" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
