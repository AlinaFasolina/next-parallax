import { GetStaticProps, NextPage } from "next";
import { IUserSingle } from "../../interfaces/user";
import { userService } from "../../services/UserService";
import OneUserPage from "../../components/screens/OneUserPage/OneUserPage";

const UserPage: NextPage<IUserSingle> = ({ user }) => {
  return <OneUserPage user={user} />;
};

export const getStaticPaths = async () => {
  const res = await userService.getUsers();
  const users = res.map((item) => ({ params: { id: item.id.toString() } }));
  return {
    paths: users,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<IUserSingle> = async ({
  params,
}) => {
  const user = await userService.getUserById(String(params?.id));
  return {
    props: { user },
    revalidate: 10,
  };
};

export default UserPage;
