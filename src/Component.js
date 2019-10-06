import React from "react";
import Typography from "@material-ui/core/Typography";

class AboutScreen extends React.Component {
  render() {
    return (
      <Typography variant="h2" color="inherit">
        <h2>teste</h2>
        <Typography>
          <div>outro1</div>
        </Typography>
        {t("About us")}
      </Typography>
    );
  }
}

export default AboutScreen;
