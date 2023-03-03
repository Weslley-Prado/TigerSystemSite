import { Loader } from "components/common";
import { signIn, useSession } from "next-auth/client";

interface RouteAuthenticatedProps {
  children: React.ReactNode;
}
export const RouteAuthenticated: React.FC<RouteAuthenticatedProps> = ({
  children,
}) => {
  const [session, loading] = useSession();

  if (loading) {
    return <Loader show />;
  }

  if (!session && !loading) {
    signIn();
    return null;
  }

  return <div>{children}</div>;
};
