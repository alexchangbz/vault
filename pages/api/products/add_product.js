import { connectDatabase } from "../../../helpers/db-utils"

export default async function AddName (req, res) {
    const client = await connectDatabase()
    const productCollection = client.db().collection("products")

    try {
        const data = req.body

        // console.log(data)

        await productCollection.insertOne(data)

        client.close()
        res.json({ success: true })
    } catch (error) {
        res.json({ success: false, error })
    }
}