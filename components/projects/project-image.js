import { styled } from "@mui/material";

export const Pattern = styled("div") `
position: relative;
min-width: 250px;
overflow: hidden;
background-color: #7D7E7E;
background-image:
  linear-gradient(30deg, #BAC1C1 12%, transparent 12%, transparent 87%, #BAC1C1 87%, #BAC1C1),
  linear-gradient(150deg, #BAC1C1 12%, transparent 12%, transparent 87%, #BAC1C1 87%, #BAC1C1),
  linear-gradient(30deg, #BAC1C1 12%, transparent 12%, transparent 87%, #BAC1C1 87%, #BAC1C1),
  linear-gradient(150deg, #BAC1C1 12%, transparent 12%, transparent 87%, #BAC1C1 87%, #BAC1C1),
  linear-gradient(60deg, #B0B1B1 25%, transparent 25.5%, transparent 75%, #B0B1B1 75%, #B0B1B1), 
  linear-gradient(60deg, #B0B1B1 25%, transparent 25.5%, transparent 75%, #B0B1B1 75%, #B0B1B1);
background-size:40px 70px;
background-position: 0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px;
`
