import mongoose from 'mongoose';
// const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema({
   
    productName: {
        type: String
    },
    productImage: {
        type: String
    }

});

export default mongoose.models.product || mongoose.model('product', productSchema);