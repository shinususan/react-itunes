import { Box, Card, CardContent, CardMedia, Hidden, Typography } from "@mui/material";

const Item = ({ kind, artistName, trackName, artworkUrl100 }: any) => {
  return (
    <>
      <Card sx={{ display: "flex", width: 1, justifyContent: "space-between", boxShadow: 3 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
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
          sx={{ width: 150, height: 150, overflow: "hidden", flexShrink: 0 }}
          image={artworkUrl100}
          alt=""
        />
      </Card>
    </>
  );
};

export default Item;
