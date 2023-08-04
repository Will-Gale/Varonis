import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/cpu");
            setData(response.data);
        } catch (error) {
            toast.error("Error fetching data: ", error);
        }
    };

    const deleteCPU = async (id) => {
        if (window.confirm("Are you sure you want to delete this CPU?")) {
            try {
                const response = await axios.delete(
                    `http://localhost:8080/api/cpu/${id}`,
                );
                    await loadData();
                    toast.success("CPU deleted!");
                    return;
            } catch (error) {
                toast.error("Error deleting data: " + error);
            }
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-6 sm:pt-36 pt-10 ">
            <div className="px-4 sm:px-6 lg:px-8">
                <img
                    src="/vlogo.jpeg"
                    alt="Image description"
                    className="h-20 mb-10 rounded-md"
                />
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto pb-10">
                        <h1 className="text-gray-900 font-bold sm:text-3xl text-2xl leading-7">
                            <span className="text-red-600">Varonis</span> CPU
                            Inventory Management SPA
                        </h1>
                        <span className="text-gray-900">
                            <span className="text-red-600">
                                Display a list of CPUs with their details{" "}
                            </span>{" "}
                            (e.g., manufacturer, model, core count, clock speed,
                            price, etc.){" "}
                            <span className="text-gray-900">
                                retrieved from the backend API.
                            </span>
                        </span>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <Link to="/addCPU">
                            <button
                                type="button"
                                className="block rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Add CPU
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                        <tr className="text-gray-900">
                                            <th
                                                scope="col"
                                                className="py-3.5 pl-4 pr-3 text-sm font-semibold sm:pl-6"
                                            >
                                                Manufacturer
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-sm font-semibold"
                                            >
                                                Model
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-sm font-semibold"
                                            >
                                                Core Count
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-sm font-semibold"
                                            >
                                                Clock Speed
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-sm font-semibold"
                                            >
                                                Price
                                            </th>
                                            <th
                                                scope="col"
                                                className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                                            >
                                                <span className="sr-only">
                                                    Edit
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white text-center">
                                        {data.map((item, index) => (
                                            <tr key={item.id}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                    {item.manufacturer}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {item.model}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {item.coreCount}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {item.clockSpeed}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {item.price}
                                                </td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <Link
                                                        to={`/Edit/${item.id}`}
                                                    >
                                                        <button className="text-red-400 font-bold hover:text-indigo-900 px-6">
                                                            Edit
                                                        </button>
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            deleteCPU(item.id)
                                                        }
                                                        className="rounded-full bg-red-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                    >
                                                        X
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
