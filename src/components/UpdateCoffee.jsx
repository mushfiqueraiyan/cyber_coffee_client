import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  console.log(coffee);

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updated = Object.fromEntries(formData.entries());

    //send updated coffee to database
    fetch(`https://cyber-coffee-client.vercel.app/coffees/${coffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updated),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast("Updated Successfully");
          navigate("/");
        }
      });
  };

  return (
    <div>
      <h1 className="text-center font-bold text-2xl">UpdateCoffee</h1>
      <div className="bg-yellow-50 rounded-2xl p-20 mt-5">
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <fieldset className="fieldset p-4">
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Coffee Name"
                name="name"
                defaultValue={coffee.name}
              />
            </fieldset>
            <fieldset className="fieldset   p-4">
              <label className="label">Quantity</label>
              <input
                type="text"
                className="input w-full"
                name="quantity"
                placeholder="Quantity"
                defaultValue={coffee.quantity}
              />
            </fieldset>
            <fieldset className="fieldset   p-4">
              <label className="label">Price</label>
              <input
                type="number"
                className="input w-full"
                name="price"
                placeholder="price"
                defaultValue={coffee.price}
              />
            </fieldset>
            <fieldset className="fieldset   p-4">
              <label className="label">Category</label>
              <input
                type="text"
                className="input w-full"
                name="category"
                placeholder="Category Name"
                defaultValue={coffee.category}
              />
            </fieldset>
            <fieldset className="fieldset   p-4">
              <label className="label">Taste</label>
              <input
                type="text"
                className="input w-full"
                name="taste"
                placeholder="Taste"
                defaultValue={coffee.taste}
              />
            </fieldset>
            <fieldset className="fieldset   p-4">
              <label className="label">Details</label>
              <input
                type="text"
                className="input w-full"
                name="detail"
                placeholder="Details"
                defaultValue={coffee.details}
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
              defaultValue={coffee.photo}
            />
          </fieldset>
          <input type="submit" className="btn w-full" value="ADD COFFEE" />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
