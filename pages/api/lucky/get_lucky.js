import { connectDatabase } from "../../../helpers/db-utils";

export default async function AddName (req, res) {
    const client = await connectDatabase()
    const luckyCollection = client.db().collection("luckydraw")

    try {
        const luckydraws = await luckyCollection.find({}).project({ _id: 0 }).toArray()

        client.close()
        res.json({ success: true, luckydraws })
    } catch (error) {
        res.json({ success: false, error })
    }
}