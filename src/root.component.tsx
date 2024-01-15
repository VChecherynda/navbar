import { useEffect, useState } from "react";
const { Avatar, UserOutlined, Typography, Button } = require("@home/components");

const api = require('@home/api');

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 24,
    paddingLeft: 24,
  },
  user: {
    display: 'flex'
  },
  userAva: {
    marginRight: '12px'
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '12px'
  }
}

export default function Root(props) { 
  const [userData, setUserData] = useState(undefined);

  const handleLogin = async () => {
    const loginUserData = await api.login();
    setUserData(loginUserData)
  }

  const handleLogout = () => {
    const loginUserData = api.logout();
    setUserData(loginUserData)
  }

  useEffect(() => {
    const loginUserData = api.getLoginUser();

    if (loginUserData) {
      setUserData(loginUserData)
    }
  }, [])

  return (
    <section style={styles.navbar}>
      <p>Logo</p>

      <div>
        {userData ? 
          <div style={styles.user}>
            <Avatar style={styles.userAva} size={32} icon={<UserOutlined />} />
            <Typography style={styles.userName}>{userData.name}</Typography>
            <Button type="primary" onClick={handleLogout}>Logout</Button>
          </div>:
          <Button type="primary" onClick={handleLogin}>Login</Button>
        }
      </div>
    </section>
  );
}
