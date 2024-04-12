import type { ElementType, ReactNode } from "react";
import Balancer from "react-wrap-balancer";

const RWBalancer = ({
  children,
  ratio,
  as,
}: {
  children?: ReactNode;
  ratio?: number;
  as?: ElementType;
}) => {
  return (
    <Balancer ratio={ratio} as={as}>
      {children}
    </Balancer>
  );
};

export { RWBalancer };
