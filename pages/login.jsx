import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/api/login', { email, password });
        if (res.data.token) {
            localStorage.setItem('token', res.data.token);
            router.push('/dashboard');
        } else {
            alert('Invalid Credentials');
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="bg-white/10 p-10 rounded-xl backdrop-blur-md shadow-xl w-96">
                <h2 className="text-center text-white text-2xl font-semibold mb-6">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input className="w-full p-2 rounded bg-black/30 text-white" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    <input className="w-full p-2 rounded bg-black/30 text-white" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
                    <button className="w-full py-2 rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">Login</button>
                </form>
            </div>
        </div>
    );
}
