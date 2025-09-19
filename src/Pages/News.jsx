import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Divider,
  Modal,
  TextField,
  IconButton,
  InputAdornment,
  Alert,
  AppBar,
  Toolbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Close,
  Login,
  Add,
  Edit,
  Delete,
} from "@mui/icons-material";

const News = () => {
  // ===== Default Allowed Users (JSON data) =====
  const allowedUsers = [
  {
    username: import.meta.env.VITE_USERNAME,
    password: import.meta.env.VITE_PASSWORD,
  },
];


  console.log
  ("====",allowedUsers)

  // States for login modal
  const [openLogin, setOpenLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // States for CRUD modal and operations
  const [openCrud, setOpenCrud] = useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      heading: "Breaking News",
      topic: "Technology",
      content: "New AI model breaks performance records",
      image:
        "https://images.unsplash.com/photo-1677442135135-416f8aa26a5b?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      heading: "Weather Update",
      topic: "Environment",
      content: "Unseasonal rains expected this weekend",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b5b?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      heading: "Market Trends",
      topic: "Finance",
      content: "Stock market shows signs of recovery",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80",
    },
  ]);
  const [editingItem, setEditingItem] = useState(null);
  const [openItemModal, setOpenItemModal] = useState(false);
  const [itemForm, setItemForm] = useState({
    heading: "",
    topic: "",
    content: "",
    image: "",
  });

  // ===== Login Handlers =====
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => {
    setOpenLogin(false);
    setLoginError(false);
    setFormData({ username: "", password: "" });
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if entered credentials match allowedUsers JSON
    const validUser = allowedUsers.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password
    );

    if (validUser) {
      console.log("Login Success:", validUser);
      handleCloseLogin();
      setOpenCrud(true); // open CRUD after success
    } else {
      setLoginError(true);
    }
  };

  // ===== CRUD Handlers =====
  const handleCloseCrud = () => setOpenCrud(false);

  const handleOpenItemModal = (item = null) => {
    if (item) {
      setEditingItem(item);
      setItemForm({
        heading: item.heading,
        topic: item.topic,
        content: item.content,
        image: item.image,
      });
    } else {
      setEditingItem(null);
      setItemForm({
        heading: "",
        topic: "",
        content: "",
        image: "",
      });
    }
    setOpenItemModal(true);
  };

  const handleCloseItemModal = () => {
    setOpenItemModal(false);
    setEditingItem(null);
    setItemForm({
      heading: "",
      topic: "",
      content: "",
      image: "",
    });
  };

  const handleItemFormChange = (e) => {
    const { name, value } = e.target;
    setItemForm({
      ...itemForm,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setItemForm({
          ...itemForm,
          image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveItem = () => {
    if (editingItem) {
      setItems(
        items.map((item) =>
          item.id === editingItem.id ? { ...editingItem, ...itemForm } : item
        )
      );
    } else {
      const newItem = {
        id: Math.max(...items.map((item) => item.id)) + 1,
        ...itemForm,
      };
      setItems([...items, newItem]);
    }
    handleCloseItemModal();
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", mb: 5, mt: 5, px: 2 }}>
      {/* Title */}
      <Typography
        variant="h3"
        component="button"
        onClick={handleOpenLogin}
        sx={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 900,
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
          background: "linear-gradient(90deg, #172920ff, #0d394cff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 3,
          border: "none",
          textAlign: "center",
          cursor: "pointer",
          display: "block",
          width: "100%",
        }}
      >
        Our News
      </Typography>

      {/* Sample Card */}
      <Card
        sx={{
          borderRadius: 2,
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
          },
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(90deg, #1976d2 0%, #0d47a1 100%)",
            py: 2,
            px: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              display: "block",
              fontWeight: "bold",
              textAlign: "left",
              color: "white",
              border: "none",
              background: "none",
            }}
          >
            Topic
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            pt: 3,
            pb: 5,
            pl: 3,
          }}
        >
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1170&q=80"
            alt="Sample"
            sx={{
              width: { xs: "100%", md: "40%" },
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
          <CardContent
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: { xs: 2, md: 4 },
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              Breaking Update
            </Typography>
            <Divider
              sx={{
                mb: 2,
                width: "60px",
                borderBottomWidth: 3,
                bgcolor: "primary.main",
              }}
            />
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 2, lineHeight: 1.6 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
              justo a elit feugiat tincidunt.
            </Typography>
            <Button
              variant="contained"
              sx={{
                alignSelf: "flex-start",
                mt: 2,
                px: 3,
                fontWeight: "bold",
              }}
            >
              Read More
            </Button>
          </CardContent>
        </Box>
      </Card>

      {/* ===== Login Modal ===== */}
      <Modal open={openLogin} onClose={handleCloseLogin}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 400 },
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleCloseLogin}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "grey.500",
            }}
          >
            <Close />
          </IconButton>

          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Login /> User Login
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Please enter your credentials
          </Typography>

          {loginError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              Invalid username or password
            </Alert>
          )}

          <Box component="form" onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleInputChange}
              margin="normal"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* ===== CRUD Modal ===== */}
      <Modal open={openCrud} onClose={handleCloseCrud}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "95%", sm: "90%", md: "80%" },
            maxWidth: 1000,
            maxHeight: "90vh",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            overflow: "auto",
          }}
        >
          <AppBar position="sticky" elevation={0}>
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                News Management
              </Typography>
              <IconButton color="inherit" onClick={handleCloseCrud}>
                <Close />
              </IconButton>
            </Toolbar>
          </AppBar>

          <Box sx={{ p: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
              <Button
                variant="contained"
                startIcon={<Add />}
                onClick={() => handleOpenItemModal()}
              >
                Add New Article
              </Button>
            </Box>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Heading</TableCell>
                    <TableCell>Topic</TableCell>
                    <TableCell>Content Preview</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        {item.heading}
                      </TableCell>
                      <TableCell>{item.topic}</TableCell>
                      <TableCell>
                        {item.content.length > 50
                          ? `${item.content.substring(0, 50)}...`
                          : item.content}
                      </TableCell>
                      <TableCell>
                        <Box
                          component="img"
                          src={item.image}
                          sx={{
                            width: 60,
                            height: 40,
                            objectFit: "cover",
                            borderRadius: 1,
                          }}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          color="primary"
                          onClick={() => handleOpenItemModal(item)}
                        >
                          <Edit />
                        </IconButton>
                        <IconButton
                          color="error"
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Modal>

      {/* ===== Add/Edit Item Modal ===== */}
      <Dialog
        open={openItemModal}
        onClose={handleCloseItemModal}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          {editingItem ? "Edit Article" : "Add New Article"}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 1 }}>
            <TextField
              autoFocus
              margin="dense"
              name="heading"
              label="Heading"
              fullWidth
              value={itemForm.heading}
              onChange={handleItemFormChange}
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Topic</InputLabel>
              <Select
                name="topic"
                value={itemForm.topic}
                label="Topic"
                onChange={handleItemFormChange}
              >
                <MenuItem value="Technology">Technology</MenuItem>
                <MenuItem value="Environment">Environment</MenuItem>
                <MenuItem value="Finance">Finance</MenuItem>
                <MenuItem value="Health">Health</MenuItem>
                <MenuItem value="Politics">Politics</MenuItem>
                <MenuItem value="Sports">Sports</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="dense"
              name="content"
              label="Content"
              fullWidth
              multiline
              rows={4}
              value={itemForm.content}
              onChange={handleItemFormChange}
              sx={{ mb: 2 }}
            />
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" gutterBottom>
                Image
              </Typography>
              <Button variant="outlined" component="label" fullWidth>
                Upload Image
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </Button>
              {itemForm.image && (
                <Box sx={{ mt: 2, textAlign: "center" }}>
                  <Typography variant="body2">Preview:</Typography>
                  <Box
                    component="img"
                    src={itemForm.image}
                    sx={{ maxWidth: "100%", maxHeight: 200 }}
                  />
                </Box>
              )}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseItemModal}>Cancel</Button>
          <Button onClick={handleSaveItem} variant="contained">
            {editingItem ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default News;
