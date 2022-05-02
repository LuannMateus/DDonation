import { CancelTokenSource } from 'axios';
import { axios } from '../../utils/axios';

export const findAllDonationRequestsByCategory = async (
  category: string,
  cancelToken?: CancelTokenSource,
) => {
  try {
    const res = await axios.get(`/donationRequests/categories/${category}`, {
      cancelToken: cancelToken?.token,
    });

    const data = await res.data;

    return data;
  } catch (e) {
    console.log(e);
  }
};
