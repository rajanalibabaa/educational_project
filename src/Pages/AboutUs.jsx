import React from 'react';
import { motion } from 'framer-motion';
import { 
  Typography, 
  Box, 
  Divider, 
  Paper, 
  Grid,
  Chip,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
  Stack
} from '@mui/material';
import heroBg from '../assets/Images/Education.png';
import {
  School,
  Work,
  Groups,
  EmojiEvents,
  LocationOn,
  Star,
  TrendingUp,
  Psychology,
  Person,
  MilitaryTech,
  CastForEducation
} from '@mui/icons-material';
import LineCompenets from "../Components/LineCompenets"

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Animation variants for framer-motion cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  // Animation for floating circles
  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  const facultyMembers = [
    {
      name: "M. Nandhakumar",
      qualification: "MBA (Anna University)",
      experience: "Prepared for UPSC exam since 2011",
      prelimsCleared: 4,
      mainsAppearance: 4,
      interviewAppearance: 1,
      teachingExperience: "Since 2017",
      studentsUPSC: 1000,
      studentsTNPSC: 500,
      expertise: ["Geography", "Economics", "Current Affairs"],
      visitingFacultyAt: [
        "Tamil Nadu Career Services Coaching Institute",
        "Integrations IAS Academy",
        "Focus IAS",
      ],
      avatarColor: "#FF6B35",
      specialty: "Geography & Economics Expert",
      achievements: ["4 Times UPSC Prelims Cleared", "4 Times Mains Appearance", "1 Time Interview Appearance"]
    },
    {
      name: "R. Krishnan",
      qualification: "B.E (Mechanical Engineering), M.A (Historical Studies)",
      experience: "Prepared for UPSCexam since 2016",
      teachingExperience: "Since 2019",
      studentsUPSC: 700,
      studentsTNPSC: 2000,
      studentsSSC: 400,
      seniorFacultyOf: "Kalvi Tholaikatchi",
      visitingFacultyAt: [
        "Tamilnadu Career Services Coaching Institute",
        "Integrations IAS Academy",
        "Thiran IAS Academy",
        "Aarvam IAS Academy",
      ],
      avatarColor: "#2E86AB",
      specialty: "History & Current Affairs Specialist",
      achievements: ["Senior Faculty at Multiple Institutes", "2000+ TNPSC Students Trained"]
    },
  ];

  return (
    <Container maxWidth="false" disableGutters sx={{ px: { xs: 0, sm: 0 }, py: 0, position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Circles */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 0, overflow: 'hidden' }}>
        {/* Large Orange Circle */}
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          style={{
            position: 'absolute',
            top: '15%',
            left: '5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(255,107,53,0.15) 0%, rgba(255,142,83,0.1) 100%)',
            zIndex: 0,
          }}
        />
        
        {/* Medium Blue Circle */}
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          style={{
            position: 'absolute',
            top: '25%',
            right: '10%',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(46,134,171,0.15) 0%, rgba(76,201,240,0.1) 100%)',
            zIndex: 0,
          }}
        />
        
        {/* Small Orange Circle */}
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '15%',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(255,107,53,0.1) 0%, rgba(255,142,83,0.05) 100%)',
            zIndex: 0,
          }}
        />
        
        {/* Small Blue Circle */}
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          style={{
            position: 'absolute',
            bottom: '30%',
            left: '10%',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(46,134,171,0.1) 0%, rgba(76,201,240,0.05) 100%)',
            zIndex: 0,
          }}
        />
        
        {/* Extra Small Orange Circle */}
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          style={{
            position: 'absolute',
            top: '60%',
            left: '20%',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(255,107,53,0.08) 0%, rgba(255,142,83,0.04) 100%)',
            zIndex: 0,
          }}
        />
        
        {/* Extra Small Blue Circle */}
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          style={{
            position: 'absolute',
            top: '10%',
            right: '25%',
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(46,134,171,0.08) 0%, rgba(76,201,240,0.04) 100%)',
            zIndex: 0,
          }}
        />
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: 320, md: 420 },
          width: '100%',
          background: `linear-gradient(120deg, #FF6B35 0%, #2E86AB 100%)`,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          boxShadow: '0 8px 32px 0 rgba(31,41,55,0.15)',
          mb: { xs: 4, md: 8 },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(34, 49, 63, 0.45)',
            zIndex: 1,
            backdropFilter: 'blur(2px)',
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%' }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.8rem' },
              color: '#fff',
              letterSpacing: 1,
              mb: 2,
              textShadow: '0 4px 24px rgba(0,0,0,0.25)',
            }}
          >
            About <span style={{
              background: 'linear-gradient(90deg, #FF6B35, #FF8E53, #2E86AB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 900,
            }}>INTEGRATIONS</span>?
          </Typography>
          <Typography
            sx={{
              color: '#fff',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              maxWidth: 700,
              mx: 'auto',
              mb: 2,
              fontWeight: 400,
              textShadow: '0 2px 8px rgba(0,0,0,0.18)',
            }}
          >
            "We welcome you with thanks for selecting our Academy". We have proven a distinctive curriculum providing comprehensive coaching to aspirants, inculcating cracking aptitude in civil services exams. With a proven track record of results, we strive to be your trusted guide to make your road less travel to reach your goal of becoming the future manager of this Nation.
          </Typography>
        </Box>
      </Box>
      
      {/* Main Content Card */}
      <Box
        sx={{
          fontFamily: 'Roboto, sans-serif',
          background: 'rgba(255,255,255,0.85)',
          borderRadius: 6,
          boxShadow: '0 8px 32px 0 rgba(31,41,55,0.10)',
          overflow: 'hidden',
          position: 'relative',
          px: { xs: 1, sm: 4 },
          py: { xs: 3, md: 6 },
          mx: { xs: 0, sm: 2, md: 8 },
          mt: { xs: -8, md: -12 },
          zIndex: 3,
        }}
      >

        {/* Mission & Vision */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: { xs: 3, md: 4 },
            mb: { xs: 6, md: 8 },
            justifyContent: 'center',
          }}
        >
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ flex: '1 1 100%' }}
          >
            <Box
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)' },
              }}
            >
              <Paper
                sx={{
                  p: { xs: 2, md: 4 },
                  borderRadius: 4,
                  boxShadow: '0 12px 32px rgba(255,107,53,0.10)',
                  background: 'rgba(255,255,255,0.85)',
                  height: '100%',
                  borderLeft: '6px solid #FF6B35',
                  backdropFilter: 'blur(2px)',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 16px 40px rgba(255,107,53,0.18)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <TrendingUp sx={{ color: '#FF6B35', fontSize: { xs: 28, md: 32 }, mr: 2 }} />
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      color: '#FF6B35',
                      fontSize: { xs: '1.3rem', md: '1.5rem' },
                    }}
                  >
                    Mission
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '1.08rem' },
                    lineHeight: 1.7,
                    color: '#374151',
                    pl: { xs: 0, md: 6 },
                  }}
                >
                  Empowering future leaders through excellence in education. Our academy is committed to providing comprehensive coaching, personalized guidance, and a nurturing environment to aspirants, equipping them with the knowledge, skills, and values necessary for success in the competitive world of civil services.
                </Typography>
              </Paper>
            </Box>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ flex: '1 1 100%' }}
          >
            <Box
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)' },
              }}
            >
              <Paper
                sx={{
                  p: { xs: 2, md: 4 },
                  borderRadius: 4,
                  boxShadow: '0 12px 32px rgba(46,134,171,0.10)',
                  background: 'rgba(255,255,255,0.85)',
                  height: '100%',
                  borderLeft: '6px solid #2E86AB',
                  backdropFilter: 'blur(2px)',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 16px 40px rgba(46,134,171,0.18)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Psychology sx={{ color: '#2E86AB', fontSize: { xs: 28, md: 32 }, mr: 2 }} />
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      color: '#2E86AB',
                      fontSize: { xs: '1.3rem', md: '1.5rem' },
                    }}
                  >
                    Vision
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '1.08rem' },
                    lineHeight: 1.7,
                    color: '#374151',
                    pl: { xs: 0, md: 6 },
                  }}
                >
                  To emerge as a significant social impact organization grooming the future generation of our Nation and Society. Our vision is to promote a new ecosystem that enables aspirants to excel in exams and influence others with their knowledge, skills, and personal ethics.
                </Typography>
              </Paper>
            </Box>
          </motion.div>
        </Box>

        
           <LineCompenets/>
        {/* Enhanced Faculty Section */}
        <Box sx={{ py: { xs: 4, md: 8 }, px: { xs: 1, md: 2 } }}>

          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
            <Typography 
              variant="h3" 
              sx={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
                background: 'linear-gradient(90deg, #172920ff, #0d394cff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              Our Expert Faculty
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary', 
                maxWidth: 700, 
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.1rem' }
              }}
            >
              Learn from the best in the industry with years of experience in training successful candidates
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
              justifyContent: 'center',
              alignItems: 'stretch',
              width: '100%',
              
            }}
          >
            {facultyMembers.map((faculty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ flex: 1, display: 'flex' }}
              >
                <Card
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    overflow: 'visible',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                    },
                    minWidth: 0,
                  }}
                >
                    {/* Header with Avatar and Basic Info */}
                    <Box 
                      sx={{ 
                        background: `linear-gradient(120deg, ${faculty.avatarColor}40, ${faculty.avatarColor}20)`,
                        pt: 4,
                        pb: 2,
                        px: 3,
                        position: 'relative',
                        textAlign: 'center'
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 100,
                          height: 100,
                          mx: 'auto',
                          mb: 2,
                          border: `4px solid ${faculty.avatarColor}`,
                          bgcolor: faculty.avatarColor,
                          fontSize: '2.5rem',
                          fontWeight: 'bold'
                        }}
                      >
                        {faculty.name.split(' ').map(n => n[0]).join('')}
                      </Avatar>
                      
                      <Chip
                        icon={<CastForEducation />}
                        label="Expert Faculty"
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          background: 'linear-gradient(45deg, #FF6B35, #FF8E53)',
                          color: 'white',
                          fontWeight: 'bold'
                        }}
                      />
                      
                      <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5 }}>
                        {faculty.name}
                      </Typography>
                      
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                        {faculty.qualification}
                      </Typography>
                      
                      <Chip 
                        label={faculty.specialty} 
                        size="small" 
                        sx={{ 
                          background: 'linear-gradient(45deg, #2E86AB, #4CC9F0)',
                          color: 'white',
                          fontWeight: 'bold'
                        }}
                      />
                    </Box>

                    <CardContent sx={{ p: 3 }}>
                      {/* Stats Grid */}
                      <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid item xs={6}>
                          <Paper 
                            elevation={0} 
                            sx={{ 
                              p: 1.5, 
                              textAlign: 'center',
                              background: 'linear-gradient(45deg, #FF6B3520, #FF8E5320)',
                              borderRadius: 3
                            }}
                          >
                            <School sx={{ color: '#FF6B35', fontSize: 28, mb: 0.5 }} />
                            <Typography variant="body2" sx={{ fontWeight: 700 }}>Teaching Since</Typography>
                            <Typography variant="body2">{faculty.teachingExperience}</Typography>
                          </Paper>
                        </Grid>
                        
                        <Grid item xs={6}>
                          <Paper 
                            elevation={0} 
                            sx={{ 
                              p: 1.5, 
                              textAlign: 'center',
                              background: 'linear-gradient(45deg, #2E86AB20, #4CC9F020)',
                              borderRadius: 3
                            }}
                          >
                            <Work sx={{ color: '#2E86AB', fontSize: 28, mb: 0.5 }} />
                            <Typography variant="body2" sx={{ fontWeight: 700 }}>Experience</Typography>
                            <Typography variant="body2">{faculty.experience}</Typography>
                          </Paper>
                        </Grid>
                        
                        <Grid item xs={6}>
                          <Paper 
                            elevation={0} 
                            sx={{ 
                              p: 1.5, 
                              textAlign: 'center',
                              background: 'linear-gradient(45deg, #FF6B3520, #FF8E5320)',
                              borderRadius: 3
                            }}
                          >
                            <Groups sx={{ color: '#FF6B35', fontSize: 28, mb: 0.5 }} />
                            <Typography variant="body2" sx={{ fontWeight: 700 }}>UPSC Students</Typography>
                            <Typography variant="body2">{faculty.studentsUPSC}+</Typography>
                          </Paper>
                        </Grid>
                        
                        <Grid item xs={6}>
                          <Paper 
                            elevation={0} 
                            sx={{ 
                              p: 1.5, 
                              textAlign: 'center',
                              background: 'linear-gradient(45deg, #2E86AB20, #4CC9F020)',
                              borderRadius: 3
                            }}
                          >
                            <EmojiEvents sx={{ color: '#2E86AB', fontSize: 28, mb: 0.5 }} />
                            <Typography variant="body2" sx={{ fontWeight: 700 }}>TNPSC Students</Typography>
                            <Typography variant="body2">{faculty.studentsTNPSC}+</Typography>
                          </Paper>
                        </Grid>
                      </Grid>

                      {/* Expertise */}
                      {faculty.expertise && (
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, display: 'flex', alignItems: 'center' }}>
                            <MilitaryTech sx={{ mr: 1, color: '#FF6B35' }} /> Areas of Expertise
                          </Typography>
                          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            {faculty.expertise.map((exp, idx) => (
                              <Chip 
                                key={idx} 
                                label={exp} 
                                size="small" 
                                sx={{ 
                                  mb: 1,
                                  background: 'linear-gradient(45deg, #FF6B35, #FF8E53)',
                                  color: 'white',
                                  fontWeight: 'bold'
                                }} 
                              />
                            ))}
                          </Stack>
                        </Box>
                      )}

                      {/* Achievements */}
                      {faculty.achievements && (
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, display: 'flex', alignItems: 'center' }}>
                            <Star sx={{ mr: 1, color: '#FF6B35' }} /> Key Achievements
                          </Typography>
                          <List dense>
                            {faculty.achievements.map((achievement, idx) => (
                              <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                  <Star sx={{ color: '#FF6B35', fontSize: 18 }} />
                                </ListItemIcon>
                                <ListItemText 
                                  primary={achievement} 
                                  primaryTypographyProps={{ variant: 'body2' }} 
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Box>
                      )}

                      {/* Visiting Faculty */}
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, display: 'flex', alignItems: 'center' }}>
                          <LocationOn sx={{ mr: 1, color: '#2E86AB' }} /> Visiting Faculty At
                        </Typography>
                        <List dense>
                          {faculty.visitingFacultyAt.map((inst, idx) => (
                            <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 36 }}>
                                <School sx={{ color: '#2E86AB', fontSize: 18 }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary={inst} 
                                primaryTypographyProps={{ variant: 'body2' }} 
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>

                      {/* Additional Info */}
                      {faculty.seniorFacultyOf && (
                        <Paper 
                          elevation={0} 
                          sx={{ 
                            mt: 2, 
                            p: 2, 
                            background: 'linear-gradient(45deg, #2E86AB15, #4CC9F015)',
                            borderRadius: 3,
                            borderLeft: `4px solid #2E86AB`
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 700, display: 'flex', alignItems: 'center' }}>
                            <Person sx={{ mr: 1, color: '#2E86AB' }} /> Senior Faculty of {faculty.seniorFacultyOf}
                          </Typography>
                        </Paper>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
            ))}
          </Box>
        </Box>
        
      </Box>
      
      {/* Final CTA */}
      <Box sx={{ textAlign: 'center', marginTop: { xs: 4, md: 8 }, position: 'relative', zIndex: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            color: '#1f2937',
            mb: 2,
            fontSize: { xs: '1.1rem', md: '1.3rem' },
            fontWeight: 700,
            letterSpacing: 0.5,
          }}
        >
          Join hundreds of successful students who have achieved their dreams with our guidance.
        </Typography>
        <Paper
          sx={{
            display: 'inline-block',
            px: 4,
            py: 1.5,
            mb:7,
            borderRadius: 3,
            background: 'linear-gradient(90deg, #26e6a6ff, #2cc870ff, #33cf9bff)',
            color: 'white',
            fontWeight: 800,
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(255,107,53,0.18)',
            fontSize: { xs: '1.05rem', md: '1.15rem' },
            letterSpacing: 1,
            transition: 'box-shadow 0.3s',
            '&:hover': {
              boxShadow: '0 16px 40px rgba(255,107,53,0.28)',
              background: 'linear-gradient(90deg, #95bae7ff, #2951c1ff, #236499ff)',
            },
          }}
        >
          Start Your Journey Today
        </Paper>
      </Box>
    </Container>
  );
};

export default AboutUs;