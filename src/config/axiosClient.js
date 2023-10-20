import axios from 'axios';
const clienteAxiosPublic = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/`
});
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmRkMDdkMjdiYjNjMjczMzdmODkwMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzY1ODc1OSwiZXhwIjoxNjk3NzQ1MTU5fQ.ElCYv2CW_S__QLGXi0RsVdcM6zJlRdS6yXGWokrJlOk"
const userRequest = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}//api/`,
    header: {token: `Bearer ${token}`}
})


export {clienteAxiosPublic, userRequest};