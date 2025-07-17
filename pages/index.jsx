export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center space-y-8 p-10">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                Editing Edition 🎬 Official Portfolio
            </h1>
            <p className="text-gray-400 text-center max-w-xl">Delivering Clean • Premium • Cinematic Visuals For Serious Clients Only</p>
            <div className="w-full max-w-2xl bg-white/10 p-6 rounded-xl space-y-4">
                <h2 className="text-xl font-bold text-pink-400">Price Chart (Normal Users)</h2>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                    <li>Basic Edit: ₹ 1,000 / Video (2-3 Days)</li>
                    <li>Instagram Reel: ₹ 800 / Reel (1-2 Days)</li>
                    <li>Cinematic / SlowMo: ₹ 2,500 / Video (3-4 Days)</li>
                    <li>YouTube 10-15 min: ₹ 4,000 / Video (4-5 Days)</li>
                    <li>Corporate Promo: ₹ 5,000 / Project (4-6 Days)</li>
                </ul>

                <h2 className="text-xl font-bold text-yellow-400 pt-4">Monthly Plan (Normal)</h2>
                <p className="text-gray-300">Part-Time: ₹ 25,000 / 1 Month (5 Reels / Week)</p>
                <p className="text-gray-300">Full-Time: ₹ 40,000-₹ 50,000 / 1 Month (7+ Reels / Week)</p>

                <h2 className="text-xl font-bold text-green-400 pt-4">Trader Special</h2>
                <p className="text-gray-300">Basic Plan: ₹ 18,000 / 1 Month (3 Reels / Week, Max 3 Min)</p>
                <p className="text-gray-300">Premium Plan: ₹ 30,000 / 1 Month (5 Reels / Week, Max 3 Min)</p>

                <h2 className="text-xl font-bold text-purple-400 pt-4">Premium Membership</h2>
                <p className="text-gray-300">₹ 1,000 One-Time Entry. Lifetime Badge + Certificate + Fast Queue</p>
                <p className="text-gray-300">Priority Plan: ₹ 50,000 / Month (5 Reels / Week)</p>
                <p className="text-gray-300">VIP Max: ₹ 70,000 / Month (7+ Reels / Week)</p>
            </div>

            <div className="w-full max-w-2xl mt-6 bg-white/10 p-6 rounded-xl space-y-3">
                <h2 className="text-xl text-green-300 font-bold">Fake Influencer Reviews ✅</h2>
                <p className="text-gray-400">"Editing Edition is my go-to editor, cleanest work!" — Influencer ID: influencer_edit1</p>
                <p className="text-gray-400">"Trusted. Professional. Fast." — Influencer ID: creator_editpro</p>
                <p className="text-gray-400">"5 Star Work Everytime!" — Influencer ID: sigmaedit_88</p>
                <p className="text-yellow-500">👥 100+ Verified Influencers</p>
            </div>

            <div className="w-full max-w-2xl mt-6 bg-white/10 p-6 rounded-xl">
                <h2 className="text-xl font-bold text-blue-400">Premium Membership Certificate</h2>
                <p className="text-gray-300">Lifetime Premium Badge Issued to All Verified Members ✅</p>
            </div>

            <div className="text-center space-y-1 text-gray-400 mt-10">
                <p>📧 Email: ediitingedition@gmail.com</p>
                <p>Telegram: editingedition_supportbot</p>
                <p>Instagram: editing___edition7</p>
                <p>Payment UPI: hariomgupta8538@axl</p>
            </div>

            <p className="text-xs text-gray-500">🚨 Limited Offer: Now Lifetime Membership ₹ 1,000 Only</p>
        </div>
    )
}
