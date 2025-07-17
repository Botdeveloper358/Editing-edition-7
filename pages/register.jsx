import { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/register', { name, email, password });
        alert('Registered Successfully');
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="bg-white/10 p-10 rounded-xl backdrop-blur-md shadow-xl w-96">
                <h2 className="text-center text-white text-2xl font-semibold mb-6">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input className="w-full p-2 rounded bg-black/30 text-white" placeholder="Name" onChange={e => setName(e.target.value)} />
                    <input className="w-full p-2 rounded bg-black/30 text-white" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    <input className="w-full p-2 rounded bg-black/30 text-white" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
                    <button className="w-full py-2 rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">Register</button>
                </form>
            </div>
        </div>
    );
}
