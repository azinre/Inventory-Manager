import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect, useSearchParams } from 'react';

export default function Add({ auth, ...props }) {
    const [data, setData] = useState([]); 
    const type= props.type;
    
    const handleChange = (event)=> {
        setData({...data,[event.target.name]: event.target.value});
      }
    const handleSubmit = ()=>{
        console.log(data);
        fetch(`http://127.0.0.1:8000/api/${props.type}s`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            //Fetched product is stored in the state 
            const loc = props.type + "s";
            window.location.href = route(loc);
        });
    }
    useEffect(() => {
     },[]); 
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit {props.type}</h2>}
        >
            <Head title={props.type} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex p-3 justify-evenly text-lg font-bold">
                        <form
                        onSubmit={handleSubmit}
                        >
                            {type == "provider"?
                            <div>
                                <label>Name: </label>
                                <input type="text" name="name" value={data.name} onChange={handleChange}/>   
                            </div>
                            :null}
                            {type == "provider"?
                            <div>
                                <label>Adress: </label>
                                <input type="text" name="address" value={data.address} onChange={handleChange}/>   
                            </div>
                            :null}
                            {type == "item"?
                            <div>
                                <label>Price: </label>
                                <input type="number" name="price" value={data.price} onChange={handleChange}/>   
                            </div>
                            :null}
                            {type == "client"?
                            <div>
                                <label>First Name: </label>
                                <input type="text" name="first_name" value={data.first_name} onChange={handleChange}/>   
                            </div>
                            :null}
                            {type == "client"?
                            <div>
                                <label>Last Name: </label>
                                <input type="text" name="last_name" value={data.last_name} onChange={handleChange}/>   
                            </div>
                            :null}
                            {type == "client" || type=="provider"?
                            <div>
                                <label>Email: </label>
                                <input type="email" name="email" value={data.email} onChange={handleChange}/>   
                            </div>
                            :null}
                            {type == "client" || type=="provider"?
                            <div>
                                <label>Phone: </label>
                                <input type="phone" name="phone" value={data.phone} onChange={handleChange}/>   
                            </div>
                            :null}
                            <button type='submit'>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
