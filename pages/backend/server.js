const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://<YOUR_MONGO_URI>', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
});
const User = mongoose.model('User', UserSchema);

app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await User.create({ name, email, password: hashedPassword });
        res.json({ status: 'ok' });
    } catch (err) {
        res.json({ status: 'error', error: 'Duplicate email' });
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.json({ status: 'error', error: 'Invalid login' });

    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign(
            { name: user.name, email: user.email },
            'secret123'
        );
        return res.json({ status: 'ok', token });
    }
    res.json({ status: 'error', error: 'Invalid login' });
});

app.listen(5000, () => console.log('Backend Running on 5000'));
