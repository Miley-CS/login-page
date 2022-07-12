import './Login.css';

function Login() {
  return (
    <div>
      <form>
        <label for="email">Email</label>
        <input type="text" name="email" id="email"/>
        <label for="pass">Password</label>
        <input type="text" name="pass" id="pass"/>
      </form>
      <button class="google">
        Login with Google
      </button>
      <button class="github">
        Login with GitHub
      </button>
      <button class="twitter">
        Login with Twitter
      </button>
      <button class="facebook">
        Login with Facebook
      </button>
    </div>
  );
}

export default Login;

