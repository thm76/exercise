export type Resource<Type> = {
  loading: boolean;
  error?: any;
  data?: Type;
};
