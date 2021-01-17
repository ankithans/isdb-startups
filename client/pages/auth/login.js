import { useState } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import TextBox from "../../components/TextBox";
import LoginHeader from "../../components/LoginHeader";
import Link from "next/link";
import axios from "axios";
import Loader from "react-loader-spinner";
import Button from "../../components/Button";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";

export default function Login() {
  const { addToast } = useToasts();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await axios.post(
        "https://isdb-startup.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      addToast(`Welcome ${response.data.name}! Login successfull`, {
        appearance: "success",
        autoDismiss: true,
      });

      setLoading(false);

      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data.id);
      router.push("/home/dashboard");
    } catch (err) {
      addToast("Server Error!", {
        appearance: "error",
        autoDismiss: true,
      });
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <Center bg='gray.50' alignItems='center' justifyContent='center' h='100vh'>
      <Box bg='gray.50' p='10' rounded='md' w='500px'>
        <form onSubmit={login}>
          <img
            className='pl-2 w-28'
            src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5MC42NjcgNDkwLjY2NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9IiIgZD0iTTUzLjMzMywxMzguNjY3aDM4NGMyOS40NTUsMCw1My4zMzMsMjMuODc4LDUzLjMzMyw1My4zMzN2MTA2LjY2NyAgYzAsMjkuNDU1LTIzLjg3OCw1My4zMzMtNTMuMzMzLDUzLjMzM2gtMzg0QzIzLjg3OCwzNTIsMCwzMjguMTIyLDAsMjk4LjY2N1YxOTJDMCwxNjIuNTQ1LDIzLjg3OCwxMzguNjY3LDUzLjMzMywxMzguNjY3eiIgZmlsbD0iIzMxODJjZSIgZGF0YS1vcmlnaW5hbD0iI2ZmYzEwNyIgY2xhc3M9IiI+PC9wYXRoPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPHBhdGggc3R5bGU9IiIgZD0iTTk2LDMwOS4zMzNjLTUuODkxLDAtMTAuNjY3LTQuNzc2LTEwLjY2Ny0xMC42NjdWMTkyYzAtNS44OTEsNC43NzYtMTAuNjY3LDEwLjY2Ny0xMC42NjcgICBjNS44OTEsMCwxMC42NjcsNC43NzYsMTAuNjY3LDEwLjY2N3YxMDYuNjY3QzEwNi42NjcsMzA0LjU1OCwxMDEuODkxLDMwOS4zMzMsOTYsMzA5LjMzM3oiIGZpbGw9IiNlOGYwZjMiIGRhdGEtb3JpZ2luYWw9IiM0NTVhNjQiIGNsYXNzPSIiPjwvcGF0aD4KCTxwYXRoIHN0eWxlPSIiIGQ9Ik0yMjQsMzA5LjMzM2MtNS44OTEsMC0xMC42NjctNC43NzYtMTAuNjY3LTEwLjY2N3YtOTZoLTEuOTJMMTkxLjc4NywzMDAuOCAgIGMtMS4xNzIsNS43NzMtNi44MDMsOS41MDMtMTIuNTc2LDguMzMxYy00LjE5OC0wLjg1Mi03LjQ3OC00LjEzMy04LjMzMS04LjMzMWwtMTkuNjI3LTk4LjEzM2gtMS45MnY5NiAgIGMwLDUuODkxLTQuNzc2LDEwLjY2Ny0xMC42NjcsMTAuNjY3UzEyOCwzMDQuNTU4LDEyOCwyOTguNjY3VjE5MmMwLTUuODkxLDQuNzc2LTEwLjY2NywxMC42NjctMTAuNjY3SDE2MCAgIGM1LjA3LTAuMDAxLDkuNDM5LDMuNTY2LDEwLjQ1Myw4LjUzM2wxMC44OCw1NC40bDEwLjg4LTU0LjRjMS4wMTQtNC45NjcsNS4zODQtOC41MzQsMTAuNDUzLTguNTMzSDIyNCAgIGM1Ljg5MSwwLDEwLjY2Nyw0Ljc3NiwxMC42NjcsMTAuNjY3djEwNi42NjdDMjM0LjY2NywzMDQuNTU4LDIyOS44OTEsMzA5LjMzMywyMjQsMzA5LjMzM3oiIGZpbGw9IiNlOGYwZjMiIGRhdGEtb3JpZ2luYWw9IiM0NTVhNjQiIGNsYXNzPSIiPjwvcGF0aD4KCTxwYXRoIHN0eWxlPSIiIGQ9Ik0yODgsMzA5LjMzM2gtMjEuMzMzYy01Ljg5MSwwLTEwLjY2Ny00Ljc3Ni0xMC42NjctMTAuNjY3VjE5MmMwLTUuODkxLDQuNzc2LTEwLjY2NywxMC42NjctMTAuNjY3ICAgSDI4OGMxNy42NzMsMCwzMiwxNC4zMjcsMzIsMzJ2NjRDMzIwLDI5NS4wMDYsMzA1LjY3MywzMDkuMzMzLDI4OCwzMDkuMzMzeiBNMjc3LjMzMywyODhIMjg4YzUuODkxLDAsMTAuNjY3LTQuNzc2LDEwLjY2Ny0xMC42NjcgICB2LTY0YzAtNS44OTEtNC43NzYtMTAuNjY3LTEwLjY2Ny0xMC42NjdoLTEwLjY2N1YyODh6IiBmaWxsPSIjZThmMGYzIiBkYXRhLW9yaWdpbmFsPSIjNDU1YTY0IiBjbGFzcz0iIj48L3BhdGg+Cgk8cGF0aCBzdHlsZT0iIiBkPSJNMzUyLDMwOS4zMzNjLTUuODkxLDAtMTAuNjY3LTQuNzc2LTEwLjY2Ny0xMC42NjdWMTkyYzAtNS44OTEsNC43NzYtMTAuNjY3LDEwLjY2Ny0xMC42NjcgICBjNS44OTEsMCwxMC42NjcsNC43NzYsMTAuNjY3LDEwLjY2N3YxMDYuNjY3QzM2Mi42NjcsMzA0LjU1OCwzNTcuODkxLDMwOS4zMzMsMzUyLDMwOS4zMzN6IiBmaWxsPSIjZThmMGYzIiBkYXRhLW9yaWdpbmFsPSIjNDU1YTY0IiBjbGFzcz0iIj48L3BhdGg+Cgk8cGF0aCBzdHlsZT0iIiBkPSJNMzczLjMzMywzMDkuMzMzYy0xNy42NzMsMC0zMi0xNC4zMjctMzItMzJ2LTQyLjY2N2MwLTE3LjY3MywxNC4zMjctMzIsMzItMzJzMzIsMTQuMzI3LDMyLDMyICAgdjQyLjY2N0M0MDUuMzMzLDI5NS4wMDYsMzkxLjAwNiwzMDkuMzMzLDM3My4zMzMsMzA5LjMzM3ogTTM3My4zMzMsMjI0Yy01Ljg5MSwwLTEwLjY2Nyw0Ljc3Ni0xMC42NjcsMTAuNjY3djQyLjY2NyAgIGMwLDUuODkxLDQuNzc2LDEwLjY2NywxMC42NjcsMTAuNjY3UzM4NCwyODMuMjI0LDM4NCwyNzcuMzMzdi00Mi42NjdDMzg0LDIyOC43NzYsMzc5LjIyNCwyMjQsMzczLjMzMywyMjR6IiBmaWxsPSIjZThmMGYzIiBkYXRhLW9yaWdpbmFsPSIjNDU1YTY0IiBjbGFzcz0iIj48L3BhdGg+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=='
          />
          <Link href='/auth/signup'>
            <a>
              <LoginHeader
                title="Don't have an account?"
                subtitle='Sign up here'
              />
            </a>
          </Link>
          <TextBox
            id='email-address'
            type='email'
            label='Email Address'
            autoComplete='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextBox
            id='password'
            type='password'
            label='Password'
            autoComplete='current-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {loading ? (
            <Loader
              className='w-full flex justify-center'
              type='Oval'
              color='#00BFFF'
              height={40}
              width={40}
              timeout={3000}
            />
          ) : (
            <Button type='submit' label='Sign in' svgBool={true} />
          )}
        </form>
      </Box>
    </Center>
  );
}
