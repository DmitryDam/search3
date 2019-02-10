import React from "react";
import Medal from "./Medal";
import imgMedal1 from "../img/1st.svg";
import imgMedal2 from "../img/2nd.svg";
import imgMedal3 from "../img/3rd.svg";
import s from "./Styles.module.css";

const Users = ({ name, count_pub, pageviews, idx, medal1, medal2, medal3 }) => (
  <div className={s.product}>
    <div className={s.nameBlock}>
      <p className={s.itemNumber}> {idx + 1}</p>
      <p className={s.itemFirstLetter}> {name.slice(0, 1)}</p>
      <div>
        <h3 className={s.name}> {name}</h3>
        <p className={s.countPub}>{count_pub} публ.</p>
      </div>
    </div>
    <div className={s.medal}>
      {pageviews === medal1.pageviews && (
        <Medal image={imgMedal1} width={40} height={40} />
      )}
      {pageviews === medal2.pageviews && (
        <Medal image={imgMedal2} width={40} height={40} />
      )}
      {pageviews === medal3.pageviews && (
        <Medal image={imgMedal3} width={40} height={40} />
      )}
    </div>
    <h3 className="name">
      {String(pageviews).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}
    </h3>
  </div>
);

export default Users;
