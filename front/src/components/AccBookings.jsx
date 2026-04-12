import axios from "axios";
import React, { useEffect, useState } from "react";
import Booking from "./Booking";

const AccBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const axiosGet = async () => {
      const { data } = await axios.get("/bookings/owner");
      setBookings(data);
    };

    axiosGet();
  }, []);

  return (
    <div>
      <div className="flex w-full max-w-7xl flex-col gap-8">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <Booking booking={booking} key={booking._id} />
          ))
        ) : (
          <p className="py-5 font-medium text-black opacity-60">
            Você ainda não possui reservas!
          </p>
        )}
      </div>
    </div>
  );
};

export default AccBookings;
