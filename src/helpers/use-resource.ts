import { Resource } from "@models/resource.model";
import { useCallback, useEffect, useState } from "react";

export const useResource = <Type>(
  input: RequestInfo | URL,
  init?: RequestInit
): [Resource<Type>, () => void] => {
  const [resource, setResource] = useState<Resource<Type>>({ loading: true });

  const refresh = useCallback(() => {
    fetch(input, init)
      .then((response) => {
        console.log("Status:", response.status, response.statusText)
        if (response.ok) {
          return response.text();
        }
        throw new Error(response.statusText);
      })
      .then((body) => {
        try {
          const data = JSON.parse(body) as Type;
          setResource({ loading: false, error: undefined, data });
        } catch {
          setResource({ loading: false, data: body as Type });
        }
      })
      .catch((error) => {
        setResource({ loading: false, data: undefined, error });
      });
  }, [input, init]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return [resource, refresh];
};
