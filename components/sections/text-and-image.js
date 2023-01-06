// import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import style from "../layout/section/section.module.css";
import Markdown from "react-markdown";
import Image from "next/image";

export const TextAndImage = ({ data }) => {
  return (
    <Grid container spacing={2} columns={8} marginBottom='3rem' marginTop='3rem'>
        <Grid item xs={8} sm={2}>
            <Image
                priority
                src={data.Image.data.attributes.url}
                width={data.Image.data.attributes.width} 
                height={data.Image.data.attributes.height} 
                layout="responsive"
             />
        </Grid>
        <Grid item xs={8} sm={6} >
            <Markdown linkTarget="_blank">{data.Text}</Markdown>
        </Grid>
    </Grid>
  );
};
