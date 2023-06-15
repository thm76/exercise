import { Resource } from "@models/resource.model";
import { FunctionComponent, ReactNode } from "react";

type LoadingWrapperProps = {
  resource: Resource<any>;
  children: ReactNode;
};
export const LoadingWrapper: FunctionComponent<LoadingWrapperProps> = (
  props
) => {
  return props.resource.loading ? (
    <div>Loading</div>
  ) : props.resource.error ? (
    <div>Error: {props.resource.error}</div>
  ) : (
    <div>{props.children}</div>
  );
};
