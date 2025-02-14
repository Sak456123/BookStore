import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button 
          component={Link} // ✅ Fixed prop name
          to="/books"
          sx={{ marginTop: 15, backgroundColor: "orangered", "&:hover": { backgroundColor: "darkorange" } }} 
          variant="contained"
        >
          <Typography variant="h3">View All Products</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
