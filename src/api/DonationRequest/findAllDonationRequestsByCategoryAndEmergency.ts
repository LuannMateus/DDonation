import { CancelTokenSource } from 'axios';
import { axios } from '../../utils/axios';

export const findAllDonationRequestsByCategoryAndEmergency = async (
  category: string,
  emergency: boolean,
  cancelToken?: CancelTokenSource,
) => {
  try {
    const res = await axios.get('/donationRequests/categoriesAndEmergencies', {
      params: {
        category,
        emergency,
      },
      cancelToken: cancelToken?.token,
    });

    const data = await res.data;

    return data;
  } catch (e) {
    console.log(e);
  }
};
