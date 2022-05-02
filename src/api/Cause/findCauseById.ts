import { CancelTokenSource } from 'axios';
import { axios } from '../../utils/axios';

export const findCauseById = async (
  id: string,
  cancelToken?: CancelTokenSource,
) => {
  try {
    const res = await axios.get(`/causes/${id}`, {
      cancelToken: cancelToken?.token,
    });

    const data = await res.data;

    return data;
  } catch (e) {
    console.log(e);
  }
};
