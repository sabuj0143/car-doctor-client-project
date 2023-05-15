import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";

const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://cars-doctor-server-phi.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="my-4">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-medium text-orange-600">Service</h3>
                <h2 className="text-5xl font-semibold text-black">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCart
                    key={service._id}
                    service={service}
                    ></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Service;