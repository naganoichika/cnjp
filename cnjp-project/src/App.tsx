import { useState } from 'react';
import './App.css'

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止页面刷新
    console.log('账号:', username);
    console.log('密码:', password);
    // 你可以在这里添加 API 调用，如 fetch('/api/login', { ... })
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: 300, margin: '0 auto' }}>
      <h2>登录</h2>
      
      <div>
        <label>账号：</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="请输入用户名"
        />
      </div>
      
      <div style={{ marginTop: 10 }}>
        <label>密码：</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="请输入密码"
        />
      </div>
      
      <button type="submit" style={{ marginTop: 20 }}>
        登录
      </button>
    </form>
  );
}



function App() {
  return (
    <>
      {/* Hello World!! */}
      <LoginForm />
    </>
  )
}

export default App
