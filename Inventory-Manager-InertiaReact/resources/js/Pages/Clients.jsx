import Card from '@/Components/Card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';

export default function Clients({ auth, ...props }) {
    const [clients, setClients] = useState([]);   
    const deleteEvent = (id) => {
        fetch(`http://127.0.0.1:8000/api/clients/${id}`,{
            method: 'DELETE',
        })
        .then(response => {
            return response.json();
        })
        .then(getClients()
        );
    } ;
    const editEvent = ()=>{
        console.log("ediit");
        route('edit');
    };
    // Call this function to get products data 
    const getClients = () => {
        /* fetch API in action */
        fetch('http://127.0.0.1:8000/api/clients',{
            method: 'GET',
        })
        .then(response => {
            return response.json();
        })
        .then(clients => {
            //Fetched product is stored in the state 
            setClients(clients);
        });
    };
    useEffect(() => {
        getClients();
     },[]); 
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<div><h2 className="font-semibold text-xl text-gray-800 leading-tight">Clients</h2>
                    <Link href={route("add",{type: "client"})}>Add</Link></div>}
        >
            <Head title="Clients" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex p-3 justify-evenly text-lg font-bold">
                        <div className="w-1/12">Id</div>
                        <div className="w-2/12">First_name</div>
                        <div className="w-2/12">Last Name</div>
                        <div className="w-3/12">Email</div>
                        <div className="w-2/12">Phone</div>
                        <div className="w-1/12"></div>
                        <div className="w-1/12"></div>
                        <div className="w-1/12"></div>
                    </div>
                    {clients.map(client=>{
                        return(<Card data={client} type="client" key={client.id} 
                            deleteEvent={deleteEvent}
                            editEvent={editEvent}></Card>)
                    })}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
