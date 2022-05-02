export type TDonationRequest = {
  id: string;
  title: string;
  description: string;
  image: string;
  ownerId: string;
  daysRemaining: number;
  category: string;
  emergency: boolean;
  target: number;
  reached: number;
};
