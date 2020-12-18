import { useState } from "react";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { IconButton, makeStyles } from "@material-ui/core";
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";

export default function Home() {
    const [source, setSource] = useState("");
    const handleCapture = (target) => {
        if (target.files) {
            if (target.files.length !== 0) {
                const file = target.files[0];
                const newUrl = URL.createObjectURL(file);
                setSource(newUrl);
            }
        }
    };
    return (
        <div className={styles.container}>
            <Nav />
            <main>
                <div>
                    <Grid container>
                        <Grid item xs={12}>
                            <h5>Capture your image</h5>
                            {source && (
                                <Box
                                    display='flex'
                                    justifyContent='center'
                                    border={1}
                                >
                                    <img
                                        src={source}
                                        alt={"snap"}
                                        width={300}
                                        height={512}
                                    ></img>
                                </Box>
                            )}
                            <input
                                accept='image/*'
                                id='icon-button-file'
                                type='file'
                                capture='environment'
                                onChange={(e) => handleCapture(e.target)}
                                style={{ display: "none" }}
                            />
                            <label htmlFor='icon-button-file'>
                                <IconButton
                                    color='primary'
                                    aria-label='upload picture'
                                    component='span'
                                >
                                    <PhotoCameraRoundedIcon
                                        fontSize='large'
                                        color='primary'
                                    />
                                </IconButton>
                            </label>
                        </Grid>
                    </Grid>
                </div>
            </main>
        </div>
    );
}
