import React from "react";
import Typography from "@material-ui/core/Typography";

const AboutScreen = props => (
  <a title="teste" variant="h2" color="inherit">
    <h2>teste</h2>
    <Typography>
      <div>outro1</div>
    </Typography>
    {t("About us")}
  </a>
);

export default AboutScreen;
