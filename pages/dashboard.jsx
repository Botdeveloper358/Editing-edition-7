import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useRouter } from 'next/router';

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        } else {
            const user = jwt_decode(token);
            setUser(user);
        }
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900 flex items-center justify-center">
            <div className="bg-white/10 p-10 rounded-xl backdrop-blur-md shadow-xl w-96">
                <h1 className="text-center text-3xl text-white font-bold mb-4">Welcome {user?.name || ''} 👋</h1>
                <p className="text-center text-gray-300">Thanks for trusting Editing Edition Portfolio.<br /> Let's build something premium together.</p>
                <button onClick={() => router.push('/login')} className="mt-6 w-full py-2 rounded bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-white">Log Out</button>
            </div>
        </div>
    );
}
