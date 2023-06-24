import { HttpService } from '../https';
import { prepareErrorResponse, prepareResponseObject } from '../../utils/api';
import { RESPONSE_TYPES } from '../../constants/response-types';

export class ProductDescriptionService extends HttpService {
 
  getCategoriesDescriptionApiCall = async (baseUrl: string,key:string): Promise<any>  => {
    try {
  
      const url = baseUrl + key;
      console.log({url});
      const apiResponse = await this.get(`${url}`);
      
      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };
  


}
