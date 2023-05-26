import { createHash } from "../utils/utils.js";

export default(api) => {
    return {
        validateVpa: async(vpa) => {
            const endpoint = 'upi/validate';
            const reqBody = {
                key: api.key,
                vpa
            }
            return api.post(endpoint, reqBody)
        }
    }
}