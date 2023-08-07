import styled from "styled-components";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useState } from "react";

const ShowStars = () => {
    const [score, setScore] = useState(0);

    const changeHandler = (e, newScore) => {
        setScore(newScore);
    };

    return (
        <Stack spacing={1}>
          <Rating
            name="half-rating" defaultValue={0.0} precision={0.5} score={score}
            onChange={changeHandler}
          />
        </Stack>
    );
};

export default ShowStars;

