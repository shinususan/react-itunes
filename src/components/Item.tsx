import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const Item = ({ kind, artistName, trackName, artworkUrl100 }: any) => {
  return (
    <>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {trackName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {artistName}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={artworkUrl100}
          alt=""
        />
      </Card>
    </>
  );
};

export default Item;
