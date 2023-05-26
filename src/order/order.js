import { createHash } from "../utils/utils.js";

export default (api) => {
   const {post, key, secret} = api
   return {
      create: async(order) => {
         const endpoint = '/order/create';
         const reqBody = {
            ...order,
            key
         }
         return await post(endpoint, reqBody)
      },
      fetch: async(orderId) => {
         const endpoint = '/order/fetch';
         const reqBody = {
            key,
            id: orderId
         }
         return await post(endpoint, reqBody);
      }
   }
}