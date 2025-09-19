import React, { useState } from "react";
import {
  Grid,
  CardMedia,
  Typography,
  Box,
  Paper,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      title: "Explore Nature",
      description: "Discover the beauty of the natural world",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Tech Innovations",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Ave Adventures",
      image:
        "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Artistic Expressions",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Sports & Fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Sports & Fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Sports & Fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Sports & Fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Sports & Fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Sports & Fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Sports & Fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Sports & Fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Explore Nature",
      description: "Discover the beauty of the natural world",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Tech Innovations",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Ave Adventures",
      image:
        "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Artistic Expressions",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Sports & Fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Sports & Fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Sports & Fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Sports & Fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Sports & Fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Sports & Fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Sports & Fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
    {
      title: "Sports & Fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=384",
    },
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // mobile screen
 const handleImageOnclick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
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
      </Grid>
       <Dialog open={open} onClose={handleClose} maxWidth="md">
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "red",
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ p: 0 }}>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Gallery;