import { FC } from "react";
import styles from "./styles.module.scss";
import Layout from "../../layout/Layout";
import { IUsersArr } from "../../../interfaces/user";
import { useRouter } from "next/router";

const UsersPage: FC<IUsersArr> = ({ users }) => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/user/${id}`);
  };

  return (
    <Layout title="Users page" description="Users page">
      <div className={styles["users-page-wrapper"]}>
        <div className="content-wrapper">
          <h1 className="h1-title">Users list</h1>
          {users.length ? (
            users.map((item) => (
              <div
                className={styles["user-card"]}
                onClick={() => handleClick(item.id)}
              >
                <p className={styles["user-name"]}>{item.name}</p>
                <p className={styles["user-phone"]}>{item.phone}</p>
                <p>{item.email}</p>
              </div>
            ))
          ) : (
            <h1>users not found</h1>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default UsersPage;
