import { useState } from 'react'
import loginFields from "../constants/loginField";
import Input from "../component/Input";
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'


const fields = loginFields;
let fieldsState: any = {};
fields.map(field => {
    fieldsState[field.id] = '';
})

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);

    const save = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        save_fetch()
    }
    async function save_fetch() {
        const payload = await JSON.stringify(loginState)
        const data = await fetch("http://localhost:8080/user", {
            method: "POST",
            body: payload,
            headers: { 'Content-Type': 'application/json' }
        })
        const data_jsoned = await data.json()
        return data_jsoned;
    }
    const retrieve = () => {
        get_fetch();
    }

    async function get_fetch() {

        const data = await fetch("http://localhost:8080/user");
        const data_jsoned = await data.json()
        setLoginState(data_jsoned[data_jsoned.length - 1])
        return data_jsoned;
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginState({ ...loginState, [e.target?.name]: e.target?.value })
    }
    return (
        <Grid container spacing={3} xs={12} sm={8} md={6} mt={20} justify-center direction='column' justifyContent={"center"} alignItems={'center'}>
            <Grid item>
                <Grid container rowSpacing={3} direction='column' >
                    {
                        fields.map(field =>
                            <Grid item>
                                <Input
                                    handleChange={handleChange}
                                    key={field.id}
                                    value={loginState[field.id]}
                                    labelText={field.labelText}
                                    labelFor={field.labelFor}
                                    id={field.id}
                                    name={field.name}
                                    type={field.type}
                                    isRequired={field.isRequired}
                                    placeholder={field.placeholder}
                                />
                            </Grid>
                        )
                    }
                </Grid>
            </Grid>
            <Grid item>
                <Grid container spacing={3}>
                    <Grid item>
                        <Button onClick={(e) => save(e)} variant="contained" >Save</Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={() => retrieve()} variant="outlined">Retrieve</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}