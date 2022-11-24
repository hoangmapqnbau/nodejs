const mongoose = require('mongoose');

async function Connect() {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/learn_nodejs_dev');
        console.log(" KẾT NỐI THÀNH CÔNG !!!")
    } catch (error) {
        console.log("KẾT NỐI THẤT BẠI!!!", error)
    }
}
module.exports = { Connect }