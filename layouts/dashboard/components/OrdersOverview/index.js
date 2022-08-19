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
import MDAlert from "components/MDAlert";

// @mui material components
import Card from "@mui/material/Card";
import axios from "axios";

function CadastroChave() {
  const [nomeChave, setNomeChave] = React.useState("");
  const [usuario, setUsuario] = React.useState("");
  const [data, setData] = React.useState("");
  const [alert, setAlert] = React.useState(false);
  const [error, setError] = React.useState(false);

  const alertContent = (name) => (
    <MDTypography variant="body2" color="white">
      {name}
    </MDTypography>
  );

  const clickei = () => {
    const date = {
      nomeChave,
      usuario,
      data,
    };
    axios
      .post("http://localhost:5000/nova", date)
      .then((datas) => (datas.status === 200 ? setAlert(true) : setError(true)))
      .catch((err) => (err ? setError(true) : setError(true)));
  };

  return (
    <Card sx={{ height: "100%" }}>
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
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            CADASTRO DE CHAVES
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Entre com o nome da chave(a sala que se refere)
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="User"
                variant="standard"
                fullWidth
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Nome Chave"
                variant="standard"
                fullWidth
                value={nomeChave}
                onChange={(e) => setNomeChave(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="date"
                variant="standard"
                fullWidth
                value={data}
                onChange={(e) => setData(e.target.value)}
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
              <MDButton variant="gradient" color="info" fullWidth onClick={clickei}>
                Cadastrar
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </Card>
  );
}

export default CadastroChave;
