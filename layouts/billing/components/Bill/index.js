/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import MDAlert from "components/MDAlert";

// @mui material components
import Card from "@mui/material/Card";

function CadastroUsuario() {
  const [cargo, setCargo] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [dataCad, setDate] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [senhaRep, setSenhaRepeat] = React.useState("");
  const [alert, setAlert] = React.useState(false);
  const [error, setError] = React.useState(false);

  const alertContent = (name) => (
    <MDTypography variant="body2" color="white">
      {name}
    </MDTypography>
  );

  const submit = () => {
    const data = {
      cargo,
      nome,
      dataCad,
      email,
      senha,
      senhaRep,
    };
    axios
      .post("http://localhost:5000/usuario", data)
      .then((datas) => (datas.status === 200 ? setAlert(true) : setError(true)))
      .catch((err) => (err ? setError(true) : setError(true)));
  };

  return (
    <Card sx={{ height: "100%" }}>
      <Card>
        {alert === true ? (
          (setTimeout(() => window.location.reload(), 3000),
          (
            <MDAlert color="success" dismissible>
              {alertContent("Cadastro realizado com sucesso")}
            </MDAlert>
          ))
        ) : (
          <span> </span>
        )}
        {error === true ? (
          (setTimeout(() => window.location.reload(), 2000),
          (
            <MDAlert color="error" dismissible>
              {alertContent("Erro ao cadastrar favor verificar os dados!!")}
            </MDAlert>
          ))
        ) : (
          <span> </span>
        )}
        <MDBox
          variant="gradient"
          bgColor="success"
          borderRadius="lg"
          coloredShadow="light"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            CADASTRO DE USUARIOS
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Necessario nome , e-mail e senha
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Cargo"
                variant="standard"
                fullWidth
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Nome"
                variant="standard"
                fullWidth
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="E-mail"
                variant="standard"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Senha"
                variant="standard"
                fullWidth
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <MDInput
                type="password"
                label="Repita sua Senha"
                variant="standard"
                fullWidth
                value={senhaRep}
                onChange={(e) => setSenhaRepeat(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="date"
                variant="standard"
                fullWidth
                value={dataCad}
                onChange={(e) => setDate(e.target.value)}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Eu aceito os&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Termos e Condições
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="success" fullWidth onClick={submit}>
                Cadastrar
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </Card>
  );
}

export default CadastroUsuario;
