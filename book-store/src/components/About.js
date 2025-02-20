import React from "react";
import { Box, Typography } from "@mui/material";  // ✅ Import Box & Typography

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx= {{ fontFamily:"fantasy"}} variant="h2">This is a CRUD Application</Typography>
        <Typography sx= {{ fontFamily:"fantasy"}} variant="h3">By MERN Stack</Typography>
      </Box>
    </div>
  );
};

export default About;
