import { GetStaticProps, NextPage } from "next";
import { IUsersArr } from "../interfaces/user";
import { userService } from "../services/UserService";
import UsersPage from "../components/screens/Users/Users";

const Users: NextPage<IUsersArr> = ({ users }) => {
  return <UsersPage users={users} />;
};

export const getStaticProps: GetStaticProps<IUsersArr> = async () => {
  const users = await userService.getUsers();
  return {
    props: { users },
  };
};

export default Users;
