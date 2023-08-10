import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-4xl font-bold mb-4">
                                The modern CMMS your team will actually use.
                            </h1>
                            <p className="text-lg mb-6">
                                Simplify maintenance, safety and operations for your frontline teams.
                                Increase equipment uptime by connecting your people and data.
                            </p>
                            <div className="flex space-x-4">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                                    Get Started
                                </button>
                                {/* <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded">
                                    Book a Tour
                                </button> */}
                            </div>
                        </div>
                    
                        <div className="grid grid-cols-3 gap-4 p-6">
                            <div className="bg-blue-200 p-4 rounded shadow-md hover:bg-blue-300 transition">
                                <img src="/path-to-your-image.jpg" alt="Advertisement 1" className="mb-4" />
                                <h3 className="text-lg font-semibold">Advertisement Card 1</h3>
                                <p>This is a description of Advertisement 1.</p>
                            </div>
                            <div className="bg-green-200 p-4 rounded shadow-md hover:bg-green-300 transition">
                                <img src="/path-to-your-image.jpg" alt="Advertisement 2" className="mb-4" />
                                <h3 className="text-lg font-semibold">Advertisement Card 2</h3>
                                <p>This is a description of Advertisement 2.</p>
                            </div>
                            <div className="bg-yellow-200 p-4 rounded shadow-md hover:bg-yellow-300 transition">
                                {/* Placeholder graph */}
                                <div className="h-32 bg-gray-400 rounded mb-4"></div>
                                <h3 className="text-lg font-semibold">Graph</h3>
                                <p>This is a description of the graph.</p>
                            </div>
                            <div className="bg-red-200 p-4 rounded shadow-md hover:bg-red-300 transition">
                                <img src="/path-to-your-image.jpg" alt="Advertisement 3" className="mb-4" />
                                <h3 className="text-lg font-semibold">Advertisement Card 3</h3>
                                <p>This is a description of Advertisement 3.</p>
                            </div>
                            <div className="bg-pink-200 p-4 rounded shadow-md hover:bg-pink-300 transition">
                                <img src="/path-to-your-image.jpg" alt="Advertisement 4" className="mb-4" />
                                <h3 className="text-lg font-semibold">Advertisement Card 4</h3>
                                <p>This is a description of Advertisement 4.</p>
                            </div>
                            <div className="bg-purple-200 p-4 rounded shadow-md hover:bg-purple-300 transition">
                                {/* Placeholder graph */}
                                <div className="h-32 bg-gray-400 rounded mb-4"></div>
                                <h3 className="text-lg font-semibold">Graph</h3>
                                <p>This is a description of the graph.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
