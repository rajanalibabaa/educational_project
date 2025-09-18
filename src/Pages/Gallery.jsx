import React from 'react';
import { Box, Grid } from '@mui/material';
import './Gallery.css';

export default function Gallery() {
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
    </Box>
  );
}
