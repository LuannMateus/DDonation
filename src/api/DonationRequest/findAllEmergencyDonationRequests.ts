import { CancelTokenSource } from 'axios';
import { axios } from '../../utils/axios';

export const findAllEmergencyDonationRequests = async (
  cancelToken?: CancelTokenSource,
) => {
  try {
    const res = await axios.get('/donationRequests/emergencies', {
      cancelToken: cancelToken?.token,
    });

    const data = await res.data;

    return data;
  } catch (e) {
    console.log(e);
  }
};
