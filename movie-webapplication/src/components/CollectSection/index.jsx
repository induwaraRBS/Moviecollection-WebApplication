import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./collectsection.css";
import MovieCards from "../MovieCards/index";
import contents from "../content";

const index = () => {
  return (
    <div className="CollectionSection">
      <div className="Collection-Header">
        <div className="Left-Section">
          <b>
            <h1>Collect your favourites</h1>
          </b>
        </div>
        <div className="Right-Section">
          <Box
            sx={{
              width: 600,
              maxWidth: '100%',
              backgroundColor: 'gray',
            }}
          >
            <TextField
              fullWidth
              label="Search title and add to grid"
              id="fullWidth"
              sx={{
                backgroundColor: 'gray', 
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', 
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', 
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white', 
                  },
                  input: {
                    backgroundColor: 'gray', 
                    color: 'white', 
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'white', 
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'white',
                },
              }}
            />
          </Box>
        </div>
      </div>
      <hr className="Collection-Breaker" />
      <div className="Collection-Body">
        {contents.map((contents) => (
          <MovieCards
            key={contents.id}
            image={contents.image}
            name={contents.Moviename}
            details={contents.Details}
          />
        ))}
      </div>
    </div>
  );
};

export default index;
