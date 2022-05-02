import { axios } from '../../utils/axios';

export const findDonationRequestById = async (id: string) => {
  try {
    const res = await axios.get(`/donationRequests/${id}`);

    const data = await res.data;

    return data;
  } catch (e) {
    console.log(e);
  }
};
