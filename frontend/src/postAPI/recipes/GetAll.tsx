import axios from "axios";
import { AllRecipeResp, backUrl } from "../Common";

const GetRecipes = async function(): Promise<AllRecipeResp> {
    const response = await axios.get(backUrl + "/recipes");
    return {
        status: response.status,
        content: response.data
    };
}

export default GetRecipes