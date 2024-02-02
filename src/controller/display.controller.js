import { ApiError, ApiResponse, asyncHandler} from "../utils/index.js";
import { Display } from "../db/model/index.js";
import axios from "axios";

class Profile {
    fetchAll = asyncHandler(async (req, res, next) => {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const data = Object.values(response.data);
        const entries = data.slice(0, 10);

        await Display.deleteMany({}); // clear the collection

        for (const item of entries) {
            await Display.create({
                name: item.symbol,
                last: item.last,
                buy: item.buy,
                sell: item.sell,
                volume: item.volume,
                base_unit: item.base_unit,
            });
        }


        return res.json(
            new ApiResponse(200,entries,"Data fetched successfully")
        )
    });

    getAllData = asyncHandler(async (req, res, next) => {
        const data = await Display.find({});
        data.shift();
        return res.json(
            new ApiResponse(200,data,"Data fetched successfully")
        )
    });
}

export default Profile;