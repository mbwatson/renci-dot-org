// import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import style from "../layout/section/section.module.css";
import Markdown from "react-markdown";
import Image from "next/image";

export const TextAndImage = ({ data }) => {
  return (
    <Grid container spacing={2} columns={8} marginBottom='3rem' marginTop='3rem'>
        <Grid item xs={8} sm={3}>
            <Image
                priority
                src={data.Image.data.attributes.url}
                width={data.Image.data.attributes.width} 
                height={data.Image.data.attributes.height} 
                layout="responsive"
             />
        </Grid>
        <Grid item xs={8} sm={5}>
            <Markdown className={style.chiefScientistBio} linkTarget="_blank" style={{margin: 0}}>{data.Text}</Markdown>
        </Grid>
    </Grid>
  );
};
