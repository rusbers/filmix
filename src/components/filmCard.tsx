import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
  Box,
} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { API } from '../network/api';

function FilmCard({
  posterPath,
  filmTitle,
  voteAverage,
}: {
  posterPath: string;
  filmTitle: string;
  voteAverage: number;
}) {
  return (
    <Card component="article" sx={{ height: '300px' }}>
      <Box display="flex" height="100%">
        <CardMedia
          component="img"
          sx={{
            width: '50%',
            maxWidth: '100%',
          }}
          src={`${API.IMAGE_SERVER_URL}${posterPath}`}
        />
        <Box p={1} display="flex" alignItems="flex-start" flexDirection="column" width="50%">
          <Box display="flex" alignItems="center" width="100%" justifyContent="space-between">
            <Typography>Рейтинг: {voteAverage}</Typography>
            <CardActions>
              <IconButton aria-label="Сохранить фильм в избранные" sx={{ p: 0 }}>
                <StarBorderIcon />
              </IconButton>
              <IconButton aria-label="сохранить в закладки" sx={{ p: 0 }}>
                <BookmarkBorderIcon />
              </IconButton>
            </CardActions>
          </Box>
          <CardContent sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', p: 0 }}>
            <Typography component="h3">{filmTitle}</Typography>
          </CardContent>
          <Box
            flexGrow={1}
            display="flex"
            alignItems="flex-end"
            justifyContent="flex-start"
            width="100%"
          >
            <Button fullWidth sx={{ justifyContent: 'flex-start' }}>
              Подробнее
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export { FilmCard };
