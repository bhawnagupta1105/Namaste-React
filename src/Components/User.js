import { useState } from "react";

const User = () => {
console.log("Parent renser")
    const [count] = useState(0);
    return (
        <div className="user-card">
            <h2>Count:{count}</h2>

            <h2>Name:Bhawna</h2>
            <h3>Loation:Jaipur</h3>
            <h4>Contact:bhawanagupta303@gmail.com</h4>

        </div>
    );
};
export default User;