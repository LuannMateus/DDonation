import { TDonorCreditCard } from '../../models/DonorCreditCard';
import { axios } from '../../utils/axios';

export const createDonorCreditCard = async (
  donorCreditCard: TDonorCreditCard,
) => {
  try {
    await axios.post('/donorCreditCards', donorCreditCard);
  } catch (e) {
    console.log(e);
  }
};
