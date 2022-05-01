import { TDonorCreditCard } from '../../models/DonorCreditCard';
import { Http } from '../../utils/http';

export const updateDonorCreditCardById = async (
  id: string,
  donorCreditCard: TDonorCreditCard,
) => {
  try {
    const json = await Http.patch<TDonorCreditCard>(
      `/donorCreditCards/${id}`,
      donorCreditCard,
    );

    return json;
  } catch (e) {
    console.log(e);
  }
};
