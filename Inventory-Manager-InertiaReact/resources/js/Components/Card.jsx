import { useEffect } from "react";
import { Link } from '@inertiajs/react';

export default function Card({ className = '', ...props }) {
    return (
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg my-4">
            <div className="p-3 text-gray-900 flex justify-evenly items-center">
                <div className="w-1/12">{props.data.id}</div>
                {props.data.first_name ?<div className="w-2/12">{props.data.first_name}</div> : null}
                {props.data.last_name ?<div className="w-2/12">{props.data.last_name}</div> : null}
                {props.data.name ?<div className="w-2/12">{props.data.name}</div> : null}
                {props.data.address ?<div className="w-2/12">{props.data.address}</div> : null}
                {props.data.email ?<div className="w-3/12">{props.data.email}</div> : null}
                {props.data.phone ?<div className="w-2/12">{props.data.phone}</div> : null}
                {props.data.price ?<div className="w-2/12">{props.data.price}</div> : null}
                <div className="w-1/12 text-blue-600"><button onClick={props.invoicesEvent}>invoices</button></div>
                <Link href={route("edit",{type: props.type,id: props.data.id})} className="w-1/12 text-yellow-600 text-center">edit</Link>
                <div className="w-1/12 text-red-600"><button onClick={()=>props.deleteEvent(props.data.id)}>delete</button></div>
            </div>
        </div>
    );
}
