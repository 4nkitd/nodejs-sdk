import order from "./order/order.js";
import upi from "./upi/upi.js";
import Api from "./utils/request.js";
import { verifyHash } from "./utils/utils.js";

export class Paytring extends Api{

    constructor(apiKey, apiSecret) {
        super(apiKey, apiSecret)
    }

    order = {
        create: order(this).create,
        
        fetch: order(this).fetch,
    }

    upi = {
        vpa: {
            validate: upi(this).validateVpa
        }
    }

    hash = {
        verify: verifyHash
    }
}

export default Paytring