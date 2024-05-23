import React, { FC } from "react";
import { IUserSingle } from "../../../interfaces/user";
import Layout from "../../layout/Layout";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const OneUserPage: FC<IUserSingle> = ({ user }) => {
  const router = useRouter();
  const backBtnHandler = () => {
    router.push("/users");
  };

  return (
    <Layout
      title={user.name}
      description={`detailed information about ${user.name}`}
    >
      <div className={styles["one-user-page__wrapper"]}>
        <div className="content-wrapper">
          <button className={styles["back-btn"]} onClick={backBtnHandler}>
            Back
          </button>
          <h1 className="h1-title">{user.name} detailed information</h1>
          <div className={styles["user-info__wrapper"]}>
            <p>
              <span>Username:</span> {user.username}
            </p>
            <p>
              <span>Email:</span> {user.email}
            </p>
            <p>
              <span>City:</span> {user.address.city}
            </p>
            <p>
              <span>Street:</span> {user.address.street}
            </p>
            <p>
              <span>Zipcode:</span> {user.address.zipcode}
            </p>
            <p>
              <span>Phone:</span> {user.phone}
            </p>
            <p>
              <span>Website:</span> {user.website}
            </p>
            <p>
              <span>Company name:</span> {user.company.name}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OneUserPage;
