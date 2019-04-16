import React from "react";
import UserPanel from "../auth/UserPanel";
import SVG from "../../Shared/Svg/svg";
import { options } from "../../Shared/Svg/options";
import { Link } from "react-router-dom";
import "./styles.scss";

const { CABINET, BUCKET } = options;

const HeaderRight = props => {
  const { logout, user, bucketitems, openModal } = props;

  return (
    <div className="header-right">
      <div className="user-auth">
        {user.status === "User" ? (
          <UserPanel logout={logout} user={user.user} />
        ) : (
          <div className="user-controls" onClick={openModal}>
            <SVG path={CABINET} viewbox="0 0 36 32" height="23" width="23" />
          </div>
        )}
      </div>

      <div className="user-bucket">
        <Link to="/bucket">
          <SVG path={BUCKET} viewbox="0 0 32 32" height="23" width="23" />
        </Link>
        {bucketitems.length !== 0 ? <div className="bucket-count">{bucketitems.length}</div> : null}
      </div>
    </div>
  );
};

export default HeaderRight;
