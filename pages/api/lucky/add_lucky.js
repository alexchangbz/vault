import { connectDatabase } from "../../../helpers/db-utils"

export default async function AddName (req, res) {
    const client = await connectDatabase()
    const luckyCollection = client.db().collection("luckydraw")

    try {
        const data = req.body
        const { name } = data

        await luckyCollection.insertOne({ name: name })

        client.close()
        res.json({ success: true })
    } catch (error) {
        res.json({ success: false, error })
    }
}