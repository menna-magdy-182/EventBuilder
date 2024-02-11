export interface ICategory {
  title: string;
  id: number;
  image: string;
}

export interface ICategoryProduct {
  id: number;
  title: string;
  minBudget: number;
  maxBudget: number;
  avgBudget: number;
  image: string;
}
