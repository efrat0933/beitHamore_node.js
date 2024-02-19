
export const addProduct = async function(req, res, next) {
    // const db = getDb();
    // const doc = await db.collection('products').insertOne(req.body)
    res.send('save');
}


const getAllCourses = async (req, res) => {
    //params -חובה
    //query params
    // http://localhost:4200/cake/1
    // http://localhost:4200/cake?price=50&category=70
    // http://localhost:4200/cake?search=ava

    let { search } = req.query;
    let perPage = req.query.perPage || 40;
    let page = req.query.page || 1;


    //let ex = /ava{1,6}$/
    let ex1 = new RegExp(`${search}`)//המחרוזת תיהיה חייבת להסתיים ב


    try {
        let filter = {};
        if (search)
            filter.name = ex1;//{ name: ex1 }


        let allCourses = await Course.find(filter)
            .skip((page - 1) * perPage)//לדלג על כמות תואצות מסויימת
            .limit(perPage);//שולח כמות מוגבלת של נתונים

        res.json(allCourses);
    }
    catch (err) {
        res.status(400).json({ type: "error", message: err.message })
    }
}


