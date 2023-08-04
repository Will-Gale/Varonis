import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    manufacturer: "",
    model: "",
    coreCount: "",
    clockSpeed: "",
    price: "",
};

const AddCPU = () => {
    const [state, setState] = useState(initialState);
    const { manufacturer, model, coreCount, clockSpeed, price } = state;

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!manufacturer || !model || !coreCount || !clockSpeed || !price) {
            toast.error("Please fill in all fields...");
        } else {
            try {
                const response = axios.post("http://localhost:8080/api/cpu/", {
                    manufacturer,
                    model,
                    coreCount,
                    clockSpeed,
                    price,
                });
                setState({
                    manufacturer: "",
                    model: "",
                    coreCount: "",
                    clockSpeed: "",
                    price: "",
                });
                toast.success("CPU added!");
                navigate("/");
            } catch (error) {
                toast.error(error.response.data);
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    return (
        <div className="text-left lg:mx-80 mx-10 ">
            <div className="pb-10">
                <h2 className="sm:pt-40 pt-10 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    <span className="text-red-600">Add</span> a new CPU to the
                    inventory.
                </h2>
                <span className="text-red-600">
                    (Please fill in all the fields below.)
                </span>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="py-2">
                    <label
                        htmlFor="manufacturer"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Manufacturer
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="manufacturer"
                            id="manufacturer"
                            value={manufacturer}
                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                            placeholder="Intel"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="py-2">
                    <label
                        htmlFor="model"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Model
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="model"
                            id="model"
                            value={model}
                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                            placeholder="i7"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="py-2">
                    <label
                        htmlFor="coreCount"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Core Count
                    </label>
                    <div className="mt-2">
                        <input
                            type="number"
                            name="coreCount"
                            id="coreCount"
                            value={coreCount}
                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                            placeholder="8"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="py-2">
                    <label
                        htmlFor="clockSpeed"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Clock Speed
                    </label>
                    <div className="mt-2">
                        <input
                            type="number"
                            name="clockSpeed"
                            id="clockSpeed"
                            value={clockSpeed}
                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                            placeholder="3.2"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="py-2">
                    <label
                        htmlFor="price"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Price
                    </label>
                    <div className="mt-2">
                        <input
                            type="number"
                            name="price"
                            id="price"
                            value={price}
                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                            placeholder="899"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    value="Save"
                    className="block w-full my-10 mb-8 rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Add CPU
                </button>
                <button className="w-full  hover:text-red-500">
                    <Link to="/" className="text-center">
                        Go back without adding
                    </Link>
                </button>
            </form>
        </div>
    );
};

export default AddCPU;
