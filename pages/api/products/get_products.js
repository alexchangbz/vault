import { connectDatabase } from "../../../helpers/db-utils";

export default async function AddName (req, res) {
    const client = await connectDatabase()
    const productCollection = client.db().collection("products")

    try {
        const products = await productCollection.find({}).project({ _id: 0 }).toArray()

        // console.log(products)

        client.close()
        res.json({ success: true, products })
    } catch (error) {
        res.json({ success: false, error })
    }
}