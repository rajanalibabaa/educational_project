import React from 'react';
import { Grid, CardMedia, Typography, Box, Paper, useTheme, useMediaQuery } from '@mui/material';

const  Gallery = () => {

   const galleryItems = [
    {
      title: 'Explore Nature',
      description: 'Discover the beauty of the natural world',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Tech Innovations',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Ave Adventures',
      image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Artistic Expressions',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Sports & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Sports & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Sports & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Sports & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Sports & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Sports & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Sports & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Sports & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Explore Nature',
      description: 'Discover the beauty of the natural world',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Tech Innovations',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Ave Adventures',
      image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Artistic Expressions',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Sports & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Sports & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Sports & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Sports & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Sports & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Sports & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Sports & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
    {
      title: 'Sports & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384',
      
    },
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // mobile screen

  return (
<<<<<<< HEAD
    <Box className="gallery-root" width={600} height={500} >
      <Grid container className="gallery-grid" gap={2}>
  {/* Image 1 */}
  <Grid item className="gallery-item" style={{ gridColumnStart: 1, gridColumnEnd: 3, gridRowStart: 1, gridRowEnd: 2, }}>
    <Box className="gallery-imgbox">
      <img src="http://unsplash.it/600/400?image=940" alt="img1" className="gallery-img" />
    </Box>
  </Grid>
  {/* Image 2 */}
  <Grid item className="gallery-item" style={{ gridColumnStart: 3, gridColumnEnd: 5, gridRowStart: 1, gridRowEnd: 2 }}>
    <Box className="gallery-imgbox">
      <img src="http://unsplash.it/640/450?image=906" alt="img2" className="gallery-img" />
    </Box>
  </Grid>
  {/* Image 3 */}
  <Grid item className="gallery-item" style={{ gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 2, gridRowEnd: 4 }}>
    <Box className="gallery-imgbox">
      <img src="http://unsplash.it/650/450?image=823" alt="img3" className="gallery-img" />
    </Box>
  </Grid>
  {/* Image 4 */}
  <Grid item className="gallery-item" style={{ gridColumnStart: 2, gridColumnEnd: 4, gridRowStart: 2, gridRowEnd: 3 }}>
    <Box className="gallery-imgbox">
      <img src="http://unsplash.it/600/350?image=815" alt="img4" className="gallery-img" />
    </Box>
  </Grid>
  {/* Image 5 */}
  <Grid item className="gallery-item" style={{ gridColumnStart: 4, gridColumnEnd: 5, gridRowStart: 2, gridRowEnd: 3 }}>
    <Box className="gallery-imgbox">
      <img src="http://unsplash.it/560/500?image=677" alt="img5" className="gallery-img" />
    </Box>
  </Grid>
  {/* Image 6 */}
  <Grid item className="gallery-item" style={{ gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 3, gridRowEnd: 4 }}>
    <Box className="gallery-imgbox">
      <img src="http://unsplash.it/670/410?image=401" alt="img6" className="gallery-img" />
    </Box>
  </Grid>
  {/* Image 7 */}
  <Grid item className="gallery-item" style={{ gridColumnStart: 3, gridColumnEnd: 5, gridRowStart: 3, gridRowEnd: 4 }}>
    <Box className="gallery-imgbox">
      <img src="http://unsplash.it/620/340?image=623" alt="img7" className="gallery-img" />
    </Box>
  </Grid>
=======
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Photo Gallery
        </Typography>
        <Typography variant="body1" sx={{ color: 'gray', mt: 1 }}>
          Explore our educational gallery of informative and inspiring images
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {galleryItems.map((item, index) => {
          const itemsPerRow = 3;
          const rowNumber = Math.floor(index / itemsPerRow); // 0-based row index
          const positionInRow = index % itemsPerRow;

          // Reverse pattern for every other row
          const isFirstOfRow = rowNumber % 2 === 0
            ? positionInRow === 0
            : positionInRow === itemsPerRow - 1;

          // Column sizes
          let xsSize = 4; // 3 images per row on mobile
          let smSize = 6; // tablet
          let mdSize = isFirstOfRow ? 6 : 3; // desktop

          return (
            <Grid
              key={index}
              item
              xs={xsSize}
              sm={smSize}
              md={mdSize}
              sx={{
                flexGrow: 1,
                minWidth: 0,
                display: 'flex',
                ...(isFirstOfRow && !isMobile && {
                  flexBasis: '45vw',
                  maxWidth: '45vw',
                }),
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 2,
                  height: 200,
                  width: '100%',
                  flexGrow: 1,
                  '&:hover': { '& .overlay': { opacity: 1 } },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.title}
                  sx={{ width: '100%', objectFit: 'cover' }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  {item.description && (
                    <Typography
                      variant="body2"
                      sx={{ mt: 1, textAlign: 'center', px: 1 }}
                    >
                      {item.description}
                    </Typography>
                  )}
                </Box>
              </Paper>
            </Grid>
          );
        })}
>>>>>>> 9cf0416cc2e72ae007aa3ca022061800a9c0c1ae
      </Grid>
    </Box>
  );
}

export default Gallery;