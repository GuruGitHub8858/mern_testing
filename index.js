import dotenv from 'dotenv'
import db from './Db/db.js'
dotenv.config();
db();
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`my server is running in ${PORT}`);
})