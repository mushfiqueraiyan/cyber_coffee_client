import { DeleteIcon, Edit2Icon, EditIcon, InfoIcon, Trash } from "lucide-react";
import React, { useState } from "react";
import { data, Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Home = () => {
  const coffees = useLoaderData();
  const [coffee, setCoffee] = useState(coffees);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // start deleting

        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });

              // remove coffee

              const remainingCoffees = coffee.filter((cof) => cof._id !== id);
              setCoffee(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        {coffee.map((coffee) => {
          return (
            <div
              key={coffee._id}
              className="flex items-center justify-between gap-2 bg-amber-50 p-5 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={coffee.photo}
                  alt=""
                  className="w-40 h-40 object-cover rounded-lg"
                />
                <div>
                  <h1 className="font-bold text-2xl">{coffee.name}</h1>
                  <div className="flex gap-2 items-center">
                    <p>Price: {coffee.price}</p>
                    <p>Category: {coffee.category}</p>
                  </div>
                  <p>Taste: {coffee.taste}</p>
                  <p>Quantity: {coffee.quantity}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  to={`/update-coffee/${coffee._id}`}
                  className="btn rounded-full"
                >
                  <EditIcon size={15} />
                </Link>
                <Link className="btn rounded-full">
                  <InfoIcon size={15} />
                </Link>
                <button
                  onClick={() => handleDelete(coffee._id)}
                  className="btn rounded-full"
                >
                  <Trash size={15} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
